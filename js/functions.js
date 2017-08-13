function rndDesc(Id) {

var items = [

'chooses. Now go on some cruises.',
'covets. Now go eat some crumpets.',
'decrees. Now go feed some bees.',
'decides. No go feed your insides.',
'desires. Now put out some fires.',
'determines. Now go eat food made by Germans.',
'elects. Now go and do what everyone least expects.',
'embraces. Now go tie your shoe laces.',
'digs. Now go eat some figs.',
'doth crave. Rise from your grave!',
'intends. Now go spend time with friends.',
'pleases. Now go eat some cheeses.',
'prefers. Now go buy some furs.',
'wants. Now go eat some croissants.',
'wills. Now go pay your bills.',
'wishes. Now go clean the dishes.'

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
