import store from "./store.js";
//adicionou .js
//defaoult n precisa estar entre chaves, se n for tem q usar {store3 }

const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);

atualiza(); // para ja ter um li assim que abre a pagina

function envia(evento) {
    evento.preventDefault(); //n deixa formulario ser enviado
    console.log('Formulário enviado!');

    const n = form.valor.value;
    store.estado.push(n);   //diz ele que todo array é pilha
    form.valor.value = "";
    form.valor.focus(); // voltaar cursor

    atualiza();
}

function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    for(let i = 0; i < store.estado.length; i++){
        const li = document.createElement('li');
        li.textContent = store.estado[i];
        ol.appendChild(li);
    }
}