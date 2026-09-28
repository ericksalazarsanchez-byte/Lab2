document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      const isDarkMode = document.body.classList.contains('dark-mode');
      themeToggleBtn.innerHTML = isDarkMode
        ? '<span class="icon">☀️</span> Light Mode'
        : '<span class="icon">🌙</span> Dark Mode';
    });
  }
});