var bagua = document.getElementById("bagua");
let start, previousTimeStamp;
let done = false;
let ids;

var miaoshu = document.getElementById("miaoshu");

function step(timestamp) {
	currRotate = bagua.style.transform;
	console.log("[ currRotate ] >", currRotate);
	currRotate = currRotate.replace(/rotate\(/, "").replace(/deg\)/, "");
	console.log("[ tim ] >", timestamp, currRotate);

	if (currRotate > 360) {
		currRotate = 0;
	}
	bagua.style.transform = `rotate(${currRotate + 0.01}deg)`;
	if (done) {
		ids = window.requestAnimationFrame(step);
	}
}

miaoshu.onclick = function () {
	done = !done;
	window.requestAnimationFrame(step);
};
