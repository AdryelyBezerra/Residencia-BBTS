// Pesquisa na tela de vagas solicitadas
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector('.svagaAdm input[type="search"]');
  const searchButton = document.querySelector(".svagaAdm .search button");
  const container = document.querySelector(".analise-container");
  const vagas = container.querySelectorAll(".analise-box");

  // Cria e adiciona a mensagem de "nenhuma vaga encontrada"
  const mensagem = document.createElement("p");
  mensagem.classList.add("mensagem-nenhuma-vaga");
  mensagem.textContent = "Nenhuma vaga encontrada :(";
  mensagem.style.display = "none";
  mensagem.style.fontStyle = "italic";
  mensagem.style.color = "black";
  mensagem.style.marginTop = "20px";
  container.appendChild(mensagem);

  function realizarBusca(termo) {
    const termoLimpo = termo.trim().toLowerCase();
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

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    realizarBusca(searchInput.value);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      realizarBusca(searchInput.value);
    }
  });

  searchInput.addEventListener("input", function () {
    realizarBusca(searchInput.value);
  });
});

// ============== INTERAÇÃO COM A BOX DA VAGA SOLICITADA ==============
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".abre-desc");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      boxes.forEach((other) => {
        if (other !== box) other.classList.remove("ativo");
      });
      box.classList.toggle("ativo");
    });
  });
});


