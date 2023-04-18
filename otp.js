 
   function sendotp()
   {
       var x=Math.random()*(9999-1000)+1000;
       var otp=Math.floor(x);
       console.log(otp);
       var name=document.getElementById("input1").value
       document.getElementById("output").innerHTML="Dear "+ name +"  your otp is "+otp
   }
  

