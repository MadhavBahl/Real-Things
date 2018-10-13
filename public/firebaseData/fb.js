console.log('Hello World');

var ref = firebase.database().ref();
var ear = document.getElementById('ear');
var fy  = document.getElementById('fy');
var status = document.getElementById('status');

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
   ear.innerHTML = snapshot.val().test.drowsiness.EAR;
   fy.innerHTML = snapshot.val().user1.drowsiness.frequentYawns;
   status.innerHTML = snapshot.val().test.drowsiness.status;   
}, function (error) {
   console.log("Error: " + error.code);
});
