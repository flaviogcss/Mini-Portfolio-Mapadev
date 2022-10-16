/* Objetivo - quando clicarmmos na aba temos que mostrar o conteudo
   da aba que foi clicada pelo usuario e esconder o conteudo 
   da aba anterior.

   -passo 1 - dar um jeito de pegar os elementos que representam 
   as abas no HTML.

   -passo 2 - dar um jeito de identificar o clique no 
   elemento da aba.

   -passo 3 - quando o usuario clicar, desmarcar a aba 
   selecionada.

   -passo 4 - marcar a aba clicada como selecionado.

   -passso 5 - esconder o conteudo anterior.

   -passo 6 - mostrar o conteudo da aba selecionada.
*/

//passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
   //passo 2 - dar um jeito de identificar o clique no elemento da aba
   aba.addEventListener("click", function () {

      if (aba.classList.contains("selecionado")){
         return;
      }

      selecionarAba(aba)
      mostrarInformacoesDaAba(aba)

   });
});

function selecionarAba(aba) {
   //passo 3 - quando o usuario clicar, desmarcar a aba selecionada
   const abaSelecionada = document.queryselector(".aba.selecionado"); abaSelecionada.clssList.remove("selecionado");

   //passo 4 - marcar a aba clicada como selecionado.
   aba.classList.add("selecionado");

}

function mostrarInformacaoDaAba(aba){
   //passo 5 - esconder o conteudo anterior
   const informacaoSelecionada = document.queryselector(".informacao.selecionado");informacaoSelecionada.classList.remove(selecionado);
   
   //passo 6 - mostrar o conteudo da aba selecionada
   const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

   const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba); informacaoASerMostrada.classList.add("selecionado")
}