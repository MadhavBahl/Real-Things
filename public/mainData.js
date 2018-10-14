console.log('Hello World');
var currentVal = "NO"
var ref = firebase.database().ref();
var ear = document.getElementById('ear');
var fy  = document.getElementById('freq');
var violence = document.getElementById('violence');
var mainStatus = document.getElementById('mainStatus');
// mainStatus.innerHTML = "HEAIFNALSKF";
ref.on("value", function(snapshot) {
    console.log(snapshot.val());
        ear.innerHTML = parseFloat(snapshot.val().test.drowsiness.EAR).toFixed(4);
        fy.innerHTML = snapshot.val().test.drowsiness.frequentYawn;
        mainStatus.innerHTML = snapshot.val().test.drowsiness.status;   
        violence.innerHTML = snapshot.val().test.violence.violent_scenario;
        var drowsy = snapshot.val().test.drowsiness.status;
        var violent= snapshot.val().test.violence.violent_scenario;
        if (drowsy === "YES") {
            $.get("/drowsy", function(data, status){
                console.log('Inside the /drowsy');
            });
        }

        if (violent === "YES") {
            $.get("/violence", function(data, status){
                console.log('Inside the /violent');
            });
        }
    }, function (error) {
    console.log("Error: " + error.code);
});
