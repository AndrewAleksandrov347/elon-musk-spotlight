// Модальное окно
function openModal(src, alt) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = src;
    captionText.innerHTML = alt;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Toggle секций (аккордеоны для мобильных)
function toggleSection(id) {
    if (window.innerWidth <= 768) {
        const content = document.getElementById(id);
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
}

// Fade-in анимации при скролле
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
});

// Light/Dark mode toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Инициализация: Добавить класс fade-in к разделам
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
});
