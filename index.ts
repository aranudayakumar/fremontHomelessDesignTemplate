// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initMap(): void {
  const fremont = { lat: 37.5485, lng: -121.9886};
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 13,
      center: fremont,
      
    }
  );

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  const image =
    "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=5|FE6256|000000";
  
    
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  
  function makeMarker(latlong, num, descript) {
    let a = (makeid(Math.random()))
   // const image =
   // "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=2|FE6256|000000";
     let markera = new google.maps.Marker({
      position: latlong,
      map,
      title: "Uluru (Ayers Rock)",
    //  icon: image,
    });
    const infowindowa = new google.maps.InfoWindow({
    content: descript,
  });
    
  markera.addListener("click", () => {
    infowindowa.open({
      anchor: markera,
      map,
      shouldFocus: false,
    });
  });
   
    
  }

  makeMarker({lat: 37.523953286038875, lng: -121.96698725564853}, 5, " Four individuals by the irvington high school parking lot" )
  makeMarker({lat: 37.53341057073052, lng: -121.95321382951938}, 5, "25-30 people near the bart passing" )
  makeMarker({lat: 37.55100951060943, lng: -121.9709038006832}, 5, "four people close to the library" )
  makeMarker({lat: 37.55194483352864, lng: -121.98038276158498}, 5, "three people near fremont hospital" )
  makeMarker({lat: 37.5397165172171, lng: -121.92313430253309}, 5, "a person in the parking lot near McDonalds" )
  makeMarker({lat: 37.53199085835369, lng: -121.9596967890404}, 5, "an individual right outside of Apna Bazar" )

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  
}



declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;