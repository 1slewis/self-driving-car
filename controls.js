class Controls {
	constructor() {
		this.forward = false;
		this.reverse = false;
		this.right = false;
		this.left = false;
		this.#addKeyboardListeners();
	}

	#addKeyboardListeners() {
		document.onkeydown = (event)=>{
			switch (event.key) {
			case "ArrowUp":
				this.forward = true;
				break;
			case "ArrowDown":
				this.reverse = true;
				break;
			case "ArrowRight":
				this.right = true;
				break;
			case "ArrowLeft":
				this.left = true;
			}
			//console.table(this);
		}
		document.onkeyup = (event)=>{
			switch (event.key) {
			case "ArrowUp":
				this.forward = false;
				break;
			case "ArrowDown":
				this.reverse = false;
				break;
			case "ArrowRight":
				this.right = false;
				break;
			case "ArrowLeft":
				this.left = false;
			}
			//console.table(this);
		}
		document.onkeypress = (event)=>{
			if (parseInt(event.key)) {
				car.acceleration = 0.1 * parseInt(event.key);
				car.decceleration = 0.03 * parseInt(event.key);
			}
		}
	}
}
