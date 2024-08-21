





// document.body.addEventListener('click', function () {
//     togglePlayPause();
// });

// window.addEventListener('resize', function () {
//     updateVideoSize();
// });



// function startVideo() {
//     var clickPlayButton = document.getElementById('clickPlay');
//     var videoContainer = document.getElementById('videoContainer');
//     var endText = document.getElementById('endText');

//     videoContainer.style.display = 'block';
//     endText.style.display = 'none';

//     playNextVideo();
// }

// function updateVideoSize() {
//     var videoContainer = document.getElementById('videoContainer');
//     var aspectRatio = videoPlayer.videoWidth / videoPlayer.videoHeight;
//     var newWidth = videoContainer.clientHeight * aspectRatio;

//     if (newWidth > videoContainer.clientWidth) {
//         videoPlayer.style.width = newWidth + 'px';
//         videoPlayer.style.height = '100%';
//     } else {
//         videoPlayer.style.width = '100%';
//         videoPlayer.style.height = (videoContainer.clientWidth / aspectRatio) + 'px';
//     }
// }



/*
function titleAZ() {
    const currentOption = document.getElementById('titleAZ');
    clearSelected(currentOption);

    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return b.title.localeCompare(a.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function titleZA() {
    const currentOption = document.getElementById('titleZA');
    clearSelected(currentOption);

    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return b.title.localeCompare(a.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function durationAsc() {
    const currentOption = document.getElementById('durationAsc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function durationDesc() {
    const currentOption = document.getElementById('durationDesc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function sizeAsc() {
    const currentOption = document.getElementById('sizeAsc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function sizeDesc() {
    const currentOption = document.getElementById('sizeDesc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function filmingDateAsc() {
    const currentOption = document.getElementById('filmingDateAsc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function filmingDateDesc() {
    const currentOption = document.getElementById('filmingDateDesc');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}

function shuffleVideos() {
    const currentOption = document.getElementById('shuffleVideos');
    clearSelected(currentOption);
    
    videoData = [...originalVideoData];
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    currentVideoIndex = 0;
    playNextVideo();
    currentOption.classList.add('selected');
}
*/

/*
function playNextVideo() {
    var currentVideo = videoData[currentVideoIndex];
 
    if (currentVideo) {
        videoPlayer.src = currentVideo.source;
        videoPlayer.load();
 
        videoPlayer.oncanplay = function () {
            videoPlayer.play();
            updateVideoSize();
            updateClickPlay("Pause");
            preloadNextVideo();
        };
 
        videoPlayer.addEventListener('ended', function () {
            currentVideoIndex++;
            playNextVideo();
        });
 
        // Check if it's the last video
        if (currentVideoIndex === videoData.length - 1) {
            showEndText();
        } else {
            hideEndText();
        }
    } else {
        console.log("All videos played");
        updateClickPlay("Play");
    }
}
 
function showEndText() {
    endText.style.display = 'block';
}
 
function hideEndText() {
    endText.style.display = 'none';
}
*/



/*
// Sorting functions

function titleAZ() {
    videoData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    });
    restartVideoSequence();
}

function titleZA() {
    videoData.sort(function (a, b) {
        return b.title.localeCompare(a.title);
    });
    restartVideoSequence();
}

function durationAsc() {
    videoData.sort(function (a, b) {
        return a.duration - b.duration;
    });
    restartVideoSequence();
}

function durationDesc() {
    videoData.sort(function (a, b) {
        return b.duration - a.duration;
    });
    restartVideoSequence();
}

function sizeAsc() {
    videoData.sort(function (a, b) {
        return a.size - b.size;
    });
    restartVideoSequence();
}

function sizeDesc() {
    videoData.sort(function (a, b) {
        return b.size - a.size;
    });
    restartVideoSequence();
}

function shuffleVideos() {
    videoData.sort(function () {
        return Math.random() - 0.5;
    });
    restartVideoSequence();
}

function restartVideoSequence() {
    currentVideoIndex = 0;
    playNextVideo();
}

// Initial video play
playNextVideo();
*/

/*

//code version 2

document.addEventListener('DOMContentLoaded', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoSources = ["assets/video1_10AM.mp4", "assets/video2_11AM.mp4", "assets/stop_light.mp4", "assets/bouncing_ball.mp4", "assets/pen_clicking.mp4", "assets/washing_machine.mp4", "assets/door_closing.mp4", "assets/stop_sign.mp4", "assets/cutting_garlic.mp4", "assets/eating_pizza.mp4", "assets/printing_paper.mp4", "assets/dinner_spread.mp4", "assets/parking_lot.mp4", "assets/under_highway.mp4", "assets/wearing_sweater.mp4", "assets/soccer_goal.mp4", "assets/arrows_park.mp4", "assets/cctv_laundromat.mp4", "assets/overtime_lady.mp4", "assets/water_park.mp4"]; // Add more video sources as needed

    var currentVideoIndex = 0;

    function preloadNextVideo() {
        var nextVideoIndex = currentVideoIndex + 1;
        if (nextVideoIndex < videoData.length) {
            var nextVideo = document.createElement('video');
            nextVideo.src = videoData[nextVideoIndex].source;
            nextVideo.preload = 'auto';
        }
    }

    function playNextVideo() {
        var currentVideo = videoData.shift();

        if (currentVideo) {
            videoPlayer.src = currentVideo.source;
            videoPlayer.load();

            videoPlayer.oncanplay = function () {
                videoPlayer.play();
                updateVideoSize();
                updatePlayPauseButton("Pause");
                preloadNextVideo();
            };
        } else {
            console.log("All videos played");
            updatePlayPauseButton("Play");
        }
    }

    function updateVideoSize() {
        var videoContainer = document.getElementById('videoContainer');
        var aspectRatio = videoPlayer.videoWidth / videoPlayer.videoHeight;
        var newWidth = videoContainer.clientHeight * aspectRatio;

        if (newWidth > videoContainer.clientWidth) {
            videoPlayer.style.width = newWidth + 'px';
            videoPlayer.style.height = '100%';
        } else {
            videoPlayer.style.width = '100%';
            videoPlayer.style.height = (videoContainer.clientWidth / aspectRatio) + 'px';
        }
    }

    function playNextVideo() {
        currentVideoIndex++;

        if (currentVideoIndex < videoSources.length) {
            videoPlayer.src = videoSources[currentVideoIndex];
            videoPlayer.load();
            videoPlayer.play();
        } else {
            // All videos played, you can loop or take another action
            console.log("All videos played");
        }
    }

    // Add event listener for the "ended" event on the video element
    videoPlayer.addEventListener('ended', playNextVideo);

    // Start playing the first video
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
});


document.addEventListener('DOMContentLoaded', function () {
    var clickPlayButton = document.getElementById('clickPlay');
    var video = document.getElementById('videoPlayer');

    clickPlayButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            clickPlayButton.innerHTML = 'PAUSE';
        } else {
            video.pause();
            clickPlayButton.innerHTML = 'PLAY';
        }
    });
});

function toggleSoundMute() {
    videoPlayer.muted = !videoPlayer.muted;
    updateClickSound();
}

function updateClickSound() {
    var buttonText = videoPlayer.muted ? "SOUND" : "MUTE";
    clickSound.innerHTML = buttonText;
}
*/












/* function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        updatePlayPauseButton("Pause");
    } else {
        videoPlayer.pause();
        updatePlayPauseButton("Play");
    }
}

function updatePlayPauseButton(text) {
    playPauseButton.innerHTML = text;
}
*/


/* 
document.addEventListener('DOMContentLoaded', function () {
    var vimeoPlayerDiv = document.getElementById('vimeoPlayer');
    var videoIds = ['886872715', '886873419']; // Replace with your Vimeo video IDs
    var currentVideoIndex = 0;
    var player;

function initializePlayer(videoId) {
    var iframe = document.createElement('iframe');
    iframe.src = `https://player.vimeo.com/video/${videoId}`;
    iframe.width = '640';
    iframe.height = '360';
    iframe.background = '1';
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; fullscreen'; // Combine autoplay and fullscreen
    iframe.allowFullscreen = true;

    vimeoPlayerDiv.innerHTML = '';
    vimeoPlayerDiv.appendChild(iframe);

    return new Vimeo.Player(iframe, {
        autoplay: true,
        controls: false
    });
    }

    function playNextVideo() {
        currentVideoIndex++;

        if (currentVideoIndex < videoIds.length) {
            player = initializePlayer(videoIds[currentVideoIndex]);

            player.on('ended', playNextVideo);
        } else {
            // All videos played, you can loop or take another action
            console.log("All videos played");
        }
    }

    // Start playing the first video
    player = initializePlayer(videoIds[currentVideoIndex]);

    // Add event listener for the "ended" event on the first video
    player.on('ended', playNextVideo);
});
*/