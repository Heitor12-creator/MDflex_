document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menu = document.getElementById('menu');

    if (!btnMenu || !menu) return;

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });
});
