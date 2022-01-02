export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
/* Poderia simplificar este código usando a palavra chave 'readonly', que permite definir o valor
na inicialização ou apenas no construtor, deixando somente a propriedade get volume. */ 
