const btnVerMais = document.querySelectorAll('.btn-ver-mais');

btnVerMais.forEach(button => {
  button.addEventListener('click', () => {
    const detalhes = button.closest('.project-box').nextElementSibling; // Adivinha o próximo '.detalhes-projeto'

    detalhes.classList.toggle('ativo');

    if (detalhes.classList.contains('ativo')) {
      button.textContent = "Ver menos";
    } else {
      button.textContent = "Ver mais";
    }
  });
});

const btnFecharAba = document.querySelectorAll('.fechar-aba');

btnFecharAba.forEach(button => {
  button.addEventListener('click', () => {
    const detalhes = button.closest('.detalhes-projeto'); // Adivinha o '.detalhes-projeto' que o botão está
    detalhes.classList.remove('ativo');

    // Ajustando o texto do botão "Ver mais" para "Ver mais"
    const btnVerMais = detalhes.previousElementSibling.querySelector('.btn-ver-mais');
    if (btnVerMais) {
      btnVerMais.textContent = "Ver mais";
    }
  });
});


const elementos = document.querySelectorAll('.elemento');


const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ativo');  
            observer.unobserve(entry.target); 
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5
});


elementos.forEach(elemento => {
    observer.observe(elemento);
});

// ================================
// MENU MOBILE
// ================================
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const btnClose = document.getElementById('btn-close');
const links = document.querySelectorAll('.nav-links-mobile');

// Abrir menu
btnMenu.addEventListener('click', () => {
  menu.classList.add('Open');
  overlay.classList.add('active');
});

// Fechar menu
btnClose.addEventListener('click', () => {
  menu.classList.remove('Open');
  overlay.classList.remove('active');
});

// Fechar ao clicar fora
overlay.addEventListener('click', () => {
  menu.classList.remove('Open');
  overlay.classList.remove('active');
});

// Fechar ao clicar em qualquer link do menu
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('Open');
    overlay.classList.remove('active');
  });
});
