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

//---------------------- PRODUTO 01 LATINHA ---------------------------//


let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = { quantidade: 1, valor: 5.5 };

// Redefinição de elementos DOM
quantidadeSubtotal.innerText = subtotalInfo.quantidade;
valorSubtotal.innerText = subtotalInfo.valor;

// Novas variáveis
let quantidadeProduto01 = document.getElementById("quantidade-produto-01");
let botaoAdicionarUm = document.getElementById("btn-adicionar-produto-01");
let botaoSubtrairUm = document.getElementById("btn-subtrair-produto-01");
let quantidadeProdutoMaximo = 10;

function aplicarMudancasDom() {
  let texto;
  if (Number(quantidadeProduto01.value) < 2) {
    texto = " item";
  } else {
    texto = " itens";
  }

  quantidadeSubtotal.innerText = Number(quantidadeProduto01.value) + texto;
  let novoSubtotal =
    Number(subtotalInfo.valor) * Number(quantidadeProduto01.value);
  valorSubtotal.innerText = novoSubtotal.toFixed(2);
}
// Funções
function adicionarUm() {
  if (Number(quantidadeProduto01.value) < quantidadeProdutoMaximo) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  }
  aplicarMudancasDom();
}

function subtrairUm() {
  if (Number(quantidadeProduto01.value) > 0) {
    quantidadeProduto01.value = Number(quantidadeProduto01.value) - 1;
  }
  aplicarMudancasDom();
}

// Adição de eventos
botaoAdicionarUm.addEventListener("click", adicionarUm);
botaoSubtrairUm.addEventListener("click", subtrairUm);

let vetor = [
  { quantidade: 1, valor: 5.5, nome: "latinhas" },
  { quantidade: 1, valor: 10.0, nome: "papelão" },
  { quantidade: 1, valor: 7.5, nome: "plastico" },
  { quantidade: 1, valor: 10.5, nome: "PET" },
];

//ADICIONANDO ELEMENTOS SIMPLES:
//Criando elemento HTML
let h3 = document.createElement("h3");

//Capturando elemento pai via DOM
let body = document.querySelector("body");

//Adiciona elemento body titulo e paragrafo:
body.appendChild(h3);

// for (let i = 0; i < vetor.length; i++) {
//   const div = document.createElement("div");
//   div.classList.add("item-carrinho");

//   const divSubtotal = document.createElement("div");
//   divSubtotal.classList.add("subtotal");

//   div.innerHTML = `
//   <div class="capa"></div>
//   <h3>${vetor[i].nome}</h3>
//   <p>${vetor[i].valor}</p>
//   <button id="btn-subtrair-produto-01">-</button>
//   <input id="quantidade-produto-01" type="number" value="1" min="0" />
//   <button id="btn-adicionar-produto-01">+</button>

  
//   `;

//   divSubtotal.innerHTML = `
 
//   <p>${vetor[i].valor}</p>
//   <p>${vetor[i].nome}</p>

//   `;

//   body.appendChild(div);
//   body.appendChild(divSubtotal);
// }

// -------------------------------- PRODUTO 02 PAPELÃO -------------------- //

let quantidadeSubtotal2 = document.getElementById("quantidade-subtotal2");
let valorSubtotal2 = document.getElementById("valor-subtotal2");

let subtotalInfo2 = { quantidade: 1, valor: 0.73 };

// Redefinição de elementos DOM
quantidadeSubtotal2.innerText = subtotalInfo2.quantidade;
valorSubtotal2.innerText = subtotalInfo2.valor;

// Novas variáveis
let quantidadeProduto02 = document.getElementById("quantidade-produto-02");
let botaoAdicionarUm2 = document.getElementById("btn-adicionar-produto-02");
let botaoSubtrairUm2 = document.getElementById("btn-subtrair-produto-02");

let quantidadeProdutoMaximo2 = 10;

function aplicarMudancasDom2() {
  let texto;
  if (Number(quantidadeProduto02.value) < 2) {
    texto = " item";
  } else {
    texto = " itens";
  }
  
  
  quantidadeSubtotal2.innerText = Number(quantidadeProduto02.value) + texto;
  let novoSubtotal2 =
  Number(subtotalInfo2.valor) * Number(quantidadeProduto02.value);
  valorSubtotal2.innerText = novoSubtotal2.toFixed(2);
}
// Funções
function adicionarUm2() {
  if (Number(quantidadeProduto02.value) < quantidadeProdutoMaximo2) {
    quantidadeProduto02.value = Number(quantidadeProduto02.value) + 1;
  }
  aplicarMudancasDom2();
}

function subtrairUm2() {
  if (Number(quantidadeProduto02.value) > 0) {
    quantidadeProduto02.value = Number(quantidadeProduto02.value) - 1;
  }
  aplicarMudancasDom2();
}

// Adição de eventos
botaoAdicionarUm2.addEventListener("click", adicionarUm2);
botaoSubtrairUm2.addEventListener("click", subtrairUm2);


// let vetor = [
//   { quantidade: 1, valor: 5.5, nome: "latinhas" },
//   { quantidade: 1, valor: 10.0, nome: "papelão" },
//   { quantidade: 1, valor: 7.5, nome: "plastico" },
//   { quantidade: 1, valor: 10.5, nome: "PET" },
// ];

// //ADICIONANDO ELEMENTOS SIMPLES:
// //Criando elemento HTML
// let h3 = document.createElement("h3");

// //Capturando elemento pai via DOM
// let body = document.querySelector("body");

// //Adiciona elemento body titulo e paragrafo:
// body.appendChild(h3);
