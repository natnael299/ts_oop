export {};

const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;

// draw a rectangele
const rectangleProps = {
  x: 100,
  y: 50,
  width: 300,
  height: 200,
  color: "red",
  drawRectangle: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
//call the function
rectangleProps.drawRectangle();

// draw a circle
const circle = {
  x: 150,
  y: 150,
  radius: 50,
  drawCircle: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
  },
};

//call the function
circle.drawCircle();
