class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile_menu",
    ".nav_list",
    ".nav_list li"
  );
  mobileNavbar.init();
  
  // ----------------------- VALIDAÇÃO DE FORMULÁRIO --------------------------- //
  
  // ------------- FUNÇÕES GERAIS ------------------//
  
  function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.remove("correct");
    input.classList.add("error");
  }
  
  //Função para mostrar o campo de POPUP:
  function mostrar_popup(input, label) {
    //Mostrar popup de campo
    input.addEventListener("focus", function () {
      label.classList.add("required-popup");
    });
  
    //Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  // --------- VALIDAÇÃO USERNAME -----------------//
  //Capturando elementos na DOM:
  let usernameInput = document.getElementById("username");
  let usernameLabel = document.querySelector('[for="username"]');
  let usernameHelper = document.getElementById("username-helper");
  
  mostrar_popup(usernameInput, usernameLabel);
  
  //Validar valor do input com numero minimo de 3 caracteres:
  usernameInput.addEventListener("blur", (e) => {
    let valor = e.target.value;
  
    if (valor == "") {
      //valor Incorreto CAMPO VAZIO
      estilizarInputIncorreto(usernameInput, usernameHelper);
      usernameHelper.innerText = "Digite o nome, campo está vazio";
      inputsCorretos.confirmaSenha = false;
    } else if (valor.length < 3) {
      //Valor incorreto
      estilizarInputIncorreto(usernameInput, usernameHelper);
      usernameHelper.innerText = "Usuário precisa ter 3 ou + caracteres";
      inputsCorretos.username = false;
    } else {
      //valor correto
      estilizarInputCorreto(usernameInput, usernameHelper);
      usernameHelper.innerText = "";
      inputsCorretos.username = true;
    }
  });
    
  // ------------ VALIDAÇÃO EMAIL -----------------//
  
  let emailInput = document.getElementById("email");
  let emailLabel = document.querySelector('label[for="email"]');
  let emailHelper = document.getElementById("email-helper");
  
  //Mostrar popup de campo
  mostrar_popup(emailInput, emailLabel);
  
  //Validando presença arroba @:
  //Função INCLUDES verifica se tem paramentro passado e retorna TRUE ou FALSE
  emailInput.addEventListener("blur", (e) => {
    let valor = e.target.value;
  
    if (valor == "") {
      //valor Incorreto CAMPO VAZIO
      estilizarInputIncorreto(emailInput, emailHelper);
      emailHelper.innerText = "Digite o email, campo está vazio";
      inputsCorretos.confirmaSenha = false;
    } else if (valor.includes("@") && valor.includes(".com")) {
      //Valor correto
      estilizarInputCorreto(emailInput, emailHelper);
      emailHelper.innerText = "";
      inputsCorretos.email = true;
    } else {
      //Valor incorreto
      estilizarInputIncorreto(emailInput, emailHelper);
      emailHelper.innerText = "Email precisa ter @ e .com";
      inputsCorretos.email = false;
    }
  });
  
  // --------------- VALIDAÇÃO SENHA ---------------//
  
  let senhaInput = document.getElementById("senha");
  let senhaLabel = document.querySelector('label[for="senha"]');
  let senhaHelper = document.getElementById("senha-helper");
  
  //Mostrar popup de campo
  mostrar_popup(senhaInput, senhaLabel);
  
  senhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value;
    if (valor == "") {
      //valor Incorreto VAZIO
      estilizarInputIncorreto(senhaInput, senhaHelper);
      senhaHelper.innerText = "Digite a senha, campo está vazio";
      inputsCorretos.senha = false;
    } else {
      //Valor Correto
      estilizarInputCorreto(senhaInput, senhaHelper);
      senhaHelper.innerText = "";
      inputsCorretos.senha = true;
    }
  });
  
  // ------- VALIDAÇÃO CONFIRMAR-SENHA --------------//
  
  let confirmar_senhaInput = document.getElementById("confirmar-senha");
  let confirmar_senhaLabel = document.querySelector(
    'label[for="confirmar-senha"]'
  );
  let confirmar_senhaHelper = document.getElementById("confirmar-senha-helper");
  
  //Mostrar popup de campo
  mostrar_popup(confirmar_senhaInput, confirmar_senhaLabel);
  
  confirmar_senhaInput.addEventListener("blur", (e) => {
    let valorConfirmaSenha = e.target.value;
    if (valorConfirmaSenha == "") {
      //valor Incorreto CAMPO VAZIO
      estilizarInputIncorreto(confirmar_senhaInput, confirmar_senhaHelper);
      confirmar_senhaHelper.innerText = "Confirme a senha, campo está vazio";
      inputsCorretos.confirmaSenha = false;
    } else if (valorConfirmaSenha == senhaInput.value) {
      //valor correto
      estilizarInputCorreto(confirmar_senhaInput, confirmar_senhaHelper);
      confirmar_senhaHelper.innerText = "";
      inputsCorretos.confirmaSenha = true;
    } else {
      //Valor INCORRETO SENHA DIFERENTE
      console.log("valor INCORRETO");
      estilizarInputIncorreto(confirmar_senhaInput, confirmar_senhaHelper);
      confirmar_senhaHelper.innerText = "Senha está diferente";
      inputsCorretos.confirmaSenha = false;
    }
  });
  
  // ------------- EVITAR ENVIO DO FORMULARIO ---------------//
  
  //capturar o botão de enviar
  let btnSubmit = document.querySelector('button[type="submit"]');
  //Objeto para armazenar os inputs corretos.
  //Valor inicial é FALSE pois ao carregar o formulario, não queremos armazenar campos vazios
  let inputsCorretos = {
    username: false,
    email: false,
    senha: false,
    confirmaSenha: false,
  };
  
  //Quando campo USERNAME estiver FALSE, botao enviar não funciona
  //a função preventDefault() evita o comportamento padrão do evento
  btnSubmit.addEventListener("click", (e) => {
    if (
      inputsCorretos.username == false ||
      inputsCorretos.email == false ||
      inputsCorretos.senha == false ||
      inputsCorretos.confirmaSenha == false
    ) {
      alert("Dados não enviados, verifique os campos!");
      e.preventDefault();
    } else {
      alert("Dados enviados com sucesso");
    }
  });
  