export default class Paint {
  constructor(stage) {
    this.isPainting = false;
    this.stage = stage;
  }

  click(e) {}
  mouseUp(e) {
    this.isPainting = false;
    this.addImage(e);
  }
  mouseDown(e) {
    this.isPainting = true;
  }
  mouseMove(e) {
    if (this.isPainting) this.addImage(e);
  }
  addImage(e) {
    this.stage.addImage({ name: "box.jpg", x: e.offsetX, y: e.offsetY });
  }
}
