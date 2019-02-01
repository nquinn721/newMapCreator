export default class Event{
	constructor(){
		this.events = [];
	}
	on(event, cb){
		this.events.push({event, cb});
	}
	emit(event, data){
		this.events.forEach(e => e.event === event && e.cb(data));
	}
}