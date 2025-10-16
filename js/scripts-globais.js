document.addEventListener("DOMContentLoaded", function () {
  const navbarSolicitante = document.getElementById("navbar-solicitante");
  const navbarAdmin = document.getElementById("navbar-admin");

  if (navbarSolicitante) {
    carregarNavbar("../components/navbar-solicitante.html", navbarSolicitante);
  } else if (navbarAdmin) {
    carregarNavbar("../components/navbar-admin.html", navbarAdmin);
  }
});
// mensagem de erro 

function carregarNavbar(caminho, container) {
  fetch(caminho)
    .then((response) => {
      if (!response.ok) throw new Error("Erro HTTP: " + response.status);
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;
      setupUserDropdowns();
      setupLogout();
    })
    .catch((error) => console.error("Erro ao carregar navbar:", error));
}
//meenu
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

      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".user-menu")) {
      closeAllDropdowns();
    }
  });
}

function setupLogout() {
  const logoutBtn = document.querySelector(".logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/index.html";
    });
  }
}
