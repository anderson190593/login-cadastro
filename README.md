# 🔒 Projeto: Página de Login e Cadastro

![Preview do Formulário de Login](preview.gif)

Uma página de autenticação front-end com formulários de Login e Cadastro. Este projeto é focado 100% na **validação de formulários do lado do cliente (client-side)** com JavaScript puro, garantindo que o usuário receba feedback instantâneo antes que os dados sejam (hipoteticamente) enviados a um servidor.

---

### 🎯 Objetivo

O objetivo principal é demonstrar o domínio da **validação de formulários em JavaScript**. Isso inclui a captura de eventos de `submit`, a prevenção do comportamento padrão do navegador, a verificação de regras de negócio (ex: email válido, senhas que combinam) e o fornecimento de feedback visual imediato ao usuário, utilizando as classes de validação do Bootstrap.

---

### 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Tecnologias Web:** HTML5, CSS3
* **Framework/Biblioteca:** Bootstrap 5 (para o layout, formulários e classes de validação)
* **Ambiente:** Navegador Web

---

### 🧱 Estrutura do Código

A aplicação é contida em uma única página, com o JavaScript gerenciando qual formulário (Login ou Cadastro) é exibido.

| Arquivo/Função | Propósito Principal |
| :--- | :--- |
| `index.html` | Estrutura dos dois formulários (`#login-form`, `#register-form`) com atributos `novalidate`. |
| `css/style.css` | Estilização personalizada e animações de transição (`fadeIn`). |
| `js/main.js` | **Lógica da Aplicação:** Contém todos os *listeners* e funções de validação. |
| `main.js` » `switchForm()` | Alterna a visibilidade dos formulários usando a classe `.d-none`. |
| `main.js` » `validateRegisterForm()` | **Função Principal:** Verifica todos os campos do cadastro e retorna `true` ou `false`. |
| `Bootstrap Classes` | `.is-invalid` e `.invalid-feedback` são usadas pelo JS para mostrar erros. |

---

### 🔍 Funcionalidades

* **Alternância de Formulários:** O usuário pode alternar entre as telas de Login e Cadastro sem recarregar a página.
* **Validação de Cadastro:**
    * **Email:** Verifica se o campo contém `@` e `.`.
    * **Senha:** Exige um número mínimo de caracteres.
    * **Confirmação:** Garante que os campos "Senha" e "Confirmar Senha" são idênticos.
* **Feedback Visual Imediato:** Os campos inválidos recebem uma borda vermelha (`.is-invalid`) e exibem uma mensagem de erro, guiando o usuário.
* **Prevenção de Envio:** O formulário só é "enviado" (exibe o `alert` de sucesso) se todas as regras de validação passarem.

---

### 🧪 Como Executar

Este é um projeto de front-end estático.

1.  Clone o repositório (ou tenha a pasta do projeto em sua máquina).
2.  Abra o arquivo `index.html` no seu navegador de preferência.
3.  Tente enviar os formulários com dados inválidos para ver o feedback.

---

### 📚 Aprendizado

Este projeto foi essencial para entender como criar formulários seguros e amigáveis:

* **Manipulação de Eventos de Formulário:** Aprendi a usar `addEventListener('submit', ...)` e `e.preventDefault()` para interceptar o envio padrão do formulário e executar minha própria lógica de validação.
* **Feedback ao Usuário (UX):** Entendi a importância de fornecer feedback claro e imediato. O uso das classes `.is-invalid` do Bootstrap foi uma prática excelente para comunicar erros de forma visual.
* **Lógica de Validação:** Pratiquei a escrita de lógica condicional (`if/else`) para verificar múltiplas regras de negócio (formato de email, comprimento de senha, etc.).
* **Boas Práticas:** O uso do atributo `novalidate` no HTML foi crucial para desabilitar a validação padrão do navegador e permitir que o JavaScript assumisse controle total.

---

📄 **Licença**
Este projeto está licenciado sob a MIT License.
