const toggles = document.querySelectorAll('.sidebar-toggle');
const sidebar = document.querySelector('.main-container');
const mediaQuery = window.matchMedia('(min-width: 1024px)'); // Deteksi layar besar

// Fungsi untuk memperbarui ikon sesuai kondisi sidebar
function updateIcon(toggle) {
    const icon = toggle.querySelector('.sidebarIcon');

    if (sidebar.classList.contains('open')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x');
    } else {
        icon.classList.remove('bi-x');
        icon.classList.add('bi-list');
    }
}

// Memeriksa status sidebar saat halaman dimuat
function initializeSidebar() {
    // Jika lebar layar lebih besar dari 1024px, sidebar harus terbuka secara default
    if (mediaQuery.matches) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }

    // Update ikon sesuai kondisi sidebar saat halaman dimuat
    toggles.forEach(toggle => {
        updateIcon(toggle);
    });
}

// Event listener untuk tombol toggle
toggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.preventDefault();
        sidebar.classList.toggle('open');
        updateIcon(toggle);
    });
});

// Deteksi perubahan ukuran layar (resize) dan perbarui status sidebar
mediaQuery.addEventListener('change', function() {
    initializeSidebar(); // Inisialisasi ulang sidebar dan ikon saat ukuran layar berubah
});

// Inisialisasi status sidebar dan ikon saat pertama kali dimuat
initializeSidebar();



const togleSwitchTheme = document.querySelectorAll('.switch-mode');

togleSwitchTheme.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah aksi default dari <a>

        const icon = button.querySelector('.switchModeIcon'); // Menargetkan ikon <i> dalam tombol yang diklik

        // Toggle icon antara list (hamburger) dan close (X) icons
        if (icon.classList.contains('bi-brightness-high')) {
            icon.classList.remove('bi-brightness-high');
            icon.classList.add('bi-moon-stars');
        } else {
            icon.classList.remove('bi-moon-stars');
            icon.classList.add('bi-brightness-high');
        }
    });
});

document.getElementById('theme-switcher').addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Simpan tema di localStorage
  });
  
  // Saat halaman di-load, cek localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
});