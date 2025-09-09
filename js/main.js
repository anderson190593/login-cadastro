document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do DOM
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const switchToRegisterBtn = document.getElementById('switch-to-register');
    const switchToLoginBtn = document.getElementById('switch-to-login');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    // Função para alternar entre os formulários
    const switchForm = (formToShow, formToHide) => {
        formToHide.classList.add('d-none');
        formToShow.classList.remove('d-none');
    };

    // Eventos de clique para alternar
    switchToRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm(registerFormContainer, loginFormContainer);
    });

    switchToLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchForm(loginFormContainer, registerFormContainer);
    });

    // Função para validar o formulário de Cadastro
    const validateRegisterForm = () => {
        let isValid = true;
        const email = document.getElementById('register-email');
        const password = document.getElementById('register-password');
        const confirmPassword = document.getElementById('confirm-password');

        // Validação de email
        if (!email.value || !email.value.includes('@') || !email.value.includes('.')) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Validação de senha (pelo menos 6 caracteres)
        if (password.value.length < 6) {
            password.classList.add('is-invalid');
            isValid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        // Validação de confirmação de senha
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('is-invalid');
            isValid = false;
        } else {
            confirmPassword.classList.remove('is-invalid');
        }

        return isValid;
    };

    // Evento de envio do formulário de Cadastro
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateRegisterForm()) {
            alert('Cadastro realizado com sucesso! (Apenas front-end)');
            registerForm.reset();
            // Aqui seria a chamada a uma API para enviar os dados
        }
    });

    // Evento de envio do formulário de Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Neste exemplo, a validação é básica, mas a estrutura está pronta
        const email = document.getElementById('login-email');
        const password = document.getElementById('login-password');
        
        if (email.value && password.value) {
             alert('Login efetuado com sucesso! (Apenas front-end)');
             loginForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});