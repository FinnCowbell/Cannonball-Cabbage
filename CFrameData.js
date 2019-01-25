// var CabbageFrame = function(file,scale,X,Y,hFlip=false,vFlip=false){
//   this.file = document.getElementById(file);
//   this.scale = scale;
//   this.X = X;
//   this.Y = Y;
//   this.hFlip = hFlip;
//   this.vFlip = vFlip;
//   this.draw = function(c,ctx){
//     ctx.drawImage(this.file,X,Y,this.file.width*this.scale,this.file.height*this.scale);
//   };
// }
var Black = {
  file: false,
  draw: function(c,ctx){
    ctx.fillStyle = "#FFFFFFF";
    ctx.fillRect(0,0,c.width,c.height);
  },
}
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
var Blink = {
  hFlip: false,
  vFlip: false,
  file: "Blink",
  scale: 6,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2),file.width*this.scale,file.height*this.scale)
  },
}
var Zoom1 = {
  hFlip: false,
  vFlip: false,
  file: "Neutral",
  scale: 30,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/4),file.width*this.scale,file.height*this.scale)
  },
}
var Zoom2 = {
  hFlip: false,
  vFlip: false,
  file: "Neutral",
  scale: 15,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/3),file.width*this.scale,file.height*this.scale)
  },
}
var Zoom3 = {
  hFlip: false,
  vFlip: false,
  file: "Neutral",
  scale: 9,
  draw: function(c,ctx){
    file = document.getElementById(this.file)
    ctx.drawImage(file,c.width/2-(file.width * this.scale/2),c.height/2-(file.height * this.scale/2.4),file.width*this.scale,file.height*this.scale)
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
let W = Windup;
let Z1 = Zoom1;
let Z2 = Zoom2;
let Z3 = Zoom3;
let C = Clap;
let N = NeutralCenter;
let B = Black;
let Bl = Blink;
function addFrame(frameList, frame, amount){
  for(let i = 0; i < amount/frame.length; i++){
    for(let j = 0; j<frame.length; j++){
      frameList.push(frame[j])
    }
  }
}
var frameList = [];
//Introduction
addFrame(frameList,[Z1],7);
addFrame(frameList,[B],1);
addFrame(frameList,[Z2],7);
addFrame(frameList,[B],1);
addFrame (frameList,[Z3],7);
addFrame(frameList,[B],1);
addFrame(frameList,[N],4)
addFrame(frameList,[W],4)
addFrame(frameList,[W,C],24)
addFrame(frameList,[W],8)
addFrame(frameList,[W,C],24)
addFrame(frameList,[W],8)
addFrame(frameList,[W,C],28)
addFrame(frameList,[W],4)

addFrame(frameList,[N],8)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],3)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],8)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],2)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],27)

addFrame(frameList,[W,C],24)
addFrame(frameList,[W],8)

addFrame(frameList,[N],4)
addFrame(frameList,[Bl],2)
addFrame(frameList,[N],12)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],2)
addFrame(frameList,[Bl],1)
addFrame(frameList,[N],6)

addFrame(frameList,[W],4)
addFrame(frameList,[W,C],24)
addFrame(frameList,[W],7)
addFrame(frameList,[B],1);
addFrame(frameList,[Z1],24);
