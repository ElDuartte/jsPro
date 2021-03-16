import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
	el: video,
	plugins: [
		// new AutoPlay()
	],
});

const playButton = document.querySelector("#playButton");
playButton.onClick = () => MediaPlayer.togglePlay();

const muteButton = document.querySelector("#muteButton");
muteButton.onClick = () => {
	if (MediaPlayer.media.muted) {
		player.unmute();
	} else {
		player.mute();
	}
};

// function MediaPlayer(config) {
// 	this.media = config.el;
// }

// MediaPlayer.prototype.play = function () {
// 	this.media.play();
// };

// MediaPlayer.prototype.pause = function () {
// 	this.media.pause();
// };

// MediaPlayer.prototype.togglePlay = function () {
// 	if (this.media.paused) {
// 		this.play();
// 	} else {
// 		this.pause();
// 	}
// };

// const video = document.querySelector("video");
// const player = new MediaPlayer({ el: video });

// const button = document.querySelector("button");
// button.onclick = () => player.togglePlay();
