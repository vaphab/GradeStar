
// Called when capture operation is finished
//
function captureSuccess(imageURI) {
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
  navigator.camera.getPicture(captureSuccess, captureError, { quality: 50, destinationType: Camera.DestinationType.FILE_URI, });
}

function displayPhoto(imageURI){
   $('#newPhoto').attr('src', imageURI);
}

// Upload files to server
function uploadFile(mediaFile) {
  var ft = new FileTransfer(),
      path = mediaFile.fullPath,
      name = mediaFile.name;

  ft.upload(path,
      "http://my.domain.com/upload.php",
      function(result) {
        console.log('Upload success: ' + result.responseCode);
        console.log(result.bytesSent + ' bytes sent');
      },
      function(error) {
        console.log('Error uploading file ' + path + ': ' + error.code);
      },
      { fileName: name });   
}

