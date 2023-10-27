import { catalogo } from "./utilidades";

function abrirCarrinho () {

    document.getElementById("carrinho").classList.add("right-[0]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

   
function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0]");
    document.getElementById("carrinho").classList.add("right-[-360px]");

}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho (idProduto){
    const produto = catalogo.find((p) => p.id === idProduto);
    const conteinerProdutosCarrinho = 
    document.getElementById("produto-carrinho");
    const cartaoProdutoCarrinho =            `<article class="flex  bg-slate-100 rounded-lg p-2 relative ">

    <button id="fechar-carrinho" class="absolute top-1 right-2" ><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800" ></i></button>
    <img src="./${produto.Imagem}" alt="Maquina de corte Magic clip adicionado: ${produto.nome} " class="h-20 rounded-lg ">
    
    
<div class="mx-1">    
<p class="text-slate-900 text-sm" > ${produto.nome}</p>
    <p class="text-slate-400 text-xs">Modelo: Magic Clip cordless</p>
        <p class="text-green-500 ">$${produto.preco}</p>
</div>

</article>`;
conteinerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}