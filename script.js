//Direcionamento das interfaces
document.addEventListener("DOMContentLoaded", function () {
  const tipoUsuarioSelect = document.getElementById("tipo-usuario");
  const botaoEntrar = document.getElementById("botao-entrar");
  const telaLogin = document.getElementById("login");
  const telaUsuario = document.getElementById("usuario");

  if (tipoUsuarioSelect && botaoEntrar) {
    botaoEntrar.addEventListener("click", function (event) {
      event.preventDefault();

      const valorSelecionado = tipoUsuarioSelect.value;
      if (valorSelecionado === "solicitante") {
        if (telaLogin && telaUsuario) {
          telaLogin.style.display = "none";
          telaUsuario.style.display = "block";
        }
      } else if (valorSelecionado === "administracao") {
        window.location.href = "admin.html";
      } else {
        console.warn("Tipo de usuário não selecionado ou innválido.");
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
//Pesquisa Tela Inicial Gestor
document.addEventListener("DOMContentLoaded", function () {
  const searchInputs = document.querySelectorAll('input[type="search"]');
  const searchButtons = document.querySelectorAll(".search button");
  const contentContainers = document.querySelectorAll(".content");

  // Adiciona uma mensagem "nenhuma vaga encontrada" em cada bloco .content
  contentContainers.forEach((container) => {
    const mensagem = document.createElement("p");
    mensagem.classList.add("mensagem-nenhuma-vaga");
    mensagem.textContent = "Nenhuma vaga encontrada :(";
    mensagem.style.display = "none";
    mensagem.style.fontStyle = "italic";
    mensagem.style.color = "#fff";
    mensagem.style.marginTop = "20px";
    container.appendChild(mensagem);
  });

  function realizarBusca(termo, containerIndex = 0) {
    const termoLimpo = termo.trim().toLowerCase();
    const container = contentContainers[containerIndex];
    const vagas = container.querySelectorAll(".vaga");
    const mensagem = container.querySelector(".mensagem-nenhuma-vaga");
    let encontrouAlguma = false;

    vagas.forEach((vaga) => {
      const texto = vaga.innerText.toLowerCase();
      if (termoLimpo === "" || texto.includes(termoLimpo)) {
        vaga.style.display = "block";
        encontrouAlguma = true;
      } else {
        vaga.style.display = "none";
      }
    });

    mensagem.style.display = encontrouAlguma ? "none" : "block";
  }

  searchButtons.forEach((btn, i) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const termo = searchInputs[i].value;
      realizarBusca(termo, i);
    });
  });

  searchInputs.forEach((input, i) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        realizarBusca(input.value, i);
      }
    });

    input.addEventListener("input", function () {
      realizarBusca(input.value, i);
    });
  });
});

// Clique em vaga para abrir a descrição
document.addEventListener("DOMContentLoaded", function () {
  const vagas = document.querySelectorAll(".vaga");

  vagas.forEach((vaga) => {
    vaga.addEventListener("click", () => {
      const descricao = vaga.nextElementSibling;
      const resultado = descricao?.nextElementSibling;

      if (descricao && descricao.classList.contains("box-descricao")) {
        const visivel = descricao.style.display === "block";

        descricao.style.display = visivel ? "none" : "block";
        if (resultado && resultado.classList.contains("resultado")) {
          resultado.style.display = visivel ? "none" : "block";
        }

        // Alterna a visibilidade
        descricao.style.display = visivel ? "none" : "block";

        // Alterna a classe 'aberta' na vaga
        vaga.classList.toggle("aberta", !visivel);
      }
    });
  });
});
// Vaga botão
document.addEventListener("DOMContentLoaded", function () {
  const telaUsuario = document.querySelector(".tela-usuario");
  const telaResultados = document.querySelector(".resultadogs");
  const telaSolicitarVaga = document.querySelector(".svagaGestor");

  const vagas = document.querySelectorAll(".vaga");
  const btnResultados = document.getElementById("resultados");

  const linksHome = document.querySelectorAll('a[href="#home"]');
  const linksVaga = document.querySelectorAll('a[href="#vaga"]');

  function esconderTelas() {
    telaUsuario.style.display = "none";
    telaResultados.style.display = "none";
    telaSolicitarVaga.style.display = "none";
  }

  // Inicial: mostrar apenas telaUsuario
  esconderTelas();
  telaUsuario.style.display = "block";

  // Clique em Resultados
  if (btnResultados) {
    btnResultados.addEventListener("click", () => {
      esconderTelas();
      telaResultados.style.display = "block";
    });
  }

  // Clique em "Solicitar Vaga"
  linksVaga.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      esconderTelas();
      telaSolicitarVaga.style.display = "block";
    });
  });

  // Clique em "Início"
  linksHome.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      esconderTelas();
      telaUsuario.style.display = "block";
    });
  });
});

//GRAFICOS
// Gráfico 1
new Chart(document.getElementById("chart1"), {
  type: "bar",
  data: {
    labels: ["BERT", "AWS", "Scrapy"],
    datasets: [
      {
        label: "",
        data: [15, 53, 22],
        backgroundColor: ["#007bff", "#00c0ef", "#36a2eb"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 2
new Chart(document.getElementById("chart2"), {
  type: "bar",
  data: {
    labels: ["Python", "Selenium", "Java", "SQL", "NoSQL", "Linux"],
    datasets: [
      {
        label: "",
        data: [84, 13, 81, 89, 83, 72],
        backgroundColor: [
          "#fce303",
          "#f7c106",
          "#f9a825",
          "#ff9800",
          "#ff5722",
          "#ff7043",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 3
new Chart(document.getElementById("chart3"), {
  type: "bar",
  data: {
    labels: ["Criatividade", "Analítico", "Comunicação"],
    datasets: [
      {
        label: "",
        data: [37, 74, 68],
        backgroundColor: ["#66bb6a", "#43a047", "#a5d6a7"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});

// Gráfico 4
new Chart(document.getElementById("chart4"), {
  type: "bar",
  data: {
    labels: ["Júnior", "Pleno", "Sênior"],
    datasets: [
      {
        label: "",
        data: [28, 30, 32],
        backgroundColor: ["#ba68c8", "#7e57c2", "#5e35b1"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: {
        display: false, // Desabilita a legenda
      },
    },
  },
});
// RESULTADO
document.addEventListener("DOMContentLoaded", function () {
  const botaoResultados = document.getElementById("resultados");
  const telaResultado = document.querySelector(".resultadogs");

  if (botaoResultados) {
    botaoResultados.addEventListener("click", function () {
      telaDescricao.style.display = "none";
      telaResultado.style.display = "block";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container-habilidades-tecnicas");
  const addBtn = document.getElementById("add-habilidade-tecnica");

  function criarCampoHabilidade() {
    const wrapper = document.createElement("div");
    wrapper.className = "input-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "habilidades-tecnicas[]";
    input.required = true;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.title = "Remover";

    const closeIcon = document.createElement("span");
    closeIcon.className = "material-symbols-outlined";
    closeIcon.innerText = "close";

    removeBtn.appendChild(closeIcon);

    removeBtn.addEventListener("click", () => {
      wrapper.remove();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(removeBtn);
    return wrapper;
  }

  // Adicionar novo campo
  addBtn.addEventListener("click", () => {
    const novoCampo = criarCampoHabilidade();
    container.appendChild(novoCampo);
  });
});

//Adiciona campo de habilidade interpessoal ao clicar no botão de "mais"
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container-habilidades-inter");
  const addBtn = document.getElementById("add-habilidade-inter");

  function criarCampoHabilidade() {
    const wrapper = document.createElement("div");
    wrapper.className = "input-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "habilidades-inter[]";
    input.required = true;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.title = "Remover";

    const closeIcon = document.createElement("span");
    closeIcon.className = "material-symbols-outlined";
    closeIcon.innerText = "close";

    removeBtn.appendChild(closeIcon);

    removeBtn.addEventListener("click", () => {
      wrapper.remove();
    });

    wrapper.appendChild(input);
    wrapper.appendChild(removeBtn);
    return wrapper;
  }

  // Adicionar novo campo
  addBtn.addEventListener("click", () => {
    const novoCampo = criarCampoHabilidade();
    container.appendChild(novoCampo);
  });
});

//USER MENU
document.addEventListener("DOMContentLoaded", function () {
  setupUserDropdowns();

  setupMutationObserver();
});

function setupUserDropdowns() {
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.style.display = "none";
    });
  }

  document.querySelectorAll(".user-icon").forEach((icon) => {
    icon.addEventListener("click", function (e) {
      e.stopPropagation();
      const menu = this.closest(".user-menu").querySelector(".dropdown-menu");

      if (menu.style.display !== "block") {
        closeAllDropdowns();
      }

      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".user-menu")) {
      closeAllDropdowns();
    }
  });
}

function setupMutationObserver() {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes.length) {
        setupUserDropdowns();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}
