function rndDesc(Id) {

var items = [

'decides. No go feed your insides.',
'desires. A car has four tires.',
'digs. Now go eat some figs.',
'doth crave. Rise from your grave!',
'pleases. Now go eat some cheeses.',
'wants. Now go eat some croissants.',
'wishes. Now go clean the dishes.',

]

var item = items[Math.floor(Math.random()*items.length)];

document.getElementById(Id).innerHTML = item;

}

function rotate() {
var angle = 0, img = document.getElementById('image');
document.getElementById('image').onclick = function() {
    angle = (angle+90)%360;
    img.className = "rotate"+angle;
}}
