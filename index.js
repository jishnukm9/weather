$('button').click(function(){
 var city=$('.in').val();
 $.ajax({
   url:'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=6b5b554e74d5f8211cafc6818159aadf',
   dataType:'Json',
   error: function() {
   $('.temp').text('Data Unavailable')
   $('.visibility').text(" ")
   $('.small').text(" ")
   $('.wind').text(" ")
   $(".humid").text(" ")
   $('.city').text(" ")
 },
   success: function(data){
     lat=data.coord.lat;
     lon=data.coord.lon;
     weather=data.weather[0].description;
     visibility=(data.visibility/1000);
     temp=data.main.temp;
     humidity=data.main.humidity;
     country=data.sys.country;
     wind=data.wind.speed;
     cityname=data.name;
     var c = Math.round(temp - 273.15)
     $('.temp').text(c + "°C")
     $('.visibility').text(Math.round(visibility)+" Km");
     $('.small').text(weather);
     $('.wind').text(Math.round(wind)+' km/h');
     $('.humid').text(humidity+' %');
     $('.city').text(cityname+","+country);

   }
 });
});
