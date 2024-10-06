export function fairyDustCursor() {
	const possibleColors = ["#D61C59", "#E7D84B", "#1B8798"];

	let width = window.innerWidth;
	let height = window.innerHeight;

	const cursor = { x: width / 2, y: width / 2 };
	const particles = [];

	// Helper function to create particle elements
	function createParticle(x, y) {
		const particle = document.createElement("div");
		particle.classList.add("fairy-dust-particle");
		particle.style.backgroundColor =
			possibleColors[Math.floor(Math.random() * possibleColors.length)];
		particle.style.left = `${x}px`;
		particle.style.top = `${y + window.scrollY}px`; // Adjust the Y position based on scroll
		document.body.appendChild(particle);

		particles.push(particle);
		// Remove particle after animation
		setTimeout(() => {
			particle.remove();
		}, 1000);
	}

	// Event listener for mouse movement
	document.addEventListener("mousemove", (e) => {
		cursor.x = e.clientX;
		cursor.y = e.clientY;
		createParticle(cursor.x, cursor.y);
	});

	// Update width and height on window resize
	window.addEventListener("resize", () => {
		width = window.innerWidth;
		height = window.innerHeight;
	});
}
