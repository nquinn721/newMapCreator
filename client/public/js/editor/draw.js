export default class Draw{
	static line(x, y, endX, endY){
		let line = new createjs.Shape();
		line.graphics.setStrokeStyle(1);
		line.graphics.beginStroke('#555');
		line.graphics.moveTo(x, y);
		line.graphics.lineTo(endX, endY);
		line.graphics.endStroke();
		return line;
	}
}