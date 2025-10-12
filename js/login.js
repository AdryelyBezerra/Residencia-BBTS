document.addEventListener("DOMContentLoaded", function () {
  const tipoUsuarioSelect = document.getElementById("tipo-usuario");
  const botaoEntrar = document.getElementById("botao-entrar");
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.getElementById("password-input");
  const togglePassword = document.querySelector(".toggle-password");

  // Usuários de exemplo (autenticação simulada)
  const usuarios = [
    { usuario: "admin", senha: "123", tipo: "administrador" },
    { usuario: "soli", senha: "123", tipo: "solicitante" },
  ];

  botaoEntrar.addEventListener("click", function (event) {
    event.preventDefault();

    const valorSelecionado = tipoUsuarioSelect.value;
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!valorSelecionado) {
      alert("Por favor, selecione o tipo de usuário.");
      return;
    }

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

    // Armazena tipo de usuário
    localStorage.setItem("tipoUsuario", valorSelecionado);

    if (valorSelecionado === "solicitante") {
      window.location.href = "solicitante/solicitante-inicio.html";
    } else if (valorSelecionado === "administrador") {
      window.location.href = "admin/admin-inicio.html";
    }
  });

  // Mostrar/ocultar senha
  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("visible");
    });
  }
});
