import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    protected template(model: Negociacoes): string {

        return `
            <table class = "table table-hover table-bordered">
                <thead>
                    <tr> 
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>

                    ${model.lista().map(negociacao => {

                        return `
                         <tr>
                             <td>${this.formatacaoDeData(negociacao.data)}</td>
                             <td>${negociacao.quantidade}</td>
                             <td>${negociacao.valor}</td> 
                         </tr>
                        `;
                    }).join('')}

                </tbody>
            </table> 
        `;
        
    }
    
    private formatacaoDeData(data: Date) :string {

        return new Intl.DateTimeFormat()
            .format(data);

    }

}