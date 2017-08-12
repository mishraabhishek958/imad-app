console.log('Loaded!');
console.log('Fuck off');

//Change the text of the id main-text
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//move the image

var img = document.getElementById('madi');
madi.onclick = function() {
    img.style.marginLeft = '100px';
}