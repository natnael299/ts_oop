export {};
const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;

const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;

ctx.fillStyle = "red";
ctx.fillRect(10, 10, 150, 100);
