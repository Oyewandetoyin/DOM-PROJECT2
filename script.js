document.addEventListener("DOMContentLoaded", function () {
	const colorBox = document.getElementById("color-box");
	const changeColorBtn = document.getElementById("change-color-btn");
	
	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		if (color === "#000000") {
			return getRandomColor();
		}
		return color;
	}
	changeColorBtn.addEventListener("click", function () {
		colorBox.style.backgroundColor = getRandomColor();
	});
});