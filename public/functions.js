function rndDesc() {

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

document.getElementById('insert-here').innerHTML = item;

}