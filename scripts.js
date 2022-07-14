console.log('running');

const canvas = document.querySelector('#canvas');
canvas.height = window.innerHeight;
canvas.width = 500;

const ctx = canvas.getContext('2d');
const car =  new Car();
car.draw(ctx);

animate();

function animate() {
	canvas.height = window.innerHeight;
	car.update();
	car.draw(ctx);
	car.animate++;
	requestAnimationFrame(animate);
}