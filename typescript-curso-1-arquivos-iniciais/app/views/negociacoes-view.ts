import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

    private elemento: HTMLElement;

    constructor (seletor: string) {

        this.elemento = <HTMLElement>document.querySelector(seletor);
         
    }

    template(model: Negociacoes): string {

        return `
            <table class = "table table-hover table-bordered">
                <thead>
                    <tr> 
                        <th>DATE</th>
                        <th>THE AMOUNT</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>

                    ${model.lista().map(negociacao => {

                        return `
                         <tr>
                             <td>!!!</td>
                             <td>${negociacao.quantidade}</td>
                             <td>${negociacao.valor}</td> 
                         </tr>
                        `;
                    }).join('')}

                </tbody>
            </table> 
        `;

    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(this.template);
        this.elemento.innerHTML = template;

    };

}