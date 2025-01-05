function showInfo(section) {

    const contentSections = document.querySelectorAll('.info');
    const navItems = document.querySelectorAll('.nav-item');
    const targetSection = document.getElementById(`${section}-content`);
    const targetNavItem = document.getElementById(section);
    contentSections.forEach(content => content.style.display = 'none');
    navItems.forEach(item => item.classList.remove('active'));

   
    if (targetSection) {
        targetSection.style.display = 'block';
    } else {
        console.log(`Section ${section} not found`);
    }

    if (targetNavItem) {
        targetNavItem.classList.add('active');
    }

    
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });

    setTimeout(() => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth' 
        });

        
        window.scrollBy(0, 50); 
    }, 500); 

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