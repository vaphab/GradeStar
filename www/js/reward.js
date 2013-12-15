
// Called when capture operation is finished
//
function captureSuccess(imageURI) {
  console.log('CaptureSuccess! '+imageURI);
  displayPhoto(imageURI);
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
  console.log('Capture image');
  console.log('destination Type: '+Camera.DestinationType.FILE_URI);
  navigator.camera.getPicture(captureSuccess, captureError, { quality: 50, destinationType: Camera.DestinationType.FILE_URI });
}

function displayPhoto(imageURI){
   $('#newPhoto').attr('src', imageURI);
}

