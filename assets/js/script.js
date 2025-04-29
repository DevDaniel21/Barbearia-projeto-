document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        })
    })
<<<<<<< HEAD

    // Fechar o dropdown ao clicar fora
    document.addEventListener('click', function (e) {
        dropdownToggle.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
            if (!parent.contains(e.target)) {
                parent.classList.remove('active')
            }
        })
    })
})

const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
    setTimeout(() => {
        searchOverlay.querySelector('.search-input').focus();
    }, 100)
})

// fechar o botão

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
})

// fechar com o ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.style.display = 'none';
    }
=======
>>>>>>> e1bbbc94eb9f166c8682730d6ef615275626e793
})