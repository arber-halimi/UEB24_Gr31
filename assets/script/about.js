function showInfo(section) {
    try {
        localStorage.setItem('selectedSection', section);

        const currentScrollY = window.scrollY;
        if (currentScrollY > 0) {
            window.scrollTo({
                top: 100, 
                behavior: 'smooth', 
            });
        }

      
        const contentSections = document.querySelectorAll('.info');
        const navItems = document.querySelectorAll('.nav-item');
        for (let i = 0; i < contentSections.length; i++) {
            contentSections[i].style.display = 'none';
        }
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }


        const targetSection = document.getElementById(`${section}-content`);
        if (targetSection) {
            targetSection.style.display = 'block';
        } else {
            console.warn(`Section ${section} not found`);
        }


        const targetNavItem = document.getElementById(section);
        if (targetNavItem) {
            targetNavItem.classList.add('active');
        }

        playAudio(section);
    } catch (error) {
        console.error('Error in showInfo:', error);
    }
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

document.addEventListener('DOMContentLoaded', () => {
    const lastSelectedSection = localStorage.getItem('selectedSection') || 'history';
    showInfo(lastSelectedSection);
});