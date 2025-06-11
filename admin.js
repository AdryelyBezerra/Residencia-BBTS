//Pesquisa Tela Inicial Administrador
document.addEventListener('DOMContentLoaded', function () {
  const searchInputs = document.querySelectorAll('input[type="search"]');
  const searchButtons = document.querySelectorAll('.search button');
  const contentContainers = document.querySelectorAll('.content');

  // Adiciona uma mensagem "nenhuma vaga encontrada" em cada bloco .content
  contentContainers.forEach(container => {
    const mensagem = document.createElement('p');
    mensagem.classList.add('mensagem-nenhuma-vaga');
    mensagem.textContent = 'Nenhuma vaga encontrada :(';
    mensagem.style.display = 'none';
    mensagem.style.fontStyle = 'italic';
    mensagem.style.color = '#fff';
    mensagem.style.marginTop = '20px';
    container.appendChild(mensagem);
  });

  function realizarBusca(termo, containerIndex = 0) {
    const termoLimpo = termo.trim().toLowerCase();
    const container = contentContainers[containerIndex];
    const vagas = container.querySelectorAll('.vaga');
    const mensagem = container.querySelector('.mensagem-nenhuma-vaga');
    let encontrouAlguma = false;

    vagas.forEach(vaga => {
      const texto = vaga.innerText.toLowerCase();
      if (termoLimpo === '' || texto.includes(termoLimpo)) {
        vaga.style.display = 'block';
        encontrouAlguma = true;
      } else {
        vaga.style.display = 'none';
      }
    });

    mensagem.style.display = encontrouAlguma ? 'none' : 'block';
  }

  searchButtons.forEach((btn, i) => {
    btn.addEventListener('click', function (event) {
      event.preventDefault();
      const termo = searchInputs[i].value;
      realizarBusca(termo, i);
    });
  });

  searchInputs.forEach((input, i) => {
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        realizarBusca(input.value, i);
      }
    });

    input.addEventListener('input', function () {
      realizarBusca(input.value, i);
    });
  });
});

// Funcionalidades tela de vagas solicitadas
document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.svagaAdm input[type="search"]');
  const searchButton = document.querySelector('.svagaAdm .search button');
  const container = document.querySelector('.analise-container');
  const vagas = container.querySelectorAll('.analise-box');

  // Cria e adiciona a mensagem de "nenhuma vaga encontrada"
  const mensagem = document.createElement('p');
  mensagem.classList.add('mensagem-nenhuma-vaga');
  mensagem.textContent = 'Nenhuma vaga encontrada :(';
  mensagem.style.display = 'none';
  mensagem.style.fontStyle = 'italic';
  mensagem.style.color = 'black';
  mensagem.style.marginTop = '20px';
  container.appendChild(mensagem);

  function realizarBusca(termo) {
    const termoLimpo = termo.trim().toLowerCase();
    let encontrouAlguma = false;

    vagas.forEach(vaga => {
      const texto = vaga.innerText.toLowerCase();
      if (termoLimpo === '' || texto.includes(termoLimpo)) {
        vaga.style.display = 'block';
        encontrouAlguma = true;
      } else {
        vaga.style.display = 'none';
      }
    });

    mensagem.style.display = encontrouAlguma ? 'none' : 'block';
  }

  searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    realizarBusca(searchInput.value);
  });

  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      realizarBusca(searchInput.value);
    }
  });

  searchInput.addEventListener('input', function () {
    realizarBusca(searchInput.value);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleção das telas
    const telaUsuario = document.querySelector('.tela-admin');
    const telaDescricao = document.querySelector('.descricao');
    const telaResultados = document.querySelector('.resultadoadm');
    const telaVagaSolicitada = document.querySelector('.svagaAdm');
    const telaGeral = document.querySelector('.geral'); 

    const vagas = document.querySelectorAll('.vaga');
    const btnResultados = document.getElementById('resultados');
 
    const linksHome = document.querySelectorAll('a[href="#home"]');
    const linksVaga = document.querySelectorAll('a[href="#vaga"]');
    const linksGeral = document.querySelectorAll('a[href="#geral"]');

    function esconderTelas() {
        const telas = [telaUsuario, telaDescricao, telaResultados, telaVagaSolicitada, telaGeral];
        telas.forEach(tela => {
            if (tela) tela.style.display = 'none';
        });
    }

    esconderTelas();
    if (telaUsuario) telaUsuario.style.display = 'block';

    if (vagas) {
        vagas.forEach(vaga => {
            vaga.addEventListener('click', () => {
                esconderTelas();
                if (telaDescricao) telaDescricao.style.display = 'block';
            });
        });
    }

    if (btnResultados) {
        btnResultados.addEventListener('click', () => {
            esconderTelas();
            if (telaResultados) telaResultados.style.display = 'block';
        });
    }

    if (linksVaga) {
        linksVaga.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaVagaSolicitada) telaVagaSolicitada.style.display = 'block';
            });
        });
    }

    if (linksGeral) {
        linksGeral.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaGeral) telaGeral.style.display = 'block';
            });
        });
    }

    if (linksHome) {
        linksHome.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                esconderTelas();
                if (telaUsuario) telaUsuario.style.display = 'block';
            });
        });
    }
});

//==============RESULTADOS GRAFICOS================= 
// Gráfico 1
 new Chart(document.getElementById('chart1'), {
    type: 'bar',
    data: {
      labels: ['BERT', 'AWS', 'Scrapy'],
      datasets: [{
        label: '',
        data: [15, 53, 22],
        backgroundColor: ['#007bff', '#00c0ef', '#36a2eb']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 2
  new Chart(document.getElementById('chart2'), {
    type: 'bar',
    data: {
      labels: ['Python', 'Selenium', 'Java', 'SQL', 'NoSQL', 'Linux'],
      datasets: [{
        label: '',
        data: [84, 13, 81, 89, 83, 72],
        backgroundColor: ['#fce303', '#f7c106', '#f9a825', '#ff9800', '#ff5722', '#ff7043']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 3
  new Chart(document.getElementById('chart3'), {
    type: 'bar',
    data: {
      labels: ['Criatividade', 'Analítico', 'Comunicação'],
      datasets: [{
          label: '',
        data: [37, 74, 68],
        backgroundColor: ['#66bb6a', '#43a047', '#a5d6a7']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });

  // Gráfico 4
  new Chart(document.getElementById('chart4'), {
    type: 'bar',
    data: {
      labels: ['Júnior', 'Pleno', 'Sênior'],
      datasets: [{
        label: '',
        data: [28, 30, 32],
        backgroundColor: ['#ba68c8', '#7e57c2', '#5e35b1']
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
      plugins: {
            legend: {
                display: false // Desabilita a legenda
            }
        }
    }
  });
//USER MENU
document.addEventListener('DOMContentLoaded', function() {
  setupUserDropdowns();
  
  setupMutationObserver();
});

function setupUserDropdowns() {
  function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }

  document.querySelectorAll('.user-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
      e.stopPropagation();
      const menu = this.closest('.user-menu').querySelector('.dropdown-menu');
      
      if (menu.style.display !== 'block') {
        closeAllDropdowns();
      }
      
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu')) {
      closeAllDropdowns();
    }
  });
}

function setupMutationObserver() {
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        setupUserDropdowns(); 
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// ============== VAGAS SOLICITADAS ==============

    // ============== PESQUISA NAS VAGAS SOLICITADAS ==============
 document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const vagas = document.querySelectorAll('.analise-box');

    function realizarBusca() {
        const termo = searchInput.value.toLowerCase().trim();

        vagas.forEach(card => {
            const titulo = card.textContent.toLowerCase();

            if (titulo.includes(termo)) {
                card.style.display = 'flex'; // ou 'block', depende do layout
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', function () {
        realizarBusca();
    });

    // Pressionar Enter
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            realizarBusca();
        }
    });
});

// ============== INTERAÇÃO COM A BOX DA VAGA SOLICITADA ==============
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todas as caixas individuais (analise-box)
  const analiseBoxes = document.querySelectorAll(".analise-box");

  analiseBoxes.forEach((box) => {
    box.addEventListener("click", function (e) {
      // Impede que o clique nos botões, input ou label feche a caixa
      if (
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "INPUT" ||
        e.target.tagName === "LABEL"
      ) {
        return;
      }

      analiseBoxes.forEach(otherBox => {
        if (otherBox !== box && otherBox.classList.contains("ativo")) {
          otherBox.classList.remove("ativo");
        }
      });

      this.classList.toggle("ativo");
    });
  });
});
