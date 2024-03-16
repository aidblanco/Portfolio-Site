document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        // Change button text based on current theme
        if(document.body.classList.contains('dark-theme')){
            toggleButton.textContent = 'Light Theme';
        } else {
            toggleButton.textContent = 'Dark Theme';
        }
    });
});
