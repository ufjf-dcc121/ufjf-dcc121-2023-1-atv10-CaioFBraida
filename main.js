
import {adicionar, getItens} from "./store.js";
//adicionou .js
//defaoult n precisa estar entre chaves, se n for tem q usar {store3 }

const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);

atualiza(); // para ja ter um li assim que abre a pagina

function envia(evento) {
    evento.preventDefault(); //n deixa formulario ser enviado
    console.log('Formulário enviado!');

    const n = form.valor.value;
    adicionar(n);   //diz ele que todo array é pilha
    form.valor.value = "";
    form.valor.focus(); // voltaar cursor

    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const itens = getItens();
    for(let i = 0; i < itens.length; i++){
        const li = document.createElement('li');
        li.textContent = itens[i];
        ol.appendChild(li);
    }
    itens.push("Boom!");
}