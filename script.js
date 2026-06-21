document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    // 1. Controle do Tema (Claro / Escuro)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Altera o texto do botão para orientar o usuário
            if (document.body.classList.contains('dark-theme')) {
                themeToggleBtn.textContent = 'Modo Claro';
            } else {
                themeToggleBtn.textContent = 'Modo Escuro';
            }
        });
    }

    // 2. Validação Simples do Formulário de Contato
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão e o recarregamento da página

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Limpa mensagens anteriores
            formFeedback.textContent = '';
            formFeedback.className = 'feedback-msg';

            // Validação dos campos
            if (nome === '' || email === '' || mensagem === '') {
                formFeedback.textContent = 'Por favor, preencha todos os campos do formulário.';
                formFeedback.classList.add('feedback-error');
                formFeedback.style.display = 'block';
                return;
            }

            // Simulação de envio com sucesso
            formFeedback.textContent = `Obrigado pelo contato, ${nome}! Sua mensagem foi simulada com sucesso.`;
            formFeedback.classList.add('feedback-success');
            formFeedback.style.display = 'block';

            // Limpa o formulário após o envio
            contactForm.reset();
        });
    }
});
