
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
 var helloBoba = {
  info:'<strong>Hello Boba</strong><br>\
       210 Central Expy S #74, Allen, TX 75013<br>\
       Category: Bubble Tea<br>\
       Comments: Good selection of drinks!',
  lat: 33.099605,
  long: -96.680162
 };
 
 var theBlueFish = {
  info:'<strong>The Blue Fish</strong><br>\
       940 Garden Park Dr, Allen, TX 75013<br>\
       Category: Japanese/Sushi<br>\
       Comments: A little pricey, but worth it!',
  lat: 33.088590,
  long: -96.684492
 };
 
 var froggCoffee = {
  info:'<strong>Frogg Coffee Bar & Creperie</strong><br>\
       832 Watters Creek Blvd, Allen, TX 75013<br>\
       Category: Cafe<br>\
       Comments: Quiet place with great crepes!',
  lat: 33.088950,
  long: -96.683832
 }; 
 var map = new google.maps.Map(document.getElementById('map'),{
 zoom: 14,   
 center: new google.maps.LatLng(33.101874, -96.676986),
 mapTypeId: google.maps.MapTypeId.ROADMAP   
 });
 
 var locations = [[shinrai.info, shinrai.lat, shinrai.long, 0],
                 [thaiPan.info, thaiPan.lat, thaiPan.long, 1],
                 [helloBoba.info, helloBoba.lat, helloBoba.long, 2],
                 [theBlueFish.info, theBlueFish.lat, theBlueFish.long, 3],
                 [froggCoffee.info, froggCoffee.lat, froggCoffee.long, 4],];
  
 
 var infowindow = new google.maps.InfoWindow({});
 var marker, i;
 
 for(i = 0; i < locations.length; i++)
 {
   marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1],locations[i][2]),
    map: map
   });
  
  google.maps.event.addListener(marker, 'click', (function (marker,i){
   return function(){
    infowindow.setContent(locations[i][0]);
    infowindow.open(map, marker);
   }
  })(marker,i));
 
 }

}
