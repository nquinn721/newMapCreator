export default class Image {
  constructor(stage) {
    this.stage = stage;
  }

  createImage({ name, x = 0, y = 0, w, h }) {
    const container = new createjs.Container();

    const img = new createjs.Bitmap("assets/images/" + name);
    // x = Math.floor(x / this.stage.cellSize) * this.stage.cellSize;
    // y = Math.floor(y / this.stage.cellSize) * this.stage.cellSize;

    img.x = x;
    img.y = y;

    // img.scaleX = (w || this.stage.cellSize) / img.image.width;
    // img.scaleY = (h || this.stage.cellSize) / img.image.height;

    container.addChild(
      img,
      this.drawSquare(x, y, img.image.width, img.image.height)
    );
    return container;
  }
  drawSquare(x, y, w, h) {
    const graphics = new createjs.Graphics()
      .setStrokeStyle(3)
      .beginFill("#000")
      .drawRect(x - 2, y - 2, w + 4, h + 4);
    const rect = new createjs.Shape(graphics);
    return rect;
  }
}
