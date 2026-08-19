const canvasEle = document.getElementById("mycanvas") as HTMLCanvasElement;
const ctx = canvasEle.getContext("2d") as CanvasRenderingContext2D;

export class Rectangle {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const rectangle = new Rectangle(100, 50, 300, 200, "red");
const rectangle2 = new Rectangle(200, 50, 400, 200, "red");
rectangle.draw(ctx);
rectangle2.draw(ctx);

export class Circle {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = "deepskyblue";
    ctx.fill();
  }
}
