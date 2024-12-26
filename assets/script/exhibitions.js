// Open Modal
function openModal(event) {
    const title = event.querySelector('.info p').textContent.split('\n')[0];
    const description = event.getAttribute('data-description');
    const image = event.querySelector('img').src;

    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;

    document.getElementById('modal').style.display = 'flex';
    document.body.classList.add('modal-open');
}

// Close Modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Filter Events based on Category
function filterEvents(category, element) {
    const allItems = document.querySelectorAll('.event-item');
    const allCategories = document.querySelectorAll('.category');
    const resetButton = document.querySelector('.reset');

    // Reset selected category and events
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

    // Mark the selected category
    element.classList.add('selected');
    resetButton.classList.add('selected');
}