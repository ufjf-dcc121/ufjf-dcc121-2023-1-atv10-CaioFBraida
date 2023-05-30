import { estado } from "./store.js";
//adicionou .js

const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);



atualiza(); // para ja ter um li assim que abre a pagina

function envia(evento) {
    evento.preventDefault(); //n deixa formulario ser enviado
    console.log('Formulário enviado!');
    estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}