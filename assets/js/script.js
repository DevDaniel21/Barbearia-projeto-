document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        });
    });

    // Fechar o dropdown ao clicar fora
    document.addEventListener('click', function (e) {
        dropdownToggle.forEach((toggle) => {
            const parent = toggle.closest('.dropdown-item');
            if (!parent.contains(e.target)) {
                parent.classList.remove('active');
            }
        });
    });
});

const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const closeSearch = document.getElementById('closeSearch');

searchToggle.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
    setTimeout(() => {
        searchOverlay.querySelector('.search-input').focus();
    }, 100);
});

// fechar o botão

closeSearch.addEventListener('click', () => {
    searchOverlay.style.display = 'none';
});

// fechar com o ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchOverlay.style.display = 'none';
    }
});

// Galeria
const imagens = document.querySelectorAll('.galeria img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img')

imagens.forEach((img) => {       
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('show')
    })
})

// esconder o lightbox
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
})


// Abrir o Login
const openLoginBtn = document.getElementById('openLogin')
const containerLogin = document.querySelector('.container-login')

openLoginBtn.addEventListener('click', () => {
    containerLogin.classList.add('active')
})

// Fechar ao clicar fora do formulário ou pressionar ESC
containerLogin.addEventListener('click', (e) => {
    if(e.target === containerLogin) {
        containerLogin.classList.remove('active')
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        containerLogin.classList.remove('active')
    }
})