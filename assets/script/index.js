//nese e mbajme hover ne image, nderrohet ne video

document.querySelector('.main').addEventListener('mouseenter', function() {
    var video = this.querySelector('.video');
    video.play();
});

document.querySelector('.main').addEventListener('mouseleave', function() {
    var video = this.querySelector('.video');
    video.pause();
    video.currentTime = 0; 
});

//adding header

// $('#header').load('/header/header.html');