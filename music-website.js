var icon = document.getElementById("icon"),
	audio = document.getElementById("my-audio");

icon.onclick = function () {
	icon.classList.toggle("play");
	if (icon.classList.contains("play")) {
		icon.src = "imgs/pause.png";
		audio.play();
	} else {
		icon.src = "imgs/play.png";
		audio.pause();
	}
};
