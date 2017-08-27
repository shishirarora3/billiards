var board = document.querySelector('.flex');
board.addEventListener('click', function(e){
  const classList = e.target.classList;
  classList.contains('circle') && classList.toggle('paused');
},false);

var classes = ['a','b','c','d'];
var isDone = false;
setInterval(()=>{
  if(isDone){
    return;
  }
  if(board.querySelectorAll('.circle').length>40){
    isDone = true;
  }
  const rand = Math.random();//[0,1]
  const n = classes[Math.floor( classes.length* rand)];
   board.insertAdjacentHTML( 'beforeend', `<div class='circle ${n}'></div>` )
},100);