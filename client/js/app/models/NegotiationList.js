class NegotiationList {

    constructor() {
        
        this._negotiations = []
    }

    add(negotiation) {

        this._negotiations.push(negotiation);
    }

    get negotiations() {
        return this._negotiations;
    }
}

