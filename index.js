function updateMap() {
    fetch("/data.json")
    .then(response =>response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
           latitude = element.latitude
           longitude = element.longitude 
           cases = element.infected

           if(cases<200 ){
            color ="#EEE44A"
           }
           else if(cases<400 ){
            color ="#F88502"
          }
          else if(cases<700 ){
            color ="#F85500"
          }
          else if(cases<1000 ){
            color ="#C42A02"
          }
          else if(cases<1500 ){
            color ="#911B01"
          }
          else{
            color="#6B1500"
          }
          
           // mark on the map
           new mapboxgl.Marker({
               draggable: false,
                color :color
           })
            .setLngLat([longitude, latitude])
            .addTo(map);

        });
    })
}

let interval =2000
setInterval(updateMap ,interval);
