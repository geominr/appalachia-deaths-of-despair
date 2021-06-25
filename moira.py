import pandas as pd; import geopandas as gpd
from io import StringIO; import requests; import time
import numpy as np

def log_in(username, password):
    payload = "username="+username+"&password="+password
    headers = {'Host': "moira.pitt.edu",'Content-Type': "application/x-www-form-urlencoded"}
    response = requests.request("POST", "https://moira.pitt.edu/api/login", data=payload, headers=headers)
    x = response.json()
    token = "Bearer {}".format(x["token"])
    return token

def get_fips(fips):
    fips = str(fips).replace('.0','')
    return fips if len(fips) == 5 else '0'+fips
    
def get_rates(payload, username, password, as_matrix=None):  
    payload = str(payload).replace("'","\"") 
    # Send API request to MOIRA using Login credentials
    headers = {'Authorization': log_in(username, password),
               'Content-Type': "application/json",
              'Host': "moira.pitt.edu"
              }
    response = requests.request("POST", "https://moira.pitt.edu/api/get_rate", 
                                data=payload, headers=headers)
    # Convert response (text object) to a pandas DataFrame
    data = pd.read_csv(StringIO(response.text))
    if 'Deaths' not in data.columns:
        return data
    else:
        # handle suppression
        data.loc[
            data.Deaths=="SUPPRESSED",
            [col for col in data.columns if ("Death" in col) | ("Rate" in col)]
        ] = np.nan
        for col in data.columns:
            if ("Death" in col) | ("Rate" in col):
                data[col] = data[col].astype(float)
        
        if as_matrix and as_matrix not in [
            col for col in data.columns 
            if ("Death" in col) | ("Rate" in col)
        ]:
            as_matrix = None

        if "Formatted_FIPS" in data.columns:
            data["Formatted_FIPS"] = data.Formatted_FIPS.apply(get_fips)
        
        return data if not as_matrix else get_matrix(data, as_matrix)

def get_matrix(data, values):
    return data.pivot(
        index="Formatted_FIPS", 
        columns="Time_Period_Label", 
        values=values
    ).reset_index()

def load_dod_data(self, level="county"):
    payload = {
      'timePeriod': ['1979-1983', '1984-1988', '1989-1993', 
                      '1994-1998', '1999-2003', '2004-2008', 
                      '2009-2013', '2014-2017'], 
       'geoLevel': 'County', 
       'abbreviatedStates': ['AL', 'GA', 'KY', 'MD', 'MS', 'NY', 
                             'NC', 'OH', 'PA', 'SC', 'TN', 'VA', 'WV'],
       'countyFIPS': list(self.counties420.FIPS),
       'geoAggregate': 'Aggregate Selected Counties',
       'ageGroup': "All Default", 'ageGroupCategory': '12', 
       'race': 'All', 'sex': 'All', 
       'codCategory': '113', 'cod': [77, 78, 97, 111, 112], 
       'groupBy': ['timePeriod'], 
       'ageAdjustment': 'true', 
       'ratesPer': '100000' 
    }
    # Import FIPS codes for selection of 420 counties
    if level == "state":
        payload['timePeriod'] = [int(i) for i in range(1979,2018)]
        payload['geoLevel'] = "State"
        del payload['countyFIPS']; payload['geoAggregate']
    elif level == "region":
        payload['timePeriod'] = [int(i) for i in range(1979,2018)]
    else:
        del payload['geoAggregate']
    # Convert dict to String with double quotes
    return get_rates(payload, self.username, self.password)

class DDData():
    def __init__(self):
        self.counties420 = gpd.read_file(
            "midwest_420/Deaths of Despair/Deaths_of_Despair/appalachia_counties.shp"
        )
        states = gpd.read_file(
            "https://opendata.arcgis.com/datasets/1b02c87f62d24508970dc1a6df80c98e_0.geojson"
        )
        self.states = states[states.geometry.intersects(self.counties420.geometry.unary_union)]
        self.username = ""
        self.password = ""
        self.dod_data = load_dod_data(self)
        self.dod_data_state = load_dod_data(self, "state")
        #self.dod_data_region = load_dod_data(self, "region")
        self.mx_aar = get_matrix(self.dod_data, "Age_Adjusted_Rate")
        self.mx_dth = get_matrix(self.dod_data, "Deaths")
        self.flexscan_data = pd.read_csv("midwest_420/Deaths of Despair/Deaths_of_Despair/moira_data_new_expected.csv")
        self.flexscan_results = gpd.read_file("midwest_420/data/clusters_results.shp")
        self.metaclusters = gpd.read_file("mc_data/metaclusters.geojson")
    
    def run_rflexscan():
        pass
    
    def plot_timeseries():
        pass
    
    def plot_percent_change():
        pass
    
    
#class FlexibleCluster(DDData):
    
    
    
    
    
    
    