const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = "DARK";
}

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = "DARK";
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = "LIGHT";
    }
});