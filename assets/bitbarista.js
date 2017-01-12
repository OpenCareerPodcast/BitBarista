function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var stateCallback = function(data) {
  $('#issue-message').html('');
  if (data.overall == 'ready') {
    $('#offers').show();
    $('#issues').hide();
  } else if (data.overall == 'water') {
    window.location.replace("http://localhost:5000/water_request/");
  } else if (data.overall == 'empty_grinds') {
    window.location.replace("http://localhost:5000/empty_grinds/");
  } else {
    $('#issues').show();
    $('#offers').hide();
    $('#issue-message').append(data.message);
  } 
};
