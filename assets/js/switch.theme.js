document.addEventListener('DOMContentLoaded', (event) => {
    const htmlElement = document.documentElement;
    const darkModeButton = document.getElementById('darkModeButton');
    const themeIcon = document.getElementById('themeIcon');

    // Set the default theme to dark if no setting is found in local storage
    const currentTheme = localStorage.getItem('bsTheme') || 'light';
    htmlElement.setAttribute('data-bs-theme', currentTheme);

    // Update button icon based on theme
    if (currentTheme === 'dark') {
        themeIcon.classList.replace('bi-moon-stars', 'bi-sun');
    }

    darkModeButton.addEventListener('click', function () {
        const newTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('bsTheme', newTheme);

        // Toggle icon
        if (newTheme === 'dark') {
            themeIcon.classList.replace('bi-sun', 'bi-moon-stars');
        } else {
            themeIcon.classList.replace('bi-moon-stars', 'bi-sun');
        }
    });
});
