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
    /* inputTotal: any; */

    constructor() {

        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
       
    } 

    public adiciona(): void {
        
        const negociacao = this.criaNegociacao(); 
        
        //aqui esta a lógica que definio a regra de negociação da semana
        if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {

            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();

        } else {

            this.mensagemView
                .update('As negociações são aceitas somente para os dias úteis');

        }
        
    }
    
    private criaNegociacao(): Negociacao {
        
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao (date, quantidade, valor);

    }

    private limparFormulario(): void{

        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus(); 
    
    }

    private atualizaView(): void {

        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação concluida com sucesso');

    }

}
