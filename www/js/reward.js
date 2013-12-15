var idGoal = 0;
var maxIdGoal = 0;
var goal = [];
var nImages = 0;

function saveGoal(){
  if (maxIdGoal < idGoal) {
    maxIdGoal = idGoal;
    id = "goal_"+idGoal;
    $('#goalList').append('<li><a id="'+id+'">'+$('#goalName').val()+'</a></li>').listview('refresh');
    $('#'+id).bind( "click",{ ig: idGoal }, function(event) {
      showGoal(event.data.ig)
    });
  }
  goal[idGoal] = {
    "name": $('#goalName').val(),
    "description": $('#goalDescription').val(),
    "date": $('#goalDate').val(),
    "image1": $('#newPhoto').attr('src'),
    "image2": $('#newPhoto2').attr('src'),
  };
  $.mobile.changePage('#StudentView');
}

function showGoal(idG){
  $('#goalName').val(goal[idG]["name"]);
  $('#goalDescription').val(goal[idG]["description"]);
  $('#goalDate').val(goal[idG]["date"]);
  $('#newPhoto').val(goal[idG]["image"]);
  $('#newPhoto2').val(goal[idG]["image2"]);
  $.mobile.changePage('#GoalView');
  idGoal= idG;
}

function addGoal(){
  idGoal = maxIdGoal+1;
  $.mobile.changePage('#GoalView');
  nImages = 0;
  $('#goalName').val("");
  $('#goalDescription').val("");
  $('#goalDate').val("");
  $('#newPhoto').val("");
  $('#newPhoto2').val("");
}

// Called when capture operation is finished
//
function captureSuccess(imageData) {
  displayPhoto(imageData);
}

// Called if something bad happens.
// 
function captureError(error) {
  var msg = 'An error occurred during capture: ' + error.code;
  navigator.notification.alert(msg, null, 'Uh oh!');
}

// A button will call this function
//
function captureImage() {
  // Launch device camera application, 
  // Take picture using device camera and retrieve image as base64-encoded string
  navigator.camera.getPicture(captureSuccess, captureError, { quality: 50, destinationType: Camera.DestinationType.DATA_URL});
}

function displayPhoto(imageData){
  alert('display'+nImages);
  $('#newPhoto'+nImages).attr('src',"data:image/jpeg;base64," + imageData);
  nImages += 1;
}

