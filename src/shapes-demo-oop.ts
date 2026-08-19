import { Rectangle, Circle } from "./shapes.js";

const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;

//rectangle
const rec1 = new Rectangle(120, 59, 200, 300, "red");
const rec2 = new Rectangle(300, 59, 400, 250, "blue");

rec1.draw(ctx);
rec2.draw(ctx);

//circle
const circle1 = new Circle(600, 59, 0);
const circle2 = new Circle(800, 59, 0);
