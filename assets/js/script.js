const toggles = document.querySelectorAll('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

toggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault();  // Mencegah link berpindah halaman
        sidebar.classList.toggle('open');
    });
});

const toggleButtons = document.querySelectorAll('.sidebar-toggle');

toggleButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default dari <a>

        const icon = button.querySelector('.sidebarIcon'); // Menargetkan ikon <i> dalam tombol yang diklik

        // Toggle icon antara list (hamburger) dan close (X) icons
        if (icon.classList.contains('bi-list')) {
            icon.classList.remove('bi-list');
            icon.classList.add('bi-x');
        } else {
            icon.classList.remove('bi-x');
            icon.classList.add('bi-list');
        }
    });
});
