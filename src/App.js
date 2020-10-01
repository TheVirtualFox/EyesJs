import Eye from "./Eye";

class App {
  constructor() {
    // INIT CANVAS
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    
    this.theta = null;
    this.mouse = {
      x: null,
      y: null
    };
    this.eyes = [];
    window.addEventListener("mousemove", event => {
      this.mouse.x = event.x;
      this.mouse.y = event.y;
    });
    window.addEventListener("resize", event => {
      this.width = this.canvas.width = window.innerWidth;
      this.height = this.canvas.height = window.innerHeight;
      this.init();
    });
    this.init();
  }
  init() {
    // this.eyes = [];
    let overlapping = false;
    let protection = 10000;
    let counter = 0;
    this.numberOfEyes = 200;

    while (this.eyes.length < this.numberOfEyes && counter < protection) {
      let {height,width} = this;
      let radius = Math.floor(Math.random() * 100) + 5;
      let eye = new Eye(width * Math.random(), height * Math.random(), radius);
      overlapping = false;
      for (let i = 0; i < this.eyes.length; i++) {
         let prevEye = this.eyes[i];
         let dx = eye.getX() - prevEye.getX();
         let dy = eye.getY() - prevEye.getY();
         let distance = Math.sqrt(dx*dx + dy*dy);
         if (distance < (eye.radius + prevEye.radius)) {
          overlapping = true;
          break;
         }
      }
      if (!overlapping) {
        this.eyes.push(eye);
      }
      counter++;
    }
    this.update();
  }

  update() {
    const {context,width,height,mouse} = this;
    context.clearRect(0,0, width, height);
    context.fillStyle = "cadetblue";
    context.fillRect(0,0, width, height);
    this.eyes.forEach(eye => {
      eye.render(context,mouse);
    });
    requestAnimationFrame(this.update.bind(this));
  }
}

export { App as default };
