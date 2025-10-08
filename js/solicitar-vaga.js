//MECANISMO DE ABRIR E FECHAR CAMPOS

//Adiciona campo de habilidade técnica ao clicar no botão de "mais"
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
