console.log('Loaded!');
console.log('Fuck off');

//Change the text of the id main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New value';
var marginLeft = 0;
//move the image
function moveRight() {
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}


var img = document.getElementById('madi');
madi.onclick = function() {
    var interval = setInterval(moveRight , 50);
    
};