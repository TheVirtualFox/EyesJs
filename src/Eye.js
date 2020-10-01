class Eye {
  constructor(x,y,radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  render(context, mouse) {
    let {x,y} = this;
    context.beginPath();
    context.arc(this.x,this.y,this.radius,0,Math.PI*2,true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    let dx = mouse.x - x;
    let dy = mouse.y - y;
    let theta = Math.atan2(dy,dx);
    let irisX = this.x + Math.cos(theta) * this.radius/10;
    let irisY = this.y + Math.sin(theta) * this.radius/10;
    let irisRadius = this.radius / 1.2;
    context.beginPath();
    context.arc(irisX,irisY,irisRadius,0,Math.PI*2,true);
    context.fillStyle = "white";
    context.fill();
    context.closePath();


    let pupilX = this.x + Math.cos(theta) * this.radius/1.9;
    let pupilY = this.y + Math.sin(theta) * this.radius/1.9;
    let pupilRadius = this.radius / 2.5;
    context.beginPath();
    context.arc(pupilX,pupilY,pupilRadius,0,Math.PI*2,true);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(pupilX - pupilRadius/3,pupilY - pupilRadius/3,pupilRadius/2,0,Math.PI*2,true);
    context.fillStyle = "rgba(255,255,255,.2)";
    context.fill();
    context.closePath();
    

    context.beginPath();
    context.arc(mouse.x,mouse.y,25,0,Math.PI*2,true);
    context.fillStyle = "gold";
    context.fill();
    context.closePath();
  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}

export { Eye as default };