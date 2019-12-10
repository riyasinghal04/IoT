// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBR7zcX0jXfxjrsk3-f8tiRjycXk-FbYfY",
    authDomain: "home-automation-e91cf.firebaseapp.com",
    databaseURL: "https://home-automation-e91cf.firebaseio.com",
    projectId: "home-automation-e91cf",
    storageBucket: "", 
    messagingSenderId: "642064776649",
    appId: "1:642064776649:web:e59e5aa9c6c8ecb6"
}; 
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   


$(document).ready(function()
{
    $('#imgled').hide();
    var database= firebase.database();
    var ledStatus1;

        database.ref().on("value",function(snap)  //doubt
        {
            ledStatus1 = snap.val().ledStatus1;
            
            if(ledStatus1==1)
            {
                $("#statement").text("LED is switched ON");
                
            $('#imgled').show(1000,function(){
                console.log("lightbulb is on");
            });

               
            }
            else
            {
                $("#statement").text("LED is switched OFF");
                $('#imgled').hide(1000,function(){
                    console.log("lightbulb is off");
                });
                

            }
        } );

        //status button
        $('#bttn').click(function(){
                $("#status").text(ledStatus1);
        });

        //switch on button
        $('#on').click(function(){
            
            database.ref().set({ledStatus1:1});
           
        });

        //switch off button
        $('#off').click(function(){
            database.ref().set({ledStatus1:0});
            

           
        });

} ) ;

  


