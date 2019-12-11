class Messagem {
    
    constructor(text='') {
        this._text = text;

    }

    get text() {

        return this._text;
    }

    set text(text) {
        this._text = text;
    }
}

let message = new Message('Flavio');