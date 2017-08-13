function rndDesc(Id) {

var items = [

'chooses. Now go on some cruises.',
'covets. Now go eat some crumpets.',
//'covets. Now go play some trumpets.',
'decrees. Now go fed some bees.',
'decides. No go feed your insides.',
//'desires. Now put out some fires.',
'determines. Now go eat food made by Germans.',
'embraces. Now go tie your shoe laces.',
/*'embraces. Now go places.',
'embraces. Now watch some races.',*/
'digs. Now go eat some figs.',
/*'digs. Now go eat some pigs.',
'digs. Now go break some twigs.',
'digs. Now go try on some wigs.',*/
'doth crave. Rise from your grave!',
'pleases. Now go eat some cheeses.',
//pleases. Now go cure some diseases.',
'wants. Now go eat some croissants.',
'wishes. Now go clean the dishes.',
//'wishes. Now go feed the fishes.'

]

var item = items[Math.floor(Math.random()*items.length)];

document.getElementById(Id).innerHTML = item;

}

function rndBlocks(Id) {

var items = [
  
'<td><img accesskey="i" onclick="rotate(\'iblock\');" id="iblock" title="I" src="http://slasm.com/images/tetrominoes/iblock.png"/></td>',
'<td><img accesskey="j" onclick="rotate(\'jblock\');" id="jblock" title="J" src="http://slasm.com/images/tetrominoes/jblock.png"/></td>',
'<td><img accesskey="o" onclick="rotate(\'oblock\');" id="oblock" title="O" src="http://slasm.com/images/tetrominoes/oblock.png"/></td>',
'<td><img accesskey="l" onclick="rotate(\'lblock\');" id="lblock" title="L" src="http://slasm.com/images/tetrominoes/lblock.png"/></td>',
'<td><img accesskey="t" onclick="rotate(\'tblock\');" id="tblock" title="T" src="http://slasm.com/images/tetrominoes/tblock.png"/></td>',
'<td><img accesskey="s" onclick="rotate(\'sblock\');" id="sblock" title="S" src="http://slasm.com/images/tetrominoes/sblock.png"/></td>',
'<td><img accesskey="z" onclick="rotate(\'zblock\');" id="zblock" title="Z" src="http://slasm.com/images/tetrominoes/zblock.png"/></td>',

]

var currentIndex = items.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = items[currentIndex];
    items[currentIndex] = items[randomIndex];
    items[randomIndex] = temporaryValue;
  }

  //return array;
  
  var itemsClean = items.join("");
    
  document.getElementById(Id).innerHTML = itemsClean;
   
  }

function rotate(id) {
var angle = 0, img = document.getElementById(id);
document.getElementById(id).onclick = function() {
    angle = (angle+90)%360;
    img.className = "rotate"+angle;
}}
