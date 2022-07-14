class Car {
	constructor(x=100, y=100, width=30, height=50) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = 0;
		this.acceleration = 0.5;
		this.decceleration = 0.16;
		this.minSpeed = 0.1;
		this.friction = 1.05;
		this.angle = 0;
		this.angularAcceleration = 0.01;
		this.controls = new Controls();
		this.animate = 0;
	}
	update() {
		if (this.controls.forward) {
			this.speed += this.acceleration;
		}
		if (this.controls.reverse) {
			this.speed -= this.decceleration;
		}
		if (this.controls.left) {
			this.angle -= this.angularAcceleration * this.speed;
		}
		if (this.controls.right) {
			this.angle += this.angularAcceleration * this.speed;
		}
		this.angle %= 2 * Math.PI;
		this.speed /= this.friction;
		this.x += Math.sin(this.angle) * this.speed;
		this.y -= Math.cos(this.angle) * this.speed;
	}
	draw(ctx) {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.rotate(this.angle);
		ctx.beginPath();
		ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
		ctx.fill();
		ctx.restore();
	}
}
