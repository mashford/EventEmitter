class eventEmitter {
	constructor() {
		this.eventBuffer = new Array()
	}
	emit(string) {
		let st = string + ''//if it is not a string we should throw an error instead of this
        try {
        	setTimeout(this.st,0)
        } catch (e){
        	this.eventBuffer.push(st)
        }
	}
	on(string, func){
		let st = string + ''
		for (let i=0; i<this.eventBuffer.length; i++){
			if (st == this.eventBuffer[i]){
				this.eventBuffer.splice(i,1)
				setTimeout(func, 0)
				//this.st = func
				break
			} else {}
		}
		this.st = func
	}
}

let goose = new eventEmitter()

let foo = () => {
	this.a = 1
	console.log('foo')
    goose.on('goo', () => {
    	console.log('goose')
    	console.log(this.a)
    })
 }
foo()
goose.emit('goo')
