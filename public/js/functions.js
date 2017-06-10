function rndDesc() {

var items = [

'wants. Now go eat some croissants.',
'pleases. Now go eat some cheeses.',
'wishes. Now go clean the dishes.',

]

var item = items[Math.floor(Math.random()*items.length)];

document.getElementById('insert-here').innerHTML = item;

}