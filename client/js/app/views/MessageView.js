class MessageView {

    constructor (element) {
        this._element = element;
    }

    _tenplate(model) {
        return `<p class="alert alert-info"> ${model.text}</p>`;

    }

    update(model) {
        this._element.innerHTML = this._tenplate(model);
    }
}