let map 
function initMap(){
map = new google.maps.Map(document.getElementById('map'),{center:{lat:37.7749,lng:-122.4194},
zoom:13
})
google.maps.event.addListener(map,"click",function(event){
    this.setOptions({scrollwheel:true})
})
}