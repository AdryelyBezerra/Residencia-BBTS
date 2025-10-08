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
// Vaga botão (provavelmente será alterado)
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

// Direcionamento para a tela Resultado quando clicar em "Resultados"
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões "Resultados"
  const resultadosBtns = document.querySelectorAll('button#resultados');
  resultadosBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      window.location.href = "solicitante-resultado.html";
    });
  });
});
