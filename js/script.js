
function initMap(){
var shinrai = {
 info: '<strong>Shinrai Japanese Bistro</strong><br>\
        541 W McDermott Drive, Allen, TX 75013<br>\
         Category: Japanese<br>\
         Comments: Yummy Bento Boxes!',
 lat: 33.100279,
 long: -96.676089
};
 var map = new google.maps.Map(document.getElementById('map'),{
 zoom: 13,   
 center: new google.maps.LatLng(lat: 33.101874, long: -96.676986),
 mapTypeId: google.maps.MapTypeId.ROADMAP   
 });                                               
}
