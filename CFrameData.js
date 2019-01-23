var NeutralCenter = {
  hFlip: false,
  vFlip: false,
  file: "Neutral",
  scale: 6,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2),file.width*this.scale,file.height*this.scale)
  },
}
var CareBearStare = {
  hFlip: false,
  vFlip: false,
  file: "Neutral",
  scale: 30,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2),file.width*this.scale,file.height*this.scale)
  },
}
var Windup = {
  hFlip: false,
  file: "Windup",
  scale: 6,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2),file.width*this.scale,file.height*this.scale)
  },
}
var Clap = {
  hFlip: false,
  file: "Clap",
  scale: 6,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2),file.width*this.scale,file.height*this.scale)
  },
}
let W = Windup
let CBS = CareBearStare
let C = Clap
let N = NeutralCenter
function addFrame(frameList, frame, amount){
  for(let i = 0; i < amount/frame.length; i++){
    for(let j = 0; j<frame.length; j++){
      frameList.push(frame[j])
    }
  }
}
var frameList = [];
addFrame(frameList,[CBS],8)
addFrame(frameList,[N],16)
addFrame(frameList,[W],8)
addFrame(frameList,[W,C],24)
addFrame(frameList,[W],8)
addFrame(frameList,[W,C],24)
addFrame(frameList,[W],8)
addFrame(frameList,[W,C],28)
addFrame(frameList,[W],4)
addFrame(frameList,[N],48)
addFrame(frameList,[W,C],24)
