var config = {
    accessToken: 'pk.eyJ1IjoicmFhbmFuLWciLCJhIjoiY2pyMWF5YzM4MDBseTQzcXEyZ3gxN2xvOSJ9.Jm_gHZ3zcJh2xygKeOdr5w',
    style: 'mapbox://styles/raanan-g/cl8hrrvhz000614mvcojpgv1n',
    alignment: 'left',
    toptitle: 'Story Map Series | January 2023',
    title: 'DEATHS OF DESPAIR: VISUALIZING THE ONSET OF A CRISIS OF  IN APPALACHIA',
    byline: 'By Raanan Gurewitsch',
    description: 'Between 1979 and 2017, deaths from suicide, alcohol-related disease, and drug overdose rose dramatically across the Appalachian region of the United States. This story map translates a peer-reviewed statistical study into a spatial narrative, showing how mortality did not rise everywhere at once. Instead, it concentrated in specific places, resurfaced again and again, and then spread as the social and economic foundations of many communities weakened.&nbsp;<div><br></div><div>&nbsp;The underlying data come from the Mortality Information and Research Analytics (MOIRA) system, which standardizes U.S. death certificate information into county-level, age-adjusted mortality rates. The researchers divide nearly four decades into eight five-year windows and ask a deceptively simple question: where, across Appalachia, did high rates of these deaths keep returning?&nbsp;</div><div><br></div><div>&nbsp;Their answer is a set of eight “metaclusters,” contiguous groups of counties that repeatedly appear as hotspots across time. The chapters that follow move through the same eight time periods as the paper, layering historical context and the study’s findings to help explain why Appalachia became one of the epicenters of this crisis.</div>',
    chapters: [
        {
            id: 'intro',
            title: 'A REGION APART',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Blue_Ridge_Parkway_Sunset_%2843691100%29.jpeg',
            imageCredit: 'Wikimedia Commons',
            description: 'Appalachia stretches more than 200,000 square miles from southern New York to northern Mississippi, spanning over 420 counties across 13 states. The region is often described as “a region apart,” not as a romantic label, but as a statistical one. In the early 1960s, books like *The Other America* and *Night Comes to the Cumberlands* brought national attention to Appalachian poverty.&nbsp;<div><br></div><div>Soon after, the federal government created the President’s Appalachian Regional Commission and, later, the Appalachian Regional Development Act, aiming to close the economic gap between Appalachia and the rest of the country.\n\nThose investments mattered, but the region’s vulnerabilities also persisted.&nbsp;</div><div><br></div><div>Many communities remained rural and geographically isolated. Work was often physically demanding and injury-prone, especially in mining, manufacturing, and related trades. As jobs disappeared and populations aged or moved away, the social fabric thinned in ways that do not show up cleanly in a single statistic.&nbsp;</div><div><br></div><div>One reason this paper is powerful is that it does not treat Appalachia as one uniform place. It looks for recurring hotspots and asks how different local histories can produce similar outcomes.\n\nThe map below outlines the Appalachian Region used in the study.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"appalachia","opacity":0.75}],
            onChapterExit: [{"layer":"appalachia","opacity":0}]
        },
        {
            id: 'chapter0',
            title: '1979–1983: A QUIET BASELINE',
            image: '',
            imageCredit: '',
            description: 'In the early 1980s, deaths of despair, defined here as fatalities from suicide, alcohol-related causes, and accidental drug overdose, were present but relatively contained. Some counties already stood out as higher-burden places, reflecting long-standing patterns of poverty, chronic disease, and limited access to care.&nbsp;<div><br></div><div>What is striking in hindsight is not that these deaths occurred, but that a persistent geography of risk was already forming. The study’s methodology detects counties that repeatedly reappear as hotspots across multiple decades. In that sense, this period is not just a baseline. It is the first frame of a long sequence in which certain communities are already carrying a heavier load.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"1979-1983","opacity":0.75}],
            onChapterExit: [{"layer":"1979-1983","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter1',
            title: '1984–1988: EARLY WARNING SIGNS',
            image: '',
            imageCredit: '',
            description: 'By the late 1980s, mortality rates rose unevenly. In many counties, the changes were modest. In others, higher rates began to reappear across time.\n\nThis is where the paper’s core idea comes into focus. Rather than looking for one dramatic moment, the authors look for recurrence.&nbsp;<div><br></div><div>Counties that repeatedly show up inside statistically elevated clusters are treated as places where high mortality is not just a spike, but a persistent condition. These early recurrences, later assembled into “metaclusters,” suggest that despair was becoming geographically entrenched well before the opioid crisis became a household term.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"1984-1988","opacity":0.75}],
            onChapterExit: [{"layer":"1984-1988","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter2',
            title: '1989–1993: STRUCTURAL STRESS',
            image: 'https://npr.brightspotcdn.com/dims4/default/f6db3ca/2147483647/strip/true/crop/800x420+0+57/resize/1200x630!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwvpn%2Ffiles%2F201609%2FGaryBentley3_0.JPG',
            imageCredit: 'West Virginia Public Broadcasting',
            description: 'As manufacturing and coal employment declined across Appalachia, communities faced rising unemployment, shrinking tax bases, and population loss. The study connects these long economic arcs to mortality patterns without reducing one to the other. Unemployment moves up and down. Mortality, once elevated, tends to keep rising.&nbsp;<div><br></div><div>This period matters because it shows the crisis before opioids dominate the picture. Suicide and alcohol-related deaths remain consistently high in many metaclusters over the entire study period. By the early 1990s, overdose deaths are still relatively small in the aggregate, but the underlying conditions that will make the opioid era so destructive are already visible: physical labor, chronic pain, limited health care access, and communities under economic strain.&nbsp;</div><div><br></div><div>&nbsp;If you are looking for a single “start date” for deaths of despair in Appalachia, the maps quietly argue against it. The story is older than any one drug.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"1989-1993","opacity":0.75}],
            onChapterExit: [{"layer":"1989-1993","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter3',
            title: '1994–1998: THE INFLECTION POINT',
            image: '',
            imageCredit: '',
            description: 'In the mid-1990s, a shift begins. Suicide and alcohol-related deaths remain stubbornly high, but drug-related mortality starts to rise in ways that will accelerate over the next two decades.<span style="font-size: 0.9em;">&nbsp;Nationally, the pain management movement gathered momentum in this era, and opioid prescribing expanded rapidly.&nbsp;</span><div><span style="font-size: 0.9em;"><br></span></div><div><span style="font-size: 0.9em;">In Appalachia, that expansion collided with a region where chronic pain was common and clinical resources were often scarce. The paper’s results show that overdose deaths were “almost negligible” in the early 1990s, then grew rapidly and became comparable to suicide and alcohol-related deaths. For several metaclusters, that transition is the defining feature of the late 1990s.</span></div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"1994-1998","opacity":0.75}],
            onChapterExit: [{"layer":"1994-1998","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter4',
            title: '1999–2003: CLUSTERS BECOME HOTSPOTS',
            image: '',
            imageCredit: '',
            description: 'After 1999, deaths of despair accelerate sharply. Counties that had appeared repeatedly in earlier clusters now form contiguous regions of elevated mortality. In the language of the study, these recurring hotspots are combined into eight spatiotemporal “metaclusters.”&nbsp;<div><br></div><div>What makes this approach compelling is that it captures persistence. The metaclusters are not random groupings, and they are not confined to one state. Many sit in Central and South-Central Appalachia, with additional clusters in Pennsylvania and the southern end of the region.&nbsp;</div><div><br></div><div>In other words, the crisis has a geography, but not a single center.\n\nThe map begins to read less like scattered points and more like connected terrain. Once despair becomes regional, it is harder to contain.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"1999-2003","opacity":0.75}],
            onChapterExit: [{"layer":"1999-2003","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter5',
            title: '2004–2008: THE OPIOID ERA',
            image: 'https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1800/public/pills080217.jpg',
            imageCredit: 'Johns Hopkins University',
            description: 'By the mid-2000s, drug overdoses surge across Appalachia and overtake alcohol-related deaths in several metaclusters. The study shows that overdose mortality, once a minor contributor, grows fast and becomes comparable to suicides and alcohol-related deaths.\n\nTwo shifts stand out.&nbsp;<div><br></div><div>First, the crisis spreads across age. Younger populations that once had far lower death rates begin to catch up quickly. Second, the patterns widen across gender. Male mortality remains higher in many places, but the rate of increase among women is steep.&nbsp;</div><div><br></div><div>These are not small changes at the margins. They reshape the profile of who is at risk and when.\n\nThe opioid story is often told as a national epidemic, but the map shows how it moved through existing fault lines. In many Appalachian communities, it landed on top of decades of economic contraction and social strain.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"2004-2008","opacity":0.75}],
            onChapterExit: [{"layer":"2004-2008","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter6',
            title: '2009–2013: DESPAIR DEEPENS',
            image: '',
            imageCredit: '',
            description: 'In the years surrounding the Great Recession, deaths of despair continue to rise. The study compares trends in mortality with trends in unemployment and finds something sobering: even when unemployment drops in later years, mortality does not reverse. That suggests that jobs matter, but they do not fully explain what the maps are capturing.&nbsp;<div><br></div><div>The paper points to deeper structural factors that vary place to place: access to health care and treatment, transportation barriers, educational opportunities, and the ways stigma and reporting practices shape what gets counted.&nbsp;</div><div><br></div><div>Whatever the mix, the pattern is consistent. Once counties become part of a recurring hotspot, the burden tends to persist.\n\nBy this stage, the crisis is no longer a single wave, but a durable condition impacting nearly every facet of community life.</div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"2009-2013","opacity":0.75}],
            onChapterExit: [{"layer":"2009-2013","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'chapter7',
            title: '2014–2017: A PERSISTENT GEOGRAPHY OF LOSS',
            image: '',
            imageCredit: '',
            description: 'By the end of the study period, nearly all metaclusters show historically high mortality rates, and several have converged toward similarly elevated trajectories. The rise is especially pronounced after 2000, with drug overdoses playing an increasingly central role.&nbsp;<div><br></div><div>Not every metacluster looks the same. The Pennsylvania clusters stand out as more mixed in socioeconomic composition, reflecting the influence of urban economies, especially around Pittsburgh. Elsewhere, shrinking populations, rising median ages, and weaker income growth signal communities with fewer buffers against crisis.&nbsp;</div><div><br></div><div>T<span style="font-size: 0.9em;">he central lesson is not that Appalachia is doomed. It is that place matters. The crisis has contours, and those contours can guide targeted, local policy responses that go beyond short-term fixes.</span></div>',
            location: {
                center: [-85.124,37.45],
                zoom: 4.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{"layer":"2014-2017","opacity":0.75}],
            onChapterExit: [{"layer":"2014-2017","opacity":0}],
            chapterLegend: {"type":"choropleth","legend":{"colors":["#002f61","#00688b","#009c9b","#00cd8e","#81f15e","#ffff00"],"breaks":[120,100,80,60,40,20],"title":"Deaths of Despair per 100,000 people"}}
        },
        {
            id: 'thankyou',
            title: 'WHAT THE MAPS REVEAL',
            image: '',
            imageCredit: '',
            description: 'This analysis shows that deaths of despair in Appalachia were not random, nor sudden. They emerged from decades of structural vulnerability, intensified alongside economic decline and the opioid epidemic, and became embedded in specific places over time.&nbsp;<div><br></div><div>The study’s “metaclusters” put names and boundaries around what many communities have felt for years: some counties carry the burden again and again.\n\nIf these maps feel heavy, that is because they are meant to be honest. But they also point to the possibility of better targeting and better listening.&nbsp;</div><div><br></div><div>When we see where risk persists, we can start asking what local protections, services, and opportunities are missing, and what it would take to rebuild them.&nbsp;</div><div><br></div><div>Thank you for reading. I hope this story map helps make the crisis legible in a new way, and encourages deeper curiosity about the people and places behind the data.</div>',
            location: {
                center: [-99.429,38.679],
                zoom: 3.3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: [],
            chapterLegend: {"type":"none","legend":"none"}
        }
    ]
};