export {};

const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;

// draw rectangles
const rectangle1 = {
  x: 100,
  y: 50,
  width: 300,
  height: 200,
  color: "red",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
const rectangle2 = {
  x: 300,
  y: 50,
  width: 400,
  height: 200,
  color: "yellow",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
const rectangle3 = {
  x: 500,
  y: 50,
  width: 500,
  height: 200,
  color: "green",
  draw: function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};

//call the function
rectangle1.draw();
rectangle2.draw();
rectangle3.draw();

// draw a circle
const circle = {
  x: 150,
  y: 150,
  radius: 50,
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
  },
};

//call the function
circle.draw();
