import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView'); 
    
    constructor() {

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
       
    } 

    public adiciona(): void {

        const negociacao = Negociacao.criacaoDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value

        );
        
        /* const negociacao = this.criaNegociacao(); */ 
        if(!this.diasUteis(negociacao.data)) {
            this.mensagemView
                .update('Attention: Trading will only be accepted for working days');
            return;

        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
 
    }

    private diasUteis(data: Date) {

        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;

    }
    
    private limparFormulario(): void{

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); 
    
    }

    private atualizaView(): void {

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Trade completed successfully');

    }

}
