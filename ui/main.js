//counter code
var button = document.getElementById('counter');
var counter =0;
button.onClick = function () {
   
   
   //Make the counter request to the endpoint
   
   //capture the response the and store in a variable
   
   //render the variable in the correct span
   counter = counter + 1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString(); 
    
};