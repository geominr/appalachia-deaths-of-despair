var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cl8hrrvhz000614mvcojpgv1n',
    alignment: 'left',
    toptitle: 'Story Map Series | January 2023',
    title: "A Visual Timeline of the Opioid Crisis and Its Toll on Appalachia",
    byline: 'By Raanan Gurewitsch',
    description: "For my next story map, I wanted to tell a story based on the research I did at the University of Pittsburgh. Back in 2019, I studied data from the Mortality Information Research Analytics database (MOIRA), a collection of American death certificates spanning nearly four decades. Specifically, we analyzed death rates from suicide, alcohol and drug overdose in the Appalachian region of the Eastern United States. These rates of 'deaths of despair' show how the Opioid Crisis cast a dark cloud over the region for twenty years, hitting many of the most vulnerable corners of the country.",
    chapters: [
      // intro
        {
            id: 'intro',
            title: 'Region: Appalachia',
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
            title: 'Data: 1979-1983',
            image: '',
            imageCredit: '',
            description: "Using data from MOIRA, I map out the age-adjusted mortality rate for accidental drug overdose, suicide (intentional self-harm), and alcohol-related/sirrohsis of the liver (ICD-10,12.43,913,14).<br>The age-adjusted rate is the number of people out of every 100,000 in each five-year time period who died from these despair-related causes, or the number of Deaths of Despair per 100,000 people.",
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
            title: 'Data: 1984-1988',
            image: '',
            imageCredit: '',
            description: "Then I use Wikipedia's <a href='https://en.wikipedia.org/wiki/Timeline_of_the_opioid_epidemic'>Timeline of the Opioid Epidemic</a> and <a href='https://chat.opanai.com'>ChatGPT</a> to tell the story of how OxyContin and fentanyl have devastated the region. The data on the map show how each new chapter brought more pain and despair to the people of Appalaichia.",
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
            title: 'Data: 1989-1993',
            image: '',
            imageCredit: '',
            description: "The opioid epidemic that ravaged the Eastern United States over the past four decades can be traced back to the approval and marketing of OxyContin in the mid-1990s.",
            location: {
                center: [-85.124,37.450],
                zoom: 4.38,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
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
      // 1994-1998
        {
            id: 'chapter3.1',
            title: 'Data: 1994-1998',
            image: '',
            imageCredit: '',
            description: 'In December 1995, the FDA approved OxyContin, a controlled-release form of oxycodone that allowed for dosing every 12 hours instead of every 4 to 6 hours. Purdue Pharma, the company behind OxyContin, then began a massive marketing campaign, claiming that the drug was less likely to cause abuse and addiction than other short-acting painkillers.',
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
      // 1999-2003
        {
            id: 'chapter4',
            title: 'Data: 1999-2003',
            image: '',
            imageCredit: '',
            description: "By 2001, the number of prescriptions for OxyContin had risen to over 14 million, and the drug brought in almost $3 billion in sales. In 2002, during a Senate hearing on the drug, Purdue Pharma reported that they had spent $200 million on marketing OxyContin. The company also sponsored and/or gave grants for over 20,000 pain-related educational programs, influencing doctors' prescribing habits.",
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
      // 2004-2008
        {
            id: 'chapter5',
            title: 'Data: 2004-2008',
            image: '',
            imageCredit: '',
            description: 'However, the reality was that OxyContin was highly addictive and was being widely abused, particularly in Appalachia. In 2007, Kentucky officials sued Purdue Pharma for the widespread abuse of OxyContin in the region. The same year, Purdue Frederick Company Inc, along with three company executives, pleaded guilty to criminal charges of misbranding OxyContin.',
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
      // 2009-2013
        {
            id: 'chapter6',
            title: 'Data: 2009-2013',
            image: '',
            imageCredit: '',
            description: 'Over the next several years, more investigations and lawsuits against Purdue Pharma and the Sackler family that ran it began to surface from the Federal government, states such as New York, Massachusetts, Florida, and Nevada, but these legal actions did little to curb the opioid epidemic. By 2017, the number of drug overdose deaths nationwide had soared to over 70,000, with the synthetic opioid fentanyl being the most common substance involved in fatal overdoses.',
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
      // 2014-2017
        {
            id: 'chapter7',
            title: 'Data: 2014-2017',
            image: '',
            imageCredit: '',
            description: 'In 2018, Purdue Pharma announced that they were reducing their commercial operations and no longer promoting opioids to prescribers. By the beginning of 2019, 36 states were suing Purdue Pharma for its role in the opioid epidemic. Despite the legal action, the effects of the opioid epidemic continue to be felt in the Eastern United States, with countless lives lost and communities left devastated.',
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
            title: 'Thank you for reading.',
            image: '',
            imageCredit: '',
            description: "This story map was created by Raanan Gurewitsch",
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
