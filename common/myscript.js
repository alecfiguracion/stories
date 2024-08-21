var isFirstClick = true;

function startVideo() {
    if (isFirstClick) {
        // Add logic here to start your video
        playNextVideo();

        // Hide the button
        var startButtonContainer = document.getElementById('startButtonContainer');
        startButtonContainer.style.display = 'none';

        // Update the flag to indicate that the button has been clicked
        isFirstClick = false;
    }
}

var videoPlayer = document.getElementById('videoPlayer');
var videoContainer = document.getElementById('videoContainer');

var originalVideoData = [
    { title: "backyard_garden", source: "assets/backyard_garden.mp4", duration: 10.28, size: 6.9, date: "2023-11-14T10:37:00" },
    { title: "blinking_lights", source: "assets/blinking_lights.mp4", duration: 6.18, size: 7.8, date: "2023-11-14T16:43:00" },
    { title: "bouncing_ball", source: "assets/bouncing_ball.mp4", duration: 12.77, size: 2.6, date: "2023-11-23T12:41:00" },
    { title: "cctv_laundromat", source: "assets/cctv_laundromat.mp4", duration: 9.27, size: 1.6, date: "2023-11-19T20:42:00" },
    { title: "cutting_garlic", source: "assets/cutting_garlic.mp4", duration: 2.36, size: 1.1, date: "2023-11-24T11:39:00" },
    { title: "dinner_spread", source: "assets/dinner_spread.mp4", duration: 10.24, size: 3.1, date: "2023-11-24T20:17:00" },
    { title: "disturbed_water", source: "assets/disturbed_water.mp4", duration: 8.36, size: 15, date: "2023-11-23T13:50:00" },
    { title: "door_closing", source: "assets/door_closing.mp4", duration: 4.60, size: 1.3, date: "2023-11-24T11:49:00" },
    { title: "here_sign", source: "assets/here_sign.mp4", duration: 5.48, size: 4.4, date: "2023-11-23T14:34:00" },
    { title: "office_woman", source: "assets/office_woman.mp4", duration: 8.44, size: 2.9, date: "2023-14-23T16:53:00" },
    { title: "parking_lot", source: "assets/parking_lot.mp4", duration: 8.66, size: 8.5, date: "2023-11-23T14:41:00" },
    { title: "pen_clicking", source: "assets/pen_clicking.mp4", duration: 5.65, size: 1.1, date: "2023-11-23T13:04:00" },
    { title: "pizza_slice", source: "assets/pizza_slice.mp4", duration: 7.78, size: 1.9, date: "2023-11-14T14:46:00" },
    { title: "printing_paper", source: "assets/printing_paper.mp4", duration: 21.52, size: 6.2, date: "2023-11-25T14:42:00" },
    { title: "right_arrows", source: "assets/right_arrows.mp4", duration: 7.23, size: 13.4, date: "2023-11-23T13:45:00" },
    { title: "running_water", source: "assets/running_water.mp4", duration: 4.52, size: 0.95, date: "2023-11-14T13:55:00" },
    { title: "seeknok_river", source: "assets/seeknok_river.mp4", duration: 18.36, size: 17.6, date: "2023-11-14T12:11:02" },
    { title: "soccer_goal", source: "assets/soccer_goal.mp4", duration: 4.48, size: 7.7, date: "2023-11-23T14:03:00" },
    { title: "stop_light", source: "assets/stop_light.mp4", duration: 7.79, size: 2.5, date: "2023-11-14T16:58:00" },
    { title: "stop_sign", source: "assets/stop_sign.mp4", duration: 7.65, size: 1.7, date: "2023-11-23T16:46:00" },
    { title: "under_highway", source: "assets/under_highway.mp4", duration: 8.49, size: 1.5, date: "2023-11-23T14:11:00" },
    { title: "washing_machine", source: "assets/washing_machine.mp4", duration: 10.41, size: 2.3, date: "2023-11-193T20:06:00" },
    { title: "wearing_sweater", source: "assets/wearing_sweater.mp4", duration: 13.69, size: 3.8, date: "2023-11-23T13:25:00" },
    { title: "word_is", source: "assets/word_is.mp4", duration: 16.02, size: 3.6, date: "2023-11-23T15:23:00" },
];
var videoData = [...originalVideoData];
var currentVideoIndex = 0;

let preloaded = false;
var nextVideo;
function preloadNextVideo() {
    var nextVideoIndex = currentVideoIndex + 1;
    if (nextVideoIndex < videoData.length) {
        nextVideo = document.createElement('video');
        nextVideo.classList.add('alecsVideo');
        nextVideo.id = 'videoPlayer';
        nextVideo.src = videoData[nextVideoIndex].source;
        nextVideo.muted = videoMuted;
        nextVideo.preload = 'auto';
        preloaded = true;
    }
}

let initialize = true;
let addedListener = false;
function playNextVideo() {
    initialize = false;
    updatePlayPauseButton("PAUSE");
    console.log(currentVideoIndex)
    var currentVideo = videoData[currentVideoIndex];

    if (currentVideo) {
        if (preloaded) {
            videoContainer.appendChild(nextVideo);
            videoPlayer.remove();
            videoPlayer = nextVideo;
            preloaded = false;
            addedListener = false;
        } else {
            videoPlayer.src = currentVideo.source;
            videoPlayer.load();
        }
        videoPlayer.play();
        preloadNextVideo();
        if (addedListener == false) {
            addedListener = true;
            videoPlayer.addEventListener('ended', function () {
                currentVideoIndex++;
                playNextVideo();
            });        
        }
    } else {
        console.log("All videos played");
        updatePlayPauseButton("PLAY");
        initialize = true;
        currentVideoIndex = 0;
    }
}


var clickPlayButton = document.getElementById('clickPlay');
clickPlayButton.addEventListener('click', function () {
    var video = document.getElementById('videoPlayer');
    if (video.paused) {
        if (initialize) {
            playNextVideo();
        } else {
            video.play();
        }
        clickPlayButton.innerHTML = 'PAUSE';
    } else {
        video.pause();
        clickPlayButton.innerHTML = 'PLAY';
    }
});

let videoMuted = false;
function toggleSoundMute() {
    videoMuted = !videoMuted;
    nextVideo.muted = videoMuted;
    videoPlayer.muted = videoMuted;
    updateClickSound();
}

function updateClickSound() {
    var buttonText = videoMuted ? "SOUND" : "MUTE";
    clickSound.innerHTML = buttonText;
}

function updatePlayPauseButton(text) {
    var clickPlayButton = document.getElementById('clickPlay');
    clickPlayButton.innerHTML = text;
}

// Sorting functions

function titleAZ() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function titleZA() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return b.title.localeCompare(a.title);
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function durationAsc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.duration - b.duration;
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function durationDesc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return b.duration - a.duration;
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function sizeAsc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.size - b.size;
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function sizeDesc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return b.size - a.size;
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function filmingDateAsc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function filmingDateDesc() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}

function shuffleVideos() {
    preloaded = false;
    videoData = [...originalVideoData];
    videoData.sort(function () {
        return Math.random() - 0.5;
    });
    console.log(videoData)
    currentVideoIndex = 0;
    initialize = true;
    playNextVideo();
}


// Initial video play
function openInfo() {
    let info = document.querySelector('.info');
    info.style.display = "block";
}
function closeInfo() {
    let info = document.querySelector('.info');
    info.style.display = "none";
}