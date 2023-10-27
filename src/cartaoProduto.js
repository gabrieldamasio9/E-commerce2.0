import { adicionarAoCarrinho } from "./menucarrinho";
import { catalogo } from "./utilidades";
export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
    
    const cartaoProduto = ` <div class=" w-48 m-2 flex flex-col p-2 shadow-xl shadow-slate-300 rounded-lg group " id="card-produto-${produtoCatalogo.id}">
    <img src="${produtoCatalogo.Imagem}" alt="magic-clip" style="height: 200px;" class="group-hover:scale-110 duration-300 my-3 rounded-lg">

    <P class="text-sm">${produtoCatalogo.marca}</P>
    <P class="text-sm">${produtoCatalogo.nome}</P>
    <p class="text-sm">$${produtoCatalogo.preco}</p>
    <button id='adiciona-${produtoCatalogo.id}' class="my-2 bg-slate-950 text-slate-200 hover:bg-slate-700"
    ><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;


    document.getElementById("conteiner-produto").innerHTML += cartaoProduto;
    


    }
    for (const produtoCatalogo of catalogo){
        document
        .getElementById(`adiciona-${produtoCatalogo.id}`)
        .addEventListener('click',() => adicionarAoCarrinho(produtoCatalogo.id));
    }

};