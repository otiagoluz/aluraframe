class Negociacao {

    constructor(date, quantidade, valor) {

        this._date = new Date(date.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);

    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get date() {
        return new Date(this._date.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
