// Περιμένουμε να φορτώσει η σελίδα
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Έλεγχος αν ο χρήστης είχε επιλέξει ήδη dark mode
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        toggleBtn.textContent = '☀️ Light Mode';
    }

    // Όταν πατιέται το κουμπί
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            toggleBtn.textContent = '☀️ Light Mode';
        } else {
            toggleBtn.textContent = '🌙 Dark Mode';
        }

        // Αποθήκευση της επιλογής στον browser
        localStorage.setItem('theme', theme);
    });
});