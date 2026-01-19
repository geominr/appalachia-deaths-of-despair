/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}
var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}
function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

// Main 'header' element
var header = document.createElement('div');

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
    var toptitle = document.createElement('h4');
    toptitle.innerText = config.toptitle;
    header.appendChild(toptitle);
}
if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}
if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}
if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */
if (screen.availWidth < 775) {
  config.chapters.forEach((page, i) => {
    page.location.zoom = page.location.zoom - 1;
  });
}

config.chapters.forEach((record, idx) => {
    /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
    var container = document.createElement('div');
    var chapter = document.createElement('div');
    chapter.setAttribute("class","chapter");
    // Creates the title for the vignettes
    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }
    // Creates the image for the vignette
    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }
    // Creates the image credit for the vignette
    if (record.imageCredit) {
        var imageCredit = document.createElement('p');
        imageCredit.classList.add('imageCredit');
        imageCredit.innerHTML = record.imageCredit;
        chapter.appendChild(imageCredit);
    }
    // Creates the description for the vignette
    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }
    // Creates the legend for the map layer
    if (record.chapterLegend) {
      var legend = record.chapterLegend.legend;
      var legendElement =  document.createElement('div');
      if (legend != "none") {
        legendElement.className = 'legend-overlay';
        legendElement.id = 'legend';
        if (screen.availWidth < 775) {
            legendElement.style.fontSize = "small";
        }
        if ("extraLegend" in record.chapterLegend) {
          var legendDiv = document.createElement('div');
          legendDiv.style.paddingTop = "20px";
          if ("svg" in record.chapterLegend.extraLegend) {
            svg = document.createElement("img");
            svg.setAttribute("src",record.chapterLegend.extraLegend.svg);
            svg.setAttribute("width","24px");

            legendDiv.appendChild(svg);
          }
          else {
            var legendItem = document.createElement('span');
            legendItem.className = 'legend-item';
            legendItem.style.backgroundColor = record.chapterLegend.extraLegend["trace-color"];
            legendDiv.appendChild(legendItem);
          }

          var value = document.createElement('span');
          value.style.paddingLeft = "24px";
          value.innerHTML = `${record.chapterLegend.extraLegend.label}`;
          legendDiv.appendChild(value);
          legendElement.appendChild(legendDiv);
        }
        var title = document.createElement('small');
        title.innerText = legend.title;
        legendElement.appendChild(title);
        if (record.chapterLegend.type == "choropleth") {
          if (legend.colors.length == legend.breaks.length) {
        
            // Pair breaks/colors and sort low -> high so the gradient reads left-to-right.
            const pairs = legend.breaks.map((b, i) => ({ b: Number(b), c: legend.colors[i] }))
                                      .sort((a, d) => a.b - d.b);
        
            const minB = pairs[0].b;
            const maxB = pairs[pairs.length - 1].b;
            const span = (maxB - minB) || 1;
        
            // Build a CSS linear-gradient with stops at each break.
            const stops = pairs.map(p => {
              const pct = ((p.b - minB) / span) * 100;
              return `${p.c} ${pct}%`;
            }).join(', ');
        
            const gradientBar = document.createElement('div');
            gradientBar.className = 'legend-gradient-bar';
            gradientBar.style.background = `linear-gradient(to right, ${stops})`;
        
            const labels = document.createElement('div');
            labels.className = 'legend-gradient-labels';
        
            // Option 1: show ALL break labels as ticks
            pairs.forEach((p, i) => {
              const tick = document.createElement('span');
              tick.className = 'legend-gradient-tick';
              tick.innerText = p.b.toLocaleString("en-US");
              labels.appendChild(tick);
            });
        
            // If you prefer only min/max labels instead, replace the loop above with:
            // const minLabel = document.createElement('span');
            // minLabel.innerText = minB.toLocaleString("en-US");
            // const maxLabel = document.createElement('span');
            // maxLabel.innerText = maxB.toLocaleString("en-US");
            // labels.appendChild(minLabel);
            // labels.appendChild(maxLabel);
        
            legendElement.appendChild(gradientBar);
            legendElement.appendChild(labels);
          }
        }
        
        if (record.chapterLegend.type == "bubble") {
          if (legend.sizes.length == legend.breaks.length) {
            // add legend-items
            for (let i = 0; i < legend.sizes.length; i++) {
              var legendDiv = document.createElement('div');
              legendDiv.style.float = "left";
              var legendItem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              legendItem.setAttribute("height", 40);
              legendItem.setAttribute("width", 40);

              var bubble = document.createElementNS("http://www.w3.org/2000/svg", "circle");
              bubble.setAttribute("fill", legend.color);
              bubble.setAttribute("cx", 20);
              bubble.setAttribute("cy", 20);
              bubble.setAttribute("r", legend.sizes[i]);
              legendItem.appendChild(bubble);

              var value = document.createElement('span');
              value.innerHTML = `${legend.breaks[i].toLocaleString("en-US")}`;
              value.style.paddingLeft = "5px";
              value.style.marginBottom = "15px";
              legendDiv.appendChild(legendItem);
              legendDiv.append(value);
              legendElement.appendChild(legendDiv);
            }
          }
        }

      }
      record['legendElement'] = legendElement;
    }
    // Sets the id for the vignette and adds the step css attribute
    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }
    // Sets the overall theme to the chapter element
    chapter.classList.add(config.theme);
    /* Appends the chapter to the container element and the container
    element to the features element */
    container.appendChild(chapter);
    features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

dodLayers = [
  "2014-2017",
	"2009-2013",
	"2004-2008",
	"1999-2003",
	"1994-1998",
	"1989-1993",
	"1984-1988",
	"1979-1983"
]

map.on("load", function () {

    map.addSource("dod_data", {
  		type:"vector",
  		url: "mapbox://raanan-g.5xvfacr0"
  	});
    map.addSource("dod_clusters", {
  		type:"vector",
  		url:"mapbox://raanan-g.dml0u4yo"
  	});
  	map.addSource("dod_metaclusters", {
  		type:"vector",
  		url:"mapbox://raanan-g.4thh8g6o"
  	});
    map.addLayer({
  		"id":"appalachia",
  		"type":"fill",
  		'source': "dod_data",
  		'layout': {'visibility': "visible" },
  		'paint': {
  			'fill-color': "#046321",
  			'fill-opacity': 0.25
  			},
  		'source-layer': 'dod_geodata_with_delta-717pvo'
  	});
    dodLayers.forEach(function(layer, i) {
      map.addLayer({
  		"id":layer,
  		"type":"fill",
  		'source': "dod_data",
  		'layout': {'visibility': "visible"},
  		'paint': {
  			'fill-color': [
  				'case', // if null --> grey
  				['==', ['get', layer], null],
  				"#d3d3d3",
  				// if value exists, display color scheme
  				[
  					'interpolate',
  					['linear'],
  					['get', layer],
            20,"#ffff00",40,"#81f15e",60,"#00cd8e",
            80,"#009c9b",100,"#00688b",120,"#002f61"
  				]
  				],
  			'fill-opacity':0
      },
  		'source-layer': 'dod_geodata_with_delta-717pvo'
  	});
      //map.moveLayer(layer, "admin-1-boundary");
    });

    // This is the function that finds the first symbol layer
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }

    // Setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.25,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if ("legendElement" in chapter) {
              var legendbox = document.getElementById('legend');
              removeAllChildNodes(legendbox);
              legendbox.appendChild(chapter.legendElement);
            }

        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener('resize', scroller.resize);

// Remove legend if you're on the home page
window.addEventListener('scroll', function() {
  if (window.scrollY <= 1010) {
    var legendbox = document.getElementById('legend');
    removeAllChildNodes(legendbox);
  }
})

// Edit Mode Functionality
var editModeEnabled = false;
var chapterData = {};

// Initialize chapter data mapping
function initializeChapterData() {
    config.chapters.forEach(function(chapter) {
        chapterData[chapter.id] = {
            title: chapter.title || '',
            description: chapter.description || '',
            image: chapter.image || '',
            imageCredit: chapter.imageCredit || ''
        };
    });
}

// Toggle edit mode
function toggleEditMode() {
    editModeEnabled = !editModeEnabled;
    var toggleBtn = document.getElementById('toggle-edit-mode');
    var saveBtn = document.getElementById('save-config');
    var body = document.body;
    
    if (editModeEnabled) {
        body.classList.add('edit-mode');
        toggleBtn.classList.add('active');
        toggleBtn.textContent = 'Exit Edit Mode';
        saveBtn.style.display = 'block';
        makeContentEditable();
    } else {
        body.classList.remove('edit-mode');
        toggleBtn.classList.remove('active');
        toggleBtn.textContent = 'Edit Mode';
        saveBtn.style.display = 'none';
        makeContentReadOnly();
    }
}

// Make content editable
function makeContentEditable() {
    config.chapters.forEach(function(chapter, idx) {
        var container = document.getElementById(chapter.id);
        if (!container) return;
        
        var chapterDiv = container.querySelector('.chapter');
        if (!chapterDiv) return;
        
        // Make title editable
        var titleElement = chapterDiv.querySelector('h3');
        if (titleElement) {
            titleElement.setAttribute('contenteditable', 'true');
            titleElement.classList.add('chapter-title');
            titleElement.setAttribute('data-chapter-id', chapter.id);
            titleElement.setAttribute('data-field', 'title');
        }
        
        // Make description editable
        var descriptionElement = chapterDiv.querySelector('p:not(.imageCredit)');
        if (descriptionElement) {
            descriptionElement.setAttribute('contenteditable', 'true');
            descriptionElement.classList.add('editable-content');
            descriptionElement.setAttribute('data-chapter-id', chapter.id);
            descriptionElement.setAttribute('data-field', 'description');
        }
        
        // Make image credit editable
        var imageCreditElement = chapterDiv.querySelector('.imageCredit');
        if (imageCreditElement) {
            imageCreditElement.setAttribute('contenteditable', 'true');
            imageCreditElement.classList.add('editable-content');
            imageCreditElement.setAttribute('data-chapter-id', chapter.id);
            imageCreditElement.setAttribute('data-field', 'imageCredit');
        }
        
        // Add image URL input (since images are more complex)
        var imageElement = chapterDiv.querySelector('img');
        var imageInput = chapterDiv.querySelector('.image-url-input');
        
        // Always create image input if it doesn't exist
        if (!imageInput) {
            imageInput = document.createElement('input');
            imageInput.type = 'text';
            imageInput.classList.add('editable-content', 'image-url-input');
            imageInput.setAttribute('data-chapter-id', chapter.id);
            imageInput.setAttribute('data-field', 'image');
            imageInput.placeholder = 'Image URL';
            imageInput.value = chapter.image || '';
            imageInput.style.width = '100%';
            imageInput.style.padding = '5px';
            imageInput.style.marginBottom = '10px';
            imageInput.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            imageInput.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            imageInput.style.borderRadius = '3px';
            imageInput.style.color = '#ffffff';
            
            // Insert after title, before image or description
            var title = chapterDiv.querySelector('h3');
            if (title && title.nextSibling) {
                chapterDiv.insertBefore(imageInput, title.nextSibling);
            } else if (title) {
                title.parentNode.appendChild(imageInput);
            } else {
                chapterDiv.insertBefore(imageInput, chapterDiv.firstChild);
            }
        }
        
        // Create image element if we have a URL but no image element
        if (!imageElement && chapter.image) {
            imageElement = new Image();
            imageElement.src = chapter.image;
            imageInput.parentNode.insertBefore(imageElement, imageInput.nextSibling);
        }
        
        // Update image on input change
        imageInput.addEventListener('input', function() {
            if (imageElement) {
                if (this.value) {
                    imageElement.src = this.value;
                    imageElement.style.display = 'block';
                } else {
                    imageElement.style.display = 'none';
                }
            } else if (this.value) {
                // Create new image element
                imageElement = new Image();
                imageElement.src = this.value;
                this.parentNode.insertBefore(imageElement, this.nextSibling);
            }
        });
    });
    
    // Also make header content editable
    var header = document.getElementById('header');
    if (header) {
        var headerTitle = header.querySelector('h1');
        if (headerTitle) {
            headerTitle.setAttribute('contenteditable', 'true');
            headerTitle.classList.add('editable-content');
            headerTitle.setAttribute('data-field', 'title');
        }
        
        var headerByline = header.querySelector('p.byline');
        if (headerByline) {
            headerByline.setAttribute('contenteditable', 'true');
            headerByline.classList.add('editable-content');
            headerByline.setAttribute('data-field', 'byline');
        }
        
        var headerDesc = header.querySelector('p:not(.byline)');
        if (headerDesc) {
            headerDesc.setAttribute('contenteditable', 'true');
            headerDesc.classList.add('editable-content');
            headerDesc.setAttribute('data-field', 'description');
        }
    }
}

// Make content read-only
function makeContentReadOnly() {
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function(el) {
        el.removeAttribute('contenteditable');
        el.classList.remove('editable-content', 'chapter-title');
    });
    
    // Remove image inputs (images will remain)
    var imageInputs = document.querySelectorAll('.image-url-input');
    imageInputs.forEach(function(input) {
        input.remove();
    });
}

// Collect edited data from DOM
function collectEditedData() {
    var updatedConfig = JSON.parse(JSON.stringify(config)); // Deep clone
    
    // Update header fields
    var header = document.getElementById('header');
    if (header) {
        var headerTitle = header.querySelector('h1');
        if (headerTitle) {
            updatedConfig.title = headerTitle.innerText.trim();
        }
        
        var headerByline = header.querySelector('p.byline');
        if (headerByline) {
            updatedConfig.byline = headerByline.innerText.trim();
        }
        
        var headerDesc = header.querySelector('p:not(.byline)');
        if (headerDesc) {
            updatedConfig.description = headerDesc.innerHTML.trim();
        }
    }
    
    // Update chapter fields
    config.chapters.forEach(function(chapter, idx) {
        var container = document.getElementById(chapter.id);
        if (!container) return;
        
        var chapterDiv = container.querySelector('.chapter');
        if (!chapterDiv) return;
        
        // Get title
        var titleElement = chapterDiv.querySelector('h3');
        if (titleElement && titleElement.hasAttribute('contenteditable')) {
            updatedConfig.chapters[idx].title = titleElement.innerText.trim();
        }
        
        // Get description (first non-imageCredit p)
        var descriptionElement = chapterDiv.querySelector('p:not(.imageCredit)');
        if (descriptionElement && descriptionElement.hasAttribute('contenteditable')) {
            updatedConfig.chapters[idx].description = descriptionElement.innerHTML.trim();
        }
        
        // Get image credit
        var imageCreditElement = chapterDiv.querySelector('.imageCredit');
        if (imageCreditElement && imageCreditElement.hasAttribute('contenteditable')) {
            updatedConfig.chapters[idx].imageCredit = imageCreditElement.innerHTML.trim();
        }
        
        // Get image URL
        var imageInput = chapterDiv.querySelector('.image-url-input');
        if (imageInput) {
            updatedConfig.chapters[idx].image = imageInput.value.trim();
        }
    });
    
    return updatedConfig;
}

// Convert config object to JavaScript file content
function configToJSString(configObj) {
    function escapeString(str) {
        if (typeof str !== 'string') return str;
        // Escape backslashes first, then quotes, then special characters
        return str
            .replace(/\\/g, '\\\\')  // Escape backslashes first
            .replace(/'/g, "\\'")     // Escape single quotes (since we use single quotes)
            .replace(/\n/g, '\\n')    // Escape newlines
            .replace(/\r/g, '\\r')    // Escape carriage returns
            .replace(/\t/g, '\\t');   // Escape tabs
    }
    
    function formatString(value) {
        if (typeof value === 'string') {
            // Use single quotes (matching original config.js style)
            return "'" + escapeString(value) + "'";
        }
        if (typeof value === 'number' || typeof value === 'boolean') {
            return String(value);
        }
        if (value === null) return 'null';
        if (value === undefined) return 'undefined';
        if (Array.isArray(value)) {
            if (value.length === 0) return '[]';
            return '[' + value.map(formatString).join(', ') + ']';
        }
        if (typeof value === 'object') {
            var keys = Object.keys(value);
            if (keys.length === 0) return '{}';
            var pairs = keys.map(function(key) {
                return key + ': ' + formatString(value[key]);
            });
            return '{' + pairs.join(', ') + '}';
        }
        return String(value);
    }
    
    var lines = ['var config = {'];
    
    // Collect top-level properties
    var topProps = [];
    if (configObj.accessToken !== undefined) topProps.push('    accessToken: ' + formatString(configObj.accessToken));
    if (configObj.style !== undefined) topProps.push('    style: ' + formatString(configObj.style));
    if (configObj.alignment !== undefined) topProps.push('    alignment: ' + formatString(configObj.alignment));
    if (configObj.toptitle !== undefined) topProps.push('    toptitle: ' + formatString(configObj.toptitle));
    if (configObj.title !== undefined) topProps.push('    title: ' + formatString(configObj.title));
    if (configObj.byline !== undefined) topProps.push('    byline: ' + formatString(configObj.byline));
    if (configObj.description !== undefined) topProps.push('    description: ' + formatString(configObj.description));
    
    // Add chapters array
    var chaptersLines = [];
    if (configObj.chapters && configObj.chapters.length > 0) {
        chaptersLines.push('    chapters: [');
        configObj.chapters.forEach(function(chapter, idx) {
            var chapterLines = ['        {'];
            var chapterProps = [];
            
            if (chapter.id !== undefined) chapterProps.push('            id: ' + formatString(chapter.id));
            if (chapter.title !== undefined) chapterProps.push('            title: ' + formatString(chapter.title));
            if (chapter.image !== undefined) chapterProps.push('            image: ' + formatString(chapter.image));
            if (chapter.imageCredit !== undefined) chapterProps.push('            imageCredit: ' + formatString(chapter.imageCredit));
            if (chapter.description !== undefined) chapterProps.push('            description: ' + formatString(chapter.description));
            
            if (chapter.location) {
                var locationProps = [];
                if (chapter.location.center) {
                    locationProps.push('                center: [' + chapter.location.center.join(',') + ']');
                }
                if (chapter.location.zoom !== undefined) {
                    locationProps.push('                zoom: ' + chapter.location.zoom);
                }
                if (chapter.location.pitch !== undefined) {
                    locationProps.push('                pitch: ' + chapter.location.pitch);
                }
                if (chapter.location.bearing !== undefined) {
                    locationProps.push('                bearing: ' + chapter.location.bearing);
                }
                if (locationProps.length > 0) {
                    var locationStr = '            location: {\n' + locationProps.join(',\n') + '\n            }';
                    chapterProps.push(locationStr);
                }
            }
            
            if (chapter.onChapterEnter !== undefined) {
                if (Array.isArray(chapter.onChapterEnter) && chapter.onChapterEnter.length === 0) {
                    chapterProps.push('            onChapterEnter: []');
                } else {
                    chapterProps.push('            onChapterEnter: ' + JSON.stringify(chapter.onChapterEnter));
                }
            }
            
            if (chapter.onChapterExit !== undefined) {
                if (Array.isArray(chapter.onChapterExit) && chapter.onChapterExit.length === 0) {
                    chapterProps.push('            onChapterExit: []');
                } else {
                    chapterProps.push('            onChapterExit: ' + JSON.stringify(chapter.onChapterExit));
                }
            }
            
            if (chapter.chapterLegend !== undefined) {
                chapterProps.push('            chapterLegend: ' + JSON.stringify(chapter.chapterLegend));
            }
            
            // Join properties with commas
            chapterLines.push(chapterProps.join(',\n'));
            chapterLines.push('        }' + (idx < configObj.chapters.length - 1 ? ',' : ''));
            chaptersLines.push(chapterLines.join('\n'));
        });
        chaptersLines.push('    ]');
    }
    
    // Add chapters to topProps
    if (chaptersLines.length > 0) {
        topProps.push(chaptersLines.join('\n'));
    }
    
    // Join top-level properties
    if (topProps.length > 0) {
        lines.push(topProps.join(',\n'));
    }
    lines.push('};');
    
    return lines.join('\n');
}

// Save config to file
async function saveConfig() {
    var updatedConfig = collectEditedData();
    var configString = configToJSString(updatedConfig);
    
    // Check if File System Access API is available (Chrome/Edge)
    if ('showSaveFilePicker' in window) {
        try {
            // Use File System Access API to let user choose save location
            var fileHandle = await window.showSaveFilePicker({
                suggestedName: 'config.js',
                types: [{
                    description: 'JavaScript files',
                    accept: { 'text/javascript': ['.js'] }
                }]
            });
            
            // Create a writable stream
            var writable = await fileHandle.createWritable();
            await writable.write(configString);
            await writable.close();
            
            // Show success message
            alert('Config saved successfully!');
            return; // Success, exit early
        } catch (err) {
            // User cancelled - do nothing
            if (err.name === 'AbortError') {
                return;
            }
            // Other error - fall back to download
            console.error('Error saving file:', err);
            alert('Could not save to chosen location. Falling back to download...');
        }
    }
    
    // Fallback to download method (for browsers without File System Access API)
    var blob = new Blob([configString], { type: 'text/javascript' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'config.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Show instructions
    if (!('showSaveFilePicker' in window)) {
        alert('Config saved! The file has been downloaded to your Downloads folder. Please move it to replace your config.js file.\n\nNote: For direct saving to your project folder, use Chrome or Edge browser.');
    }
}

// Initialize edit mode when DOM is ready
function initializeEditMode() {
    // Wait a bit to ensure all DOM elements are created
    setTimeout(function() {
        initializeChapterData();
        
        var toggleBtn = document.getElementById('toggle-edit-mode');
        var saveBtn = document.getElementById('save-config');
        
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleEditMode);
        }
        
        if (saveBtn) {
            saveBtn.addEventListener('click', saveConfig);
        }
    }, 100);
}

// Initialize when DOM is ready or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEditMode);
} else {
    initializeEditMode();
}
