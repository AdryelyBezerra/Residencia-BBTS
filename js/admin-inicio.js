//Pesquisa Tela Inicial Administrador
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

document.addEventListener("DOMContentLoaded", function () {
  // Seleção das telas
  const telaUsuario = document.querySelector(".tela-admin");
  const telaResultados = document.querySelector(".resultadoadm");
  const telaVagaSolicitada = document.querySelector(".svagaAdm");

  const btnResultados = document.getElementById("resultados");
  const linksHome = document.querySelectorAll('a[href="#home"]');
  const linksVaga = document.querySelectorAll('a[href="#vaga"]');

  function esconderTelas() {
    if (telaUsuario) telaUsuario.style.display = "none";
    if (telaResultados) telaResultados.style.display = "none";
    if (telaVagaSolicitada) telaVagaSolicitada.style.display = "none";
  }

  // Inicial: mostrar apenas telaUsuario
  esconderTelas();
  if (telaUsuario) telaUsuario.style.display = "block";

  // Clique em Resultados
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "resultados") {
      esconderTelas();
      if (telaResultados) telaResultados.style.display = "block";
    }
  });

  // Clique em "Vagas Solicitadas"
  if (linksVaga) {
    linksVaga.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        esconderTelas();
        if (telaVagaSolicitada) telaVagaSolicitada.style.display = "block";
      });
    });
  }

  // Clique em "Início"
  if (linksHome) {
    linksHome.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        esconderTelas();
        if (telaUsuario) {
          telaUsuario.style.display = "block";
        }
      });
    });
  }
});
// Direcionamento para a tela Resultado quando clicar em "Resultados"
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões "Resultados"
  const resultadosBtns = document.querySelectorAll('button#resultados');
  resultadosBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      window.location.href = "admin-resultado.html";
    });
  });
});

