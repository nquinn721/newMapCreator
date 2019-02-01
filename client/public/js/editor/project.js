import TileStage from './tileStage';

class Project{
	constructor(stage){
		this.totalCanvas = 0;
		this.stages = [];


		this.stage = stage;
		createjs.Ticker.addEventListener("tick", this.handleTick.bind(this));
		this.setEvents();

	}

	create(w = 2000, h = 2000){
		const el = document.createElement('canvas'),
			  id = this.totalCanvas == 0 ? 'root' : 'canvas-' + this.totalCanvas;
		el.id = id;
		el.width = w;
		el.height = h;
		document.querySelector('.content').appendChild(el);

		this.totalCanvas++;

		const stage = new TileStage(id, w, h);
		stage.setup();
		this.stages.push(stage);
		return stage;
	}
	get(id){
		return this.stages.filter(v => v.id === id)[0];
	}
	handleTick(event) {
		this.stages.forEach(s => s.update());
	}

	handleEvent(event, e) {
		e.target.id.match('canvas') && this.get(e.target.id).handleEvent(event, e)
	}


	setEvents(){
		document.onclick 	 = this.handleEvent.bind(this, 'click');
		document.onmousedown = this.handleEvent.bind(this, 'mouseDown');
		document.onmousemove = this.handleEvent.bind(this, 'mouseMove');
		document.onmouseup 	 = this.handleEvent.bind(this, 'mouseUp');
	}

	
}

export default new Project();