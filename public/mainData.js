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

        // var mobNums = snapshot.val().test.closeContacts;

        var mobString = '';
        var i = 0;
        for (var mobNum in snapshot.val().test.closeContacts) {
            if (i == 0) {
                mobString = snapshot.val().test.closeContacts[mobNum];
            } else {
                mobString += ','+snapshot.val().test.closeContacts[mobNum];
            }
            i++;
        }

        // alert (mobString);
        if (drowsy === "YES") {
            // $.get("/drowsy", function(data, status){
            //     console.log('Inside the /drowsy');
            // });

            $.post("/drowsy", {mobString: mobString}, function(result){
                // $("span").html(result);
                console.log('inside Violent')
            });
        }

        if (violent === "YES") {
            // $.get("/violence", function(data, status){
            //     console.log('Inside the /violent');
            // });

            $.post("/violence", {mobString: mobString}, function(result){
                // $("span").html(result);
                console.log('inside Violent')
            });
        }
    }, function (error) {
    console.log("Error: " + error.code);
});

function addPhone () {
    ref.on("value", function(snapshot) {
        console.log('button clicked:', snapshot.val());
            // var numContacts = snapshot.val().test.closeContacts.length;
            // console.log(snapshot.val().test.closeContacts);
            
            var uname = $('#name').val();
            var mobile = $('#mobile').val();

            
            var toBeAdded = {};
            toBeAdded[uname] = mobile;
            var db = firebase.database();
            var ref = db.ref("test");
            var contacts = ref.child("closeContacts");
            contacts.update(toBeAdded);
            // alert ('data added!');

        }, function (error) {
        console.log("Error: " + error.code);
    });
}