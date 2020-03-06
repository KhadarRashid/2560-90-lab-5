let USAcoorindates = [37.0902, -95.7129]

let zoomLevel = 3 // sestablishes the zoom level 

let map = L.map("college-map").setView(USAcoorindates, zoomLevel)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
id:'mapbox.streets',
accessToken: 'pk.eyJ1Ijoiam9ibG9mYXJkb24iLCJhIjoiY2s3ZHo4Y2N0MDM4dTNrbzM0a3dvNm83NSJ9.vaGjMGg1S4Whcx_v-zX_PA'}).addTo(map)


 // Creating a list of ojects to loop over later
 let bridges = [
    {'bridgeName': 'Varrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates': [40.6066, -74.0447] },
    {'bridgeName': 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates': [37.8199, -122.4783] },
    {'bridgeName': 'Mackinac Bridge,', 'cityState': 'Mackinaw and St. Ignace, MI', 'span': '1158', 'coordinates': [45.8174, -84.7278] },
    {'bridgeName': 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067', 'coordinates': [40.8517, -73.9527] },
    {'bridgeName': 'Tacoma Narrows Bridge', 'cityState':'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates': [47.269, -122.5517]},
    ]
    

    // for (let x = 0; x < bridges.length; x++){
    //     //this accesses each part of the object and assigns it a task
    //     let bridgeMarker= L.marker(bridges[x].coordinates).bindPopup(`${bridges[x].bridgeName}<br>Located: ${bridges[x].cityState}<br>Bridge Span(Meters):${bridges[x].span}`).addTo(map)
    // }

    bridges.forEach(function(el){
        var bridgelocation = el.coordinates
        console.log(bridgelocation)
        L.marker(bridgelocation).bindPopup(`${el.bridgeName} with span of ${el.span}`).addTo(map)
    })
