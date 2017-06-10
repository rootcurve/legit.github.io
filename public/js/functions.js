function rndDesc() {

var items = [

'wants. Now go eat some croissants.',
'that',
'the',
'other'

]

var item = items[Math.floor(Math.random()*items.length)];

document.getElementById('insert-here').innerHTML = item;

}
