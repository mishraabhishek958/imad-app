//counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function () {
   
   //Create the request object
    
     var request = new XMLHttpRequest();   //load the part of page without disrupting what the user is doing   
   
   //capture the response the and store in a variable
   
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                 var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString(); 
            }
        }
        //else don't do anything
    };
   //render the variable in the correct span
   //Make the request
   request.open('GET', 'http://mishraabhishek958.imad.hasura-app.io/counter',true);
   request.send(null);
};   

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit= document.getElementById('submit_btn');
 submit.onclick = function() {
     
     
      //Create the request object
    
     var request = new XMLHttpRequest();   //load the part of page without disrupting what the user is doing   
   
   //capture the response the and store in a variable
   
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            // Take some action
            if(request.status === 200) {
                 //capture the request and render the list
                 var names=request.resonseText;
                 names= JSON.parse(names);   // String to array
                 
                 var list = '';
                  for(var i=0;i<names.length;i++) {
                  list <- '<li>' + names[i] +'</li>';
                  }
                  var ul=document.getElementById('namelist');
                  ul.innerHTML = list;
    
            }
        }
        //else don't do anything
    };
   //render the variable in the correct span
   //Make the request
   request.open('GET', 'http://mishraabhishek958.imad.hasura-app.io/counter'+ name ,true);
   request.send(null);
   

