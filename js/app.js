
  var config = {
    apiKey: "AIzaSyAupzq3Xwi-OqWvEW9nVNO7wMG3D7WhIB4",
    authDomain: "employeedata-bdb3e.firebaseapp.com",
    databaseURL: "https://employeedata-bdb3e.firebaseio.com",
    projectId: "employeedata-bdb3e",
    storageBucket: "",
    messagingSenderId: "268922396885"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

        // Initial Values
        var name = "";
        var role = "";
        var date = "";
        var rate = "";

        // Capture Button Click
        $("#add").on("click", function(event) {
            event.preventDefault();

            // Grabbed values from text boxes
            name = $("#empName").val().trim();
            role = $("#empRole").val().trim();
            date = $("#empDate").val().trim();
            rate = parseInt($("#empRate").val().trim());

            // Code for handling the push
            database.ref().push({
                name: name,
                role: role,
                date: date,
                rate: rate,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            });


        });

        database.ref().on("child_added", function(childSnapshot){
        	console.log("childSnapshot: ");
        	console.log(childSnapshot);
			console.log("childSnapshot.val():");
			console.log(childSnapshot.val());
			$("#table").append("<tr><td>"+ childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().date + "</td></tr>")

        })


        // Firebase watcher + initial loader + order/limit HINT: .on("child_added"
        // database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        //     // storing the snapshot.val() in a variable for convenience
        //     var sv = snapshot.val();

        //     // Console.loging the last user's data
        //     console.log(sv.name);
        //     console.log(sv.email);
        //     console.log(sv.age);
        //     console.log(sv.comment);

        //     // Change the HTML to reflect
        //     $("#name-display").html(sv.name);
        //     $("#email-display").html(sv.email);
        //     $("#age-display").html(sv.age);
        //     $("#comment-display").html(sv.comment);

        //     Handle the errors
        // }, 
        // function(errorObject) {
        //     console.log("Errors handled: " + errorObject.code);
        // });