let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
 
let subtotalInfo = {quantidade: 1,valor: 5.50}


 
// Redefinição de elementos DOM
quantidadeSubtotal.innerText = subtotalInfo.quantidade;
valorSubtotal.innerText = subtotalInfo.valor;
 
// Novas variáveis PRODUTO 01
let quantidadeProduto = document.getElementById("quantidade-produto-01");
let botaoAdicionarUm = document.getElementById("btn-adicionar-produto-01");
let botaoSubtrairUm = document.getElementById("btn-subtrair-produto-01");
let quantidadeProdutoMaximo = 100;



function aplicarMudancasDom(){

  let texto;
  if(Number(quantidadeProduto.value) < 2){
    texto = " item";
  }else{
    texto = " itens";
  }


  quantidadeSubtotal.innerText = Number(quantidadeProduto.value) + texto;
  let novoSubtotal = Number(subtotalInfo.valor) * Number(quantidadeProduto.value);
  valorSubtotal.innerText = novoSubtotal.toFixed(2);

}
// Funções
function adicionarUm() {
  if (Number(quantidadeProduto.value) < quantidadeProdutoMaximo) {
    quantidadeProduto.value = Number(quantidadeProduto.value) + 1;
  }
  aplicarMudancasDom();
}
 
function subtrairUm() {
  if (Number(quantidadeProduto.value) > 0) {
    quantidadeProduto.value = Number(quantidadeProduto.value) - 1;
  }
  aplicarMudancasDom();
}

 
// Adição de eventos
botaoAdicionarUm.addEventListener("click", adicionarUm);
botaoSubtrairUm.addEventListener("click", subtrairUm);