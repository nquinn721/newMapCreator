import Project from '../editor/project';


const APP = angular.module('app', []);

APP.controller('main', function() {
	this.stages = [{
		name: 'canvas-1',
		displayed: true
	}]


	this.toggleLayer = (canvas) => {
		let el = document.getElementById(canvas),
			display = el.style.display,
			show = display === 'block' || !display ? 'none' : 'block';

		el.style.display = show;

		this.stages.forEach(v => {
			if(v.name === canvas){
				v.displayed = show === 'block' ? true : false;
			}
		})
	}

	this.createStage = () => {
		const stage = Project.create();

		this.stages.push({
			name: stage.id,
			displayed: true
		})
	}
});