let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
 
let subtotalInfo = {quantidade: 1,valor: 5.50}


 
// Redefinição de elementos DOM
quantidadeSubtotal.innerText = subtotalInfo.quantidade;
valorSubtotal.innerText = subtotalInfo.valor;
 
// Novas variáveis
let quantidadeProduto01 = document.getElementById("quantidade-produto-01");
let botaoAdicionarUm = document.getElementById("btn-adicionar-produto-01");
let botaoSubtrairUm = document.getElementById("btn-subtrair-produto-01");
let quantidadeProdutoMaximo = 10;

function aplicarMudancasDom(){

  let texto;
  if(Number(quantidadeProduto01.value) < 2){
    texto = " item";
  }else{
    texto = " itens";
  }


  quantidadeSubtotal.innerText = Number(quantidadeProduto01.value) + texto;
  let novoSubtotal = Number(subtotalInfo.valor) * Number(quantidadeProduto01.value);
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








let vetor = [{quantidade: 1,valor: 5.50, nome: "latinhas"},
            {quantidade: 1,valor: 10.00, nome: "papelão"},
            {quantidade: 1,valor: 7.50, nome: "plastico"},
            {quantidade: 1,valor: 10.50, nome: "PET"}];

//ADICIONANDO ELEMENTOS SIMPLES:
//Criando elemento HTML
let h3 = document.createElement("h3");

//Capturando elemento pai via DOM
let body = document.querySelector("body");

//Adiciona elemento body titulo e paragrafo:
body.appendChild(h3);


for(let i = 0; i < vetor.length; i++){
  
  const div = document.createElement("div");
  div.classList.add("item-carrinho")
  
  const divSubtotal = document.createElement("div")
  divSubtotal.classList.add("subtotal")
  
  div.innerHTML =
  
  `
  <div class="capa"></div>
  <h3>${vetor[i].nome}</h3>
  <p>${vetor[i].valor}</p>
  <button id="btn-subtrair-produto-01">-</button>
  <input id="quantidade-produto-01" type="number" value="1" min="0" />
  <button id="btn-adicionar-produto-01">+</button>
  
  `

  divSubtotal.innerHTML =
  
  `
  <h2>Subtotal</h2> 
  <p>${vetor[i].valor}</p>

  `
  
  
  
  

  body.appendChild(div)
  body.appendChild(divSubtotal)
}