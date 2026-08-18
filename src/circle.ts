const circle = {
  x: 200,
  y: 150,
  radius: 50,
};

const canvasEle = document.getElementById("circle") as HTMLCanvasElement;
const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;
ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
ctx.fillStyle = "deepskyblue";
ctx.fill();
