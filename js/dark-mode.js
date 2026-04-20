/**
 * Dark Mode Toggle - Optimized
 */

const initDarkMode = () => {
    // Apply saved or system preference theme immediately
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    applyTheme(savedTheme);

    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {
        // Theme toggle handler
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // System preference change listener
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
};

function applyTheme(theme) {
    const isDark = theme === 'dark';
    const root = document.documentElement;
    root.classList.remove('light-mode', 'dark-mode');
    root.classList.add(isDark ? 'dark-mode' : 'light-mode');
    root.style.backgroundColor = isDark ? '#0F0F0F' : '#FAFAFB';

    if (document.body) {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(isDark ? 'dark-mode' : 'light-mode');
    }
}

// Initialize when DOM is ready or immediately if already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDarkMode);
} else {
    initDarkMode();
}
