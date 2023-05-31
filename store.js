const store = { estado: [0, 1, 2, 3] };

//3 virou array com um unico valor -> 0
//1 criei uma var dentro de um objeto -> const posição de memoria é fixa do objeto , mas as referencias eu consigo mudar
//2 default -> no main n precisa de chaves - o default pode pegar direto

export function adicionar(valor) {
    store.estado.push(valor);
}

export function remover(valor) {
    store.estado.pop();
}

export function getItens() {
    return [...store.estado]; // [.. dasd] -> copia de vetor
}