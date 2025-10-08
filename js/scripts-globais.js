// Navbar do solicitante
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-solicitante");

  // Carrega a navbar do solicitante
  fetch("../components/navbar-solicitante.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erro HTTP: " + response.status);
      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Quando a navbar está no DOM, ativa os eventos
      setupUserDropdowns();
      setupLogout();
    })
    .catch((error) => console.error("Erro ao carregar navbar:", error));
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

      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    });
  });

  // Fecha dropdown se clicar fora
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".user-menu")) {
      closeAllDropdowns();
    }
  });
}

// Botão de logout
function setupLogout() {
  const logoutBtn = document.querySelector(".logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/index.html"; // Redireciona para a página de login
    });
  }
}


// Navbar do administrador
document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-admin");

  // Carrega a navbar do administrador
  fetch("../components/navbar-admin.html")
    .then((response) => {
      if (!response.ok) throw new Error("Erro HTTP: " + response.status);
      return response.text();
    })
    .then((data) => {
      navbarContainer.innerHTML = data;

      // Quando a navbar está no DOM, ativa os eventos
      setupUserDropdowns();
      setupLogout();
    })
    .catch((error) => console.error("Erro ao carregar navbar:", error));
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

      menu.style.display =
        menu.style.display === "block" ? "none" : "block";
    });
  });

  // Fecha dropdown se clicar fora
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".user-menu")) {
      closeAllDropdowns();
    }
  });
}

// Botão de logout
function setupLogout() {
  const logoutBtn = document.querySelector(".logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/index.html"; // Redireciona para a página de login
    });
  }
}

