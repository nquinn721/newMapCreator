import Event from "../lib/event";
import Paint from "./modes/paint";
import Image from "./image";
import Draw from "./draw";
import Item from "./item";

class TileStage extends Event {
  constructor(id, w = 2000, h = 2000) {
    super();

    this.stage = new createjs.Stage(id);
    this.items = [];
    this.id = id;

    this.w = w;
    this.h = h;
    this.cellSize = 25;

    this.modes = {
      paint: new Paint(this)
    };

    this.currentMode = "paint";
  }

  setup() {
    this.image = new Image(this);

    if (this.id === "root") {
      this.drawBg();
      //   this.drawGrid();
    }
  }
  addImage({ name, x = 0, y = 0, w, h }) {
    const img = this.image.createImage(arguments[0]);
    this.stage.addChild(img);
    this.items.push(new Item({ x, y, img }));
  }

  handleEvent(event, e) {
    this.getCurrentMode()[event](e);
  }
  getCurrentMode() {
    return this.modes[this.currentMode];
  }

  checkForItemInCell(x, y) {
    return this.items.filter(v => v.x === x && v.y === y)[0];
  }

  update() {
    this.stage.update();
    this.emit("update");
  }
  drawBg() {
    this.addImage({ name: "bg.jpg", x: 0, y: 0, w: this.w, h: this.h });
  }
  drawGrid() {
    for (let x = this.cellSize; x < this.w; x += this.cellSize) {
      let line = Draw.line(x, 0, x, this.h);
      this.stage.addChild(line);
    }
    for (let y = this.cellSize; y < this.h; y += this.cellSize) {
      let line = Draw.line(0, y, this.w, y);
      this.stage.addChild(line);
    }
  }
}

export default TileStage;
