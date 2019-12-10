// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqtFTh9Z43MBWuAMS8lY4ylIFQyzf5fcw",
  authDomain: "iot-project-481fb.firebaseapp.com",
  databaseURL: "https://iot-project-481fb.firebaseio.com",
  projectId: "iot-project-481fb",
  storageBucket: "iot-project-481fb.appspot.com",
  messagingSenderId: "474970753176",
  appId: "1:474970753176:web:09549c6f49001769"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  $(document).ready(function()
{
  //$("imgled1").hide();
  //$("imgled2").hide();
  //$("imgled3").hide();
  var database = firebase.database();
  var led1,led2,led3;
   database.ref().on('value',async (snap)=>{
       ledStatus1 = await snap.val().ledStatus1;
       ledStatus2 = await snap.val().ledStatus2;
       ledStatus3 = await snap.val().ledStatus3;
       console.log(ledStatus1,ledStatus2,ledStatus3)

       if(ledStatus1===1)
            {               
            $('#imgled1').show(1000,function(){
                console.log("lightbulb 1 on");
            });
            }

              else
            {
                
                $('#imgled1').hide(1000,function(){
                    console.log("lightbulb 1 off");
                });
            }

        if(ledStatus2===1)
            {               
            $('#imgled2').show(1000,function(){
                console.log("lightbulb 2 on");
            });
            }

              else
            {
                
                $('#imgled2').hide(1000,function(){
                    console.log("lightbulb 2 off");
                });
            }
          if(ledStatus3===1)
            {               
            $('#imgled3').show(1000,function(){
                console.log("lightbulb 3 on");
            });
            }

              else
            {
                
                $('#imgled3').hide(1000,function(){
                    console.log("lightbulb 3 off");
                });
            }
      

});

             $('#on1').click(function(){
            
          database.ref().update({ledStatus1:1});
         });

      
        $('#off1').click(function(){
          database.ref().update({ledStatus1:0});
         });

         $('#on2').click(function(){
            
          database.ref().update({ledStatus2:1});
         });

      
        $('#off2').click(function(){
          database.ref().update({ledStatus2:0});
         });

         $('#on3').click(function(){
            
          database.ref().update({ledStatus3:1});
         });

      
        $('#off3').click(function(){
          database.ref().update({ledStatus3:0});
         });
});