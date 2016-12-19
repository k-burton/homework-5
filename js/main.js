
/////////////////////////////////


$('form').submit(function(event){
  // console.log("submit test");
  event.preventDefault();
  var cityName = $('#city-type').val();
  console.log("city name test");
if(cityName === "nyc" || cityName === "New York" || cityName === "New York City"){
  console.log("NYC!!");
  $('body').removeClass().addClass('nyc');
}
if(cityName === "San Francisco" || cityName === "SF" || cityName === "Bay Area" || cityName === "San Fran"){
  console.log("San Fran!!");
  $('body').removeClass().addClass('sf');
}
if(cityName === "Los Angeles" || cityName === "LA" || cityName === "LAX"){
  console.log("San Fran!!");
  $('body').removeClass().addClass('sf');
}
else if(cityName === "Austin" || cityName === "ATX"){
  console.log("Austin!!");
  $('body').removeClass().addClass('austin');
}
else if(cityName === "Sydney" || cityName === "SYD" || cityName === "Down Under"){
  console.log("Syndey!!");
  $('body').removeClass().addClass('sydney');
}
else if(cityName === "Boston" || cityName === "BOS"){
  console.log("Boston!!");
  $('body').removeClass().addClass('boston');
}

  event.preventDefault();
});
