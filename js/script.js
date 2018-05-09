
function initMap(){

 var shinrai = {
 info: '<strong>Shinrai Japanese Bistro</strong><br>\
        541 W McDermott Drive, Allen, TX 75013<br>\
         Category: Japanese<br>\
         Comments: Yummy Bento Boxes!',
 lat: 33.100279,
 long: -96.676089
};
 var thaiPan = {
  info:'<strong>Thai Pan Restaurant</strong><br>\
       1223 W McDermott Drive #75, Allen, TX 75013<br>\
       Category: Thai<br>\
       Comments: Delicious Pad Thai!',
  lat: 33.099604,
  long: -96.697408
 };
 var map = new google.maps.Map(document.getElementById('map'),{
 zoom: 13,   
 center: new google.maps.LatLng(lat: 33.101874, long: -96.676986),
 mapTypeId: google.maps.MapTypeId.ROADMAP   
 });
 
 var locations = [[shinrai.info, shinrai.lat. shinrai.long,0]];
 
 var infowindow = new google.maps.InfoWindow({});
 var marker, i;
 
 for(i = 0; i < locations.length; i++)
 {
   marker = new google.maps.marker({
    position: new google.maps.LatLng(locations[i][1],locations[i][2]),
    map: map
   });
  
  google.maps.event.addListener(marker, 'click', (function (marker,i){
   return function(){
    infowindow.seContent(locations[i][0]);
    infowindow.open(map, marker);
   }
  })(marker,i));
 
 }

}
