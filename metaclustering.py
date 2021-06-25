import requests; import ast; import shapely; from shapely.geometry import Point
import pandas as pd; import geopandas as gpd; import numpy as np; import math
from tqdm import tqdm; import os
import moira
states = {
    'WA': '53', 'DE': '10', 'DC': '11', 'WI': '55', 'WV': '54', 'HI': '15',
    'FL': '12', 'WY': '56', 'PR': '72', 'NJ': '34', 'NM': '35', 'TX': '48',
    'LA': '22', 'NC': '37', 'ND': '38', 'NE': '31', 'TN': '47', 'NY': '36',
    'PA': '42', 'AK': '02', 'NV': '32', 'NH': '33', 'VA': '51', 'CO': '08',
    'CA': '06', 'AL': '01', 'AR': '05', 'VT': '50', 'IL': '17', 'GA': '13',
    'IN': '18', 'IA': '19', 'MA': '25', 'AZ': '04', 'ID': '16', 'CT': '09',
    'ME': '23', 'MD': '24', 'OK': '40', 'OH': '39', 'UT': '49', 'MO': '29',
    'MN': '27', 'MI': '26', 'RI': '44', 'KS': '20', 'MT': '30', 'MS': '28',
    'SC': '45', 'KY': '21', 'OR': '41', 'SD': '46'
}
states = {states[x]:x for x in states}
DOD = moira.DDData()

DOD.flexscan_results["States"] = [
    pd.Series([states[moira.get_fips(f)[:2]] for f in x.split(", ")]).sort_values().unique()
    for x in DOD.flexscan_results.Cluster
]

DOD.flexscan_results["FIPS"] = [[moira.get_fips(f) for f in x.split(", ")] for x in DOD.flexscan_results.Cluster]

DOD.flexscan_results['Cluster'] = DOD.flexscan_results['Cluster Pe']+" "+DOD.flexscan_results['rank'].astype(str)

DOD.flexscan_results["n_states"]=[len(x) for x in DOD.flexscan_results.States]

DOD.flexscan_results["States"] = DOD.flexscan_results.States.astype(str)

clustered_fips = []
for x in DOD.flexscan_results.FIPS:
    clustered_fips = clustered_fips + list(x)
clustered_fips = pd.Series(clustered_fips).value_counts()
clustered_fips = clustered_fips.loc[clustered_fips>1]

DOD.flexscan_data["FIPS"] = DOD.flexscan_data["FIPS"].apply(moira.get_fips)

counties=gpd.GeoDataFrame(
    DOD.counties420[
        DOD.counties420.FIPS.isin(clustered_fips.index)
    ].merge(
        DOD.flexscan_data[DOD.flexscan_data.Year==2000][["FIPS","PR"]],
        on="FIPS",how="left"
    )
)

cld = []
mcl = []
for i in counties.index:
    tps = []
    sts = []
    fips = counties.FIPS[i]
    for j in DOD.flexscan_results.index:
        if fips in DOD.flexscan_results.FIPS[j]:
            tp = DOD.flexscan_results["Cluster Pe"][j]
            tps.append(tp)
            st = list(
                g for g in DOD.flexscan_results["States"][j].split("'") 
                if g not in ('[',' ',']')
            )
            st = list(pd.Series(st).sort_values().unique())
            if st not in sts:
                sts.append(st)
                        
    cld.append(tps)
    mcl.append(sorted(sts, key=len))
    
counties["States"] = mcl
counties["Clustered"] = cld
counties[["FIPS","NAMELSAD","Clustered","States","geometry"]]

counties.loc[
    counties.STATEFP=="54",
    "Metacluster"
] = "West Virginia"

counties.loc[
    counties.States.astype(str).isin(["[['PA', 'WV']]", "[['PA'], ['PA', 'WV']]"]),
    "Metacluster"
] = "Wastern PA"

counties.loc[
    counties.States.astype(str).isin(["[['PA']]"]),
    "Metacluster"
] = "Eastern PA"

counties.loc[
    (counties.STATEFP=="51")|
    (counties.States.astype(str).isin([
        "[['NC', 'VA']]",
        "[['NC', 'VA'], ['VA', 'WV']]",
        "[['NC', 'VA'], ['VA', 'WV']]",
        "[['NC', 'VA'], ['NC', 'SC']] ",
        "[['NC', 'VA'], ['NC', 'TN', 'VA']]", 
        "[['NC', 'VA'], ['NC', 'TN', 'VA']]",
        "[['KY', 'VA'], ['KY', 'TN', 'VA']]",
        "[['KY', 'VA'], ['KY', 'TN', 'VA'], ['KY', 'VA', 'WV']]",
        "[['VA', 'WV'], ['NC', 'TN', 'VA'], ['KY', 'VA', 'WV']]",
        "[['VA', 'WV'], ['KY', 'VA', 'WV']]",
        "[['NC', 'VA'], ['VA', 'WV']]",
    ])),
    "Metacluster"
] = "VA + North NC"

counties.loc[
    counties.STATEFP=="21",
    "Metacluster"
] = "Kentucky"

counties.loc[
    counties.STATEFP=="01",
    "Metacluster"
] = "Alabama"

counties.loc[
    counties.STATEFP=="47",
    "Metacluster"
] = "Tennessee"

counties.loc[
    counties.Metacluster.isna(),
    "Metacluster"
] = "South NC + SC + GA"

vc=counties.Metacluster.value_counts()
metaclusters = pd.DataFrame({"Metacluster":vc.index,"n_counties":vc.values})
metaclusters["FIPS"] = [np.nan]*len(metaclusters)
for i in metaclusters.index:
    mc = metaclusters.Metacluster[i]
    cdf = counties[counties.Metacluster==mc]
    metaclusters["FIPS"][i] = cdf.FIPS.values
    metaclusters.at[i, "geometry"] = cdf.geometry.unary_union
    
metaclusters["FIPS"] = metaclusters.FIPS.astype(str)
gpd.GeoDataFrame(metaclusters).to_file("mc_data/metclusters.geojson", driver="GeoJSON")