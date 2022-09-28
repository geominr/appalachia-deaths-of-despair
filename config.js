var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cl8hrrvhz000614mvcojpgv1n',
    alignment: 'left',
    toptitle: 'Story Map Series | January 2023',
    title: "A Visual Timeline of the Opioid Crisis and Its Toll on Appalachia",
    byline: 'By Raanan Gurewitsch, Saumyadipta Pyne and Meghana Aruru',
    description: "Between 1979 and 2017, the average Appalachian county experienced a X% increase in yearly mortality rate, lowering the average life expectancy by X years. This trend was driven by an ongoing epidemic of addiction, overdose and suicide. A host of academic studies, lawsuits and investigations have laid blame on the opioid industry, specifically drug manufacturer Purdue Pharma.<br>In this story map, we use data from the Mortality Information Research Analytics database (MOIRA), a collection of American death certificates spanning nearly four decades. Specifically, we look at death rates from suicide, alcohol and drug overdose in the 420 counties of the Eastern United States that make up the Appalachian region. These rates of deaths of despair show how the Opioid Crisis cast a dark cloud over the region for twenty years, hitting many of the most vulnerable corners of the country.",
    chapters: [
      // intro
        {
            id: 'intro',
            title: 'Deaths of Despair in Appalachia, 1979-2017',
            image: '',
            imageCredit: '',
            description: "The following maps display data for the 420 counties that make up the Appalachian region, spanning from Upstate New York to Eastern Mississippi.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'appalachia',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: 'appalachia',
                    opacity: 0
                }
            ]
        },
      // 1979-1983
        {
            id: 'chapter0',
            title: '1979-1983',
            image: '',
            imageCredit: '',
            description: "Using data from MOIRA, we map out the age-adjusted mortality rate for accidental drug overdose, suicide (intentional self-harm), and alcohol-related/sirrohsis of the liver (ICD-10,12.43,913,14).",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1979-1983',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1979-1983',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1984-1988
        {
            id: 'chapter1',
            title: '1984-1988',
            image: '',
            imageCredit: '',
            description: "The age-adjusted rate is the number of people out of every 100,000 in each five-year time period who died from these despair-related causes, or the number of Deaths of Despair per 100,000 people.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1984-1988',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1984-1988',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1989-1993
        {
            id: 'chapter2',
            title: '1989-1993',
            image: '',
            imageCredit: '',
            description: "We use Wikipedia's <a href='https://en.wikipedia.org/wiki/Timeline_of_the_opioid_epidemic'>Timeline of the Opioid Epidemic</a> to tell the story of how the dangerous drug flooded the region. The maps show how each new chapter brought more pain and despair to the people of Appalaichia.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1994-1998',
                    opacity: 0
                },
                {
                    layer: '1989-1993',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1989-1993',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1994-1998 (1)
        {
            id: 'chapter3',
            title: '1994-1998',
            image: '',
            imageCredit: '',
            description: 'In December 1995, the FDA approved OxyContin--controlled-release oxycodone, "the first formulation of oxycodone that allowed dosing every 12 hours instead of every 4 to 6 hours."',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1994-1998 (2)
        {
            id: 'chapter3.1',
            title: '1994-1998',
            image: '',
            imageCredit: '',
            description: "A July 1996 study co-authored by Paul D. Goldenheim MD - who later became Purdue's chief medical officer - published in the Journal of Clinical Pharmacology reported that the controlled-release (CR) formulation - by mouth - had a variable duration of action ranging from 10–12 hours. The report by eight authors said that, \"[t]reatment with CR oxycodone was safe and effective in this study, and its characteristics will be beneficial in the treatment of pain.\"",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1994-1998 (3)
        {
            id: 'chapter3.2',
            title: '1994-1998',
            image: '',
            imageCredit: '',
            description: 'In 1996, Purdue Pharma "began a massive marketing campaign", based on a "unique claim" for OxyContin, with FDA permission, that, "as a long-acting opioid, it might be less likely to cause abuse and addiction than shorter-acting painkillers like Percocet."[13]',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                },
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1994-1998 (4)
        {
            id: 'chapter3.3',
            title: '1994-1998',
            image: '',
            imageCredit: '',
            description: 'In 1998, Purdue\'s audiotapes, brochures, videotapes, literature and its website "Partners Against Pain", "claimed that the risk of addiction from OxyContin was extremely small."[16][10]<br>In November that same year, the FDA approved Actiq (fentanyl).[1]',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1999-2003',
                    opacity: 0
                },
                {
                    layer: '1994-1998',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1994-1998',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1999-2003 (1)
        {
            id: 'chapter4',
            title: '1999-2003',
            image: '',
            imageCredit: '',
            description: 'By 2001, the number of prescriptions of OxyContin rose to more than 14 million in 2001 and 2002 up from 316,000 prescriptions in 1996. This represented almost $3 billion in sales compared to $44 million in 1996.[10]',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '1999-2003',
                    opacity: 0.75
                },
                {
                    layer: '1999-2003',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1999-2003',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 1999-2003 (2)
        {
            id: 'chapter4.1',
            title: '1999-2003',
            image: '',
            imageCredit: '',
            description: 'In 2002 during the United States Senate Committee on Health, Education, Labor, and Pensions Hearing on "OxyContin: balancing risks and benefits", Paul Goldenheim reported that in 2001 alone Purdue spent $200 million marketing OxyContin.[19]: 87 [10] Purdue directly sponsored and/or gave grants for over "20,000 pain-related educational programs" influencing doctors\' prescribing in the United States from 1996 to July 2002.[10]',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2004-2008',
                    opacity: 0
                },
                {
                    layer: '1999-2003',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '1999-2003',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2004-2008 (1)
        {
            id: 'chapter5',
            title: '2004-2008',
            image: '',
            imageCredit: '',
            description: 'On October 4, 2007, Kentucky officials sued Purdue because of widespread Oxycontin abuse in Appalachia. A lawsuit filed by Kentucky\'s then-Attorney General Greg Stumbo and Pike County officials demanded millions in compensation.[22]',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2004-2008',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2004-2008',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2004-2008 (2)
        {
            id: 'chapter5.1',
            title: '2004-2008',
            image: '',
            imageCredit: '',
            description: 'In May 2007, Purdue Frederick Company Inc, an affiliate of Purdue Pharma, along with 3 company executives, pleaded guilty to criminal charges of misbranding OxyContin by claiming that it was less addictive and less subject to abuse and diversion than other opioids"[10] after the U.S. Department of Justice investigated the allegations.',
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2009-2013',
                    opacity: 0
                },
                {
                    layer: '2004-2008',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2004-2008',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2009-2013 (1)
        {
            id: 'chapter6',
            title: '2009-2013',
            image: '',
            imageCredit: '',
            description: "At their sentencing hearing in July 2007, Judge James P. Jones of the United States District Court sentenced Friedman, Udell and Goldenheim to three years' probation, and community service in drug treatment programs and $19 million, $8 million and $7.5 million in fines, respectively.[26] The $600 million fine was one of the largest pharmaceutical settlements in U.S. history.[27][26][25][28]",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2009-2013',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2009-2013',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2009-2013 (2)
        {
            id: 'chapter6.1',
            title: '2009-2013',
            image: '',
            imageCredit: '',
            description: "Over the next several years, more investigations and lawsuits against Purdue Pharma and the Sackler family that ran it began to promulgate from the Federal government, New York, Massachuessetts, Florida, Nevada, North Carolina and others. However, the legal action against the company did little to temper the opioid epidemic as death rates continued to soar throughout the region.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2014-2017',
                    opacity: 0,
                },
                {
                    layer: '2009-2013',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2009-2013',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2014-2017 (1)
        {
            id: 'chapter7',
            title: '2014-2017',
            image: '',
            imageCredit: '',
            description: "By 2017, the number of drug overdose deaths nationwide had soared to over 70,000, according to the National Institutes of Health. This was also the time period during which the synthetic opioid fentanyl became the most common substance involved in fatal overdoses, causing more than half of all overdoses nationwide.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2014-2017',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2014-2017',
                    opacity: 0.75
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // 2014-2017 (2)
        {
            id: 'chapter7',
            title: '2014-2017',
            image: '',
            imageCredit: '',
            description: "Purdue Pharma would announce that they were reducing their commercial operations and no longer promoting opioids to perscribers in 2018. By the beginning of 2019, 36 states were suing Purdue Pharma for its role in the Opioid Epidemic.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: '2014-2017',
                    opacity: 0.75
                }
            ],
            onChapterExit: [
                {
                    layer: '2014-2017',
                    opacity: 0
                }
            ],
            chapterLegend: {
              type:'choropleth',
              legend:{
                "colors":["#002f61", "#00688b", "#009c9b", "#00cd8e", "#81f15e", "#ffff00"],
                "breaks":[120, 100, 80, 60, 40, 20],
                "title": "Deaths of Despair per 100,000 people"
              }
            }
        },
      // thank you
        {
            id: 'thankyou',
            title: 'Thank you for reading!',
            image: '',
            imageCredit: '',
            description: "Story by Raanan Gurewitsch and Saumyadipta Pyne<br>Maps and animations by Raanan Gurewitsch</small>",
            location: {
              center: [-99.429,38.679],
              zoom: 3.27,
              pitch:0,
              bearing:0
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ],
            chapterLegend: {
              type:'none',
              legend:"none"
            }
        },
    ]
};
