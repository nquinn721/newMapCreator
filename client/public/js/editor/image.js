export default class Image {
  constructor(stage) {
    this.stage = stage;
  }

  createImage({ name, x = 0, y = 0, w, h }) {
    const img = new createjs.Bitmap("assets/images/" + name);
    x = Math.floor(x / this.stage.cellSize) * this.stage.cellSize;
    y = Math.floor(y / this.stage.cellSize) * this.stage.cellSize;

    if (this.stage.checkForItemInCell(x, y)) return;

    img.x = x;
    img.y = y;

    // img.scaleX = (w || this.stage.cellSize) / img.image.width;
    // img.scaleY = (h || this.stage.cellSize) / img.image.height;

    this.drawSquare(x, y, img.image.width, img.image.height);
    return img;
  }
  drawSquare(x, y, w, h) {
    var graphics = new createjs.Graphics()
      .setStrokeStyle(3)
      .beginFill("#000")
      .drawRect(x - 2, y - 2, w + 4, h + 4);
    var rect = new createjs.Shape(graphics);
    this.stage.stage.addChild(rect);
  }
}
