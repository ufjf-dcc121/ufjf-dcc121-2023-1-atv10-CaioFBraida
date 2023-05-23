const form = document.forms.entrada; //pegando forms sem queryselectror
form.addEventListener('submit', envia);

function envia(evento) {
    evento.preventDefault(); //n deixa formulario ser enviado
    console.log('Formulário enviado!');
}