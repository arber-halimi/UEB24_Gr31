function showInfo(section) {

    const contentSections = document.querySelectorAll('.info');
    contentSections.forEach((content) => content.style.display = 'none');

    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('active'));

    document.getElementById(`${section}-content`).style.display = 'block';

  
    document.getElementById(section).classList.add('active');
}