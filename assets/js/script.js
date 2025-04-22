document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        })
    })
})