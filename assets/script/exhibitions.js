let currentEventIndex = null;
let eventItems = [];
let filteredEvents = [];

function initializeEvents() {
    eventItems = document.querySelectorAll('.event-item');
    filteredEvents = Array.from(eventItems).filter(item => item.style.display !== 'none'); 
}


function openModal(event) {
    if (eventItems.length === 0) {
        initializeEvents();
    }

    const title = event.querySelector('.info p').textContent.split('\n')[0];
    const description = event.getAttribute('data-description');
    const image = event.querySelector('img').src;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;

    const buyTicketLink = "tickets.html";
    document.getElementById('buyTicketButton').href = buyTicketLink;

    currentEventIndex = filteredEvents.indexOf(event);

    document.getElementById('modal').style.display = 'flex';
    document.body.classList.add('modal-open');

    updateArrows();
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

function navigateEvent(direction) {
    if (direction === 'prev' && currentEventIndex > 0) {
        currentEventIndex--;
    } else if (direction === 'next' && currentEventIndex < filteredEvents.length - 1) {
        currentEventIndex++;
    }

    
    const newEvent = filteredEvents[currentEventIndex];
    openModal(newEvent);
}

function updateArrows() {
    document.getElementById('prevEvent').style.display = currentEventIndex === 0 ? 'none' : 'block';
    document.getElementById('nextEvent').style.display = currentEventIndex === filteredEvents.length - 1 ? 'none' : 'block';
}

function filterEvents(category, element) {
    const allItems = document.querySelectorAll('.event-item');
    const allCategories = document.querySelectorAll('.category');
    const resetButton = document.querySelector('.reset');

    allCategories.forEach(cat => cat.classList.remove('selected'));
    resetButton.classList.remove('selected');

    allItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    filteredEvents = Array.from(allItems).filter(item => item.style.display !== 'none');

    if (filteredEvents.length > 0 && currentEventIndex >= filteredEvents.length) {
        currentEventIndex = filteredEvents.length - 1; 
    }

    updateArrows();

    element.classList.add('selected');
    resetButton.classList.add('selected');
}

window.onload = initializeEvents;