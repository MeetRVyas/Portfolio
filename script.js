document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = 'assets/icons/sun.svg';
    const moonIcon = 'assets/icons/moon.svg';

    // Function to set the theme in the HTML element and localStorage
    const applyTheme = (theme) => {
        const isDark = theme === 'theme-dark';
        document.documentElement.className = theme;
        localStorage.setItem('portfolioTheme', theme);

        // Update the button icon and aria-label
        themeToggle.innerHTML = `<img src="${isDark ? sunIcon : moonIcon}" alt="Theme toggle icon">`;
        themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
    };

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.className;
        const newTheme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
        applyTheme(newTheme);
    });

    // Apply saved theme on page load or default to light theme
    const savedTheme = localStorage.getItem('portfolioTheme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('theme-light'); // Default theme
    }
});