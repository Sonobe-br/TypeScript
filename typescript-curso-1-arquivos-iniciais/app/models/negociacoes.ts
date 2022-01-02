import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Array<Negociacao> = []; //atalho > : Negociacao []

    adiciona(negociacao:Negociacao) {

        this.negociacoes.push(negociacao);

    }

    lista(): ReadonlyArray<Negociacao> {       //atalho > : readonly Negociacao []

        return this.negociacoes;      

    }

}