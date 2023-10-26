import { catalogo } from "./utilidades";
export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){
    
    const cartaoProduto = ` <div class="border-solid border-2 border-sky-500 w-48 m-2" id="card-produto-${produtoCatalogo.id}">
    <img src="${produtoCatalogo.Imagem}" alt="magic-clip" style="height: 200px;">

    <P class="marca">${produtoCatalogo.marca}</P>
    <P>${produtoCatalogo.nome}</P>
    <p>$${produtoCatalogo.preco}</p>
    <button class="bg-slate-950 text-slate-200"
    ><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;


    document.getElementById("conteiner-produto").innerHTML += cartaoProduto;



    }


};