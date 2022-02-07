import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
    formatacaoDeData(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
