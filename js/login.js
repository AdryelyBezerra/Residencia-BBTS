//Direcionamento das interfaces
document.addEventListener("DOMContentLoaded", function () {
  const tipoUsuarioSelect = document.getElementById("tipo-usuario");
  const botaoEntrar = document.getElementById("botao-entrar");
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.getElementById("password-input");

  // Usuários de exemplo (substituir por autenticação real)
  const usuarios = [
    { usuario: "admin", senha: "123", tipo: "administracao" },
    { usuario: "soli", senha: "123", tipo: "solicitante" },
  ];

  if (tipoUsuarioSelect && botaoEntrar) {
    botaoEntrar.addEventListener("click", function (event) {
      event.preventDefault();

      const valorSelecionado = tipoUsuarioSelect.value;
      const username = usernameInput.value;
      const password = passwordInput.value;

      // Verifica se usuário existe e senha confere
      const usuarioValido = usuarios.find(
        (u) =>
          u.usuario === username &&
          u.senha === password &&
          u.tipo === valorSelecionado
      );

      if (!usuarioValido) {
        alert("Usuário ou senha inválidos!");
        return;
      }

      // Salva o tipo de usuário no localStorage
      localStorage.setItem("tipoUsuario", valorSelecionado);

      if (valorSelecionado === "solicitante") {
        window.location.href = "solicitante/solicitante-inicio.html";
      } else if (valorSelecionado === "administracao") {
        window.location.href = "admin/admin-inicio.html";
      } else {
        alert("Por favor, selecione o tipo de usuário.");
      }
    });
  } else {
    console.error(
      'Elementos HTML com IDs "tipo-usuario" ou "botao-entrar" não encontrados.'
    );
  }
});

// Visibilidade da senha
const passwordInput = document.getElementById("password-input");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.classList.toggle("visible");
});
