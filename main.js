window.onload = function(){
let audio = document.getElementById('player');
let c = document.getElementById('gameSpace');
let ctx = c.getContext('2d');
ctx.imageSmoothingEnabled = false
ctx.font = "30px Serif"
ctx.fillText("Click to Start",c.width/2-75,c.height/2-15);
c.onclick=start;
let running = false;
function start(){
  let beat = 1;
  if(!running){
    let Cannonball = setInterval(function(){
        ctx.clearRect(0,0,c.width,c.height)
        let frame = frameList[beat % frameList.length].draw(c,ctx);
        beat++ //progress to the next move.
      },300);
    ctx.clearRect(0,0,c.width,c.height);
    running = true;
    c.style.cursor = "default";
    audio.play();
  }

}

}
