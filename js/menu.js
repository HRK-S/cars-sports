const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) { // função para alterar o menu hambúrguer utilizando o evento trigger
    if (event.type === 'touchstart') event.preventDefault();
    // previne o comportamento padrão do navegador em dispositivos móveis

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

// Adiciona os listeners de evento apenas se o botão existir
if (btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
} else {
    console.warn('Botão #btn-mobile não encontrado — menu mobile não será ativado.');
}
