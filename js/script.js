function toggleTheme() {
    
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light-theme')) {
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
    updateThemeIcon();
    
    document.querySelectorAll('.navbar a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('selected');
        }
    });
});

const redirectDiv = document.getElementById('redirectDiv');

redirectDiv.addEventListener('click', function () {
  window.open('https://mind-t-i.vercel.app', '_blank');
});