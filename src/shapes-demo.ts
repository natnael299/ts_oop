export {};

// draw a rectangele
const rectangleProps = {
  canvasEle: document.getElementById("mycanvas") as HTMLCanvasElement,
  x: 500,
  y: 150,
  width: 300,
  height: 200,
  color: "red",
  drawRectangle: function () {
    const ctx = this.canvasEle.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
//call the function
rectangleProps.drawRectangle();

// draw a circle
const circle = {
  circleEle: document.getElementById("circle") as HTMLCanvasElement,
  x: 200,
  y: 150,
  radius: 50,
  drawCircle: function () {
    const circleCtx = this.circleEle.getContext(
      "2d",
    ) as CanvasRenderingContext2D;
    circleCtx.beginPath();
    circleCtx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    circleCtx.fillStyle = "deepskyblue";
    circleCtx.fill();
  },
};

//call the function
circle.drawCircle();
