import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {

 
}

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


function aumentarQuantidadeDeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++;
    atualizarInformacaoQuantidade(idProduto);
}

function diminuirQuantidadeDeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]--;
    atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}



export function adicionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        aumentarQuantidadeDeProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    const produto = catalogo.find((p) => p.id === idProduto);
    const conteinerProdutosCarrinho = 
    document.getElementById("produto-carrinho");
    
    
    const elementoArticle = document.createElement('article');
   const articleClasses = [
    'flex',
     'bg-slate-100',
      'rounded-lg',
       'p-2',
        'relative',
    ];
    

    for(const articleClass of articleClasses){
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho =            `<button id="fechar-carrinho" class="absolute top-1 right-2" ><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800" ></i></button>
    <img src="./${produto.Imagem}" alt="Maquina de corte Magic clip adicionado: ${produto.nome} " class="h-20 rounded-lg ">
    
    
<div class="p-1 mx-1 flex flex-col justify-between">    
    <p class="text-slate-900 text-sm" > ${produto.nome}</p>
        <p class="text-slate-400 text-xs">Marca: ${produto.marca}</p>
            <p class="text-green-500 ">R$${produto.preco}</p>
</div>

<div class="flex text-slate-950 items-end absolute bottom-0 right-2  text-lg">
    <button id="decrementar-produto-${produto.id}">-</button>
    <p id='quantidade-${produto.id}'  class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
    <button  id="incrementar-produto-${produto.id}" class="ml-2">+</button>
</div>`;

elementoArticle.innerHTML = cartaoProdutoCarrinho;
conteinerProdutosCarrinho.appendChild (elementoArticle);

document
.getElementById(`decrementar-produto-${produto.id}`)
.addEventListener("click",() => diminuirQuantidadeDeProduto(produto.id));

document
.getElementById(`incrementar-produto-${produto.id}`)
.addEventListener("click",() => aumentarQuantidadeDeProduto(produto.id));
}