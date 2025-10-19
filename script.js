document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = 'assets/icons/sun.svg';
    const moonIcon = 'assets/icons/moon.svg';

    // Function to set theme in HTML and localStorage
    const setTheme = (theme) => {
        const isThemeA = theme === 'theme-a';
        document.documentElement.className = theme;
        localStorage.setItem('portfolioTheme', theme);

        // Update the toggle button's icon
        // Assuming Theme A is dark (moon) and Theme B is also dark (sun as an alternative)
        // Let's refine this: let's toggle between two dark themes, A and B.
        // For simplicity, we can use two distinct icons or just text.
        // Let's stick to icons that represent the palette.
        // Let's make it a Navy -> Teal toggle, represented by simple shapes or letters.
        // OR better, let's just make it a simple toggle visual and change the aria-label.
        themeToggle.innerHTML = `<img src="${isThemeA ? moonIcon : sunIcon}" alt="Theme toggle icon">`;
        themeToggle.setAttribute('aria-label', `Switch to ${isThemeA ? 'Theme B (Teal)' : 'Theme A (Navy)'}`);
    };

    // Determine the next theme to switch to
    const getNextTheme = () => {
        const currentTheme = document.documentElement.className;
        return currentTheme === 'theme-a' ? 'theme-b' : 'theme-a';
    };

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        const nextTheme = getNextTheme();
        setTheme(nextTheme);
    });

    // On page load, apply the stored theme or default to theme-a
    const storedTheme = localStorage.getItem('portfolioTheme');
    if (storedTheme && (storedTheme === 'theme-a' || storedTheme === 'theme-b')) {
        setTheme(storedTheme);
    } else {
        setTheme('theme-a'); // Default theme
    }
});