export {};

const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;

const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;
const rectangleProps = {
  x: 500,
  y: 150,
  width: 300,
  height: 200,
  color: "red",
};

ctx.fillStyle = rectangleProps.color;
ctx.fillRect(
  rectangleProps.x,
  rectangleProps.y,
  rectangleProps.width,
  rectangleProps.height,
);
