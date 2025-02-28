document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button[data-url]');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});
