function openModal(event) {
    const title = event.querySelector('.info p').textContent.split('\n')[0];
    const description = event.getAttribute('data-description');
    const image = event.querySelector('img').src;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;

    const buyTicketLink = "tickets.html";
    document.getElementById('buyTicketButton').href = buyTicketLink;

    document.getElementById('modal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

function filterEvents(category, element) {
    const allItems = document.querySelectorAll('.event-item');
    const allCategories = document.querySelectorAll('.category');
    const resetButton = document.querySelector('.reset');

    allCategories.forEach(cat => cat.classList.remove('selected'));
    resetButton.classList.remove('selected');

    if (category === 'all') {
        allItems.forEach(item => item.style.display = 'block');
    } else {
        allItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    element.classList.add('selected');
    resetButton.classList.add('selected');
}