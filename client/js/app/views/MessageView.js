class MessageView {

    constructor(element) {
          this._element = element;
    }
  
    _template(model) {
  
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>'
    }

    update(model) {

       this._element.innerHTML = this._template(model);
    }
}



