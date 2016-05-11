/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btn_calculcar*/
    $(document).on("click", "#btn_calculcar", function(evt)
    {
   /*         var peso = document.getElementById('peso').value;
            var altura = document.getElementById('altura').value;
            var result = peso/(altura*altura);
            var x = result.toString();
            document.getElementById('result').innerHTML = x;
        
        /*
              
if(result<22){
 document.getElementById('result').innerHTML = "Você está abaixo do seu peso adequado!" + x;
}
else if((result>=22) && (result == 27)){
 document.getElementById('result').innerHTML = "Você está no peso adequado!" + x;
}
else if (result>27){
 document.getElementById('result').innerHTML = "Você está com sobrepeso!" + x;
}*/
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
