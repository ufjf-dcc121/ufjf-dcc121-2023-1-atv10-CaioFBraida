const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);

let estado = 0;

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