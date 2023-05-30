import store from "./store.js";
//adicionou .js
//defaoult n precisa estar entre chaves, se n for tem q usar {store3 }

const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);

atualiza(); // para ja ter um li assim que abre a pagina

function envia(evento) {
    evento.preventDefault(); //n deixa formulario ser enviado
    console.log('Formulário enviado!');
    store.estado++;
    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${store.estado}</li>`;
}