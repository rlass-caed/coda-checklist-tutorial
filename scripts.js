function toggleExample(button) {
    const content = button.nextElementSibling;
    
    document.querySelectorAll('.example-content.active').forEach(item => {
        if (item !== content) {
            item.classList.remove('active');
            const otherButton = item.previousElementSibling;
            if (otherButton && otherButton.classList.contains('example-toggle')) {
                otherButton.textContent = '📸 Ver Exemplo';
            }
        }
    });
    
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        button.textContent = '❌ Fechar Exemplo';
    } else {
        button.textContent = '📸 Ver Exemplo';
    }
}