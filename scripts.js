function toggleExample(button) {
    const content = button.nextElementSibling;
    
    // Fecha outros exemplos abertos
    document.querySelectorAll('.example-content.active').forEach(item => {
        if (item !== content) {
            item.classList.remove('active');
            const otherButton = item.previousElementSibling;
            if (otherButton && otherButton.classList.contains('example-toggle')) {
                otherButton.innerHTML = '<i class="fi fi-ss-camera"></i> Ver Exemplo';
            }
        }
    });
    
    // Alterna o estado do exemplo atual
    content.classList.toggle('active');
    
    // Atualiza o texto e o ícone do botão
    if (content.classList.contains('active')) {
        button.innerHTML = '<i class="fi fi-ss-x" style="font-size: 0.8em;"></i> Fechar Exemplo';
    } else {
        button.innerHTML = '<i class="fi fi-ss-camera"></i> Ver Exemplo';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // --- LÓGICA DO TEMA E LOGO ---
    const themeToggle = document.getElementById('theme-toggle');
    const logo = document.querySelector('.logo');
    const currentTheme = localStorage.getItem('theme');

    // Função para atualizar a logo com base no tema
    const updateLogo = (theme) => {
        if (theme === 'dark') {
            logo.src = 'img/logo2.png';
        } else {
            logo.src = 'img/logo.png';
        }
    };

    // Aplica o tema e a logo salvos ao carregar a página
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateLogo(currentTheme); // Atualiza a logo
        if (currentTheme === 'dark') {
            themeToggle.innerHTML = '<i class="fi fi-sr-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fi fi-ss-moon"></i>';
        }
    } else {
        // Garante que o estado inicial (sem tema salvo) também funcione
        updateLogo('light');
        themeToggle.innerHTML = '<i class="fi fi-ss-moon"></i>';
    }

    // Evento de clique para alternar o tema
    themeToggle.addEventListener('click', function() {
        const currentThemeSetting = document.documentElement.getAttribute('data-theme');
        if (currentThemeSetting === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fi fi-ss-moon"></i>';
            updateLogo('light'); // Atualiza a logo para o tema claro
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fi fi-sr-sun"></i>';
            updateLogo('dark'); // Atualiza a logo para o tema escuro
        }
    });

    // --- LÓGICA DE ROLAGEM (SCROLL-SPY) ---
    const sections = document.querySelectorAll('.tutorial-section[id]');
    const navLinks = document.querySelectorAll('.side-menu a');
    const navHeight = document.querySelector('.side-menu').offsetHeight;

    const onScroll = () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Ajusta o offset com a altura do menu + uma margem
            if (window.pageYOffset >= sectionTop - navHeight - 50) { 
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', onScroll);
});