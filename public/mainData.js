console.log('Hello World');
var currentVal = "NO"
var ref = firebase.database().ref();
var ear = document.getElementById('ear');
var fy  = document.getElementById('freq');
var mainStatus = document.getElementById('mainStatus');
// mainStatus.innerHTML = "HEAIFNALSKF";
ref.on("value", function(snapshot) {
    console.log(snapshot.val());
        ear.innerHTML = snapshot.val().test.drowsiness.EAR;
        fy.innerHTML = snapshot.val().test.drowsiness.frequentYawn;
        mainStatus.innerHTML = snapshot.val().test.drowsiness.status;   
        var drowsy = snapshot.val().test.drowsiness.status;
        if (drowsy === "YES") {

            
            $.get("http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=8800467915&authkey=242704A8yXSd0INO5bc24274&message=HEY! Something's Wrong!", function(data, status){
                
            });
        }
    }, function (error) {
    console.log("Error: " + error.code);
});
