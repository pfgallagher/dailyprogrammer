window.addEventListener("load", () => {
	const canvas = document.createElement("canvas");
	canvas.height = 500;
	canvas.width = 500;
	canvas.style.border = "1px solid gray";
	const targetDiv = document.getElementById("target");
	if (targetDiv) {
		targetDiv.style.textAlign = "center";
		targetDiv.appendChild(canvas);
	}
	const context = canvas.getContext("2d");
	if (context) {
		context.fillRect(
			canvas.clientWidth / 2 - 100 / 2,
			canvas.clientHeight / 2 - 100 / 2,
			100,
			100,
		);
		context.clearRect(
			canvas.clientWidth / 2 - 95 / 2,
			canvas.clientHeight / 2 - 95 / 2,
			95,
			95,
		);
	}
});
