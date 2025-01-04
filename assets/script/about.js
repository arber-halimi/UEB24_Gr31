function showInfo(section) {

    const contentSections = document.querySelectorAll('.info');
    contentSections.forEach((content) => content.style.display = 'none');

    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('active'));

    document.getElementById(`${section}-content`).style.display = 'block';

  
    document.getElementById(section).classList.add('active');
    playAudio(section);
}

function playAudio(section) {
    
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => audio.pause());

    
    const audio = document.getElementById(`${section}-audio`);
    if (audio) {
        audio.currentTime = 0; 
        audio.play();
    } else {
        console.log(`No audio found for ${section}`);
    }
}