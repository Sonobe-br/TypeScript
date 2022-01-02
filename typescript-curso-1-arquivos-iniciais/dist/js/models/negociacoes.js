export class Negociacoes {
    constructor() {
        this.negociacoes = []; //atalho > : Negociacao []
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
