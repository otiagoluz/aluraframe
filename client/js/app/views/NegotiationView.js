class NegotiationView {

    constructor(element) {
        this._element = element;
    }


    _template(model) {

        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>AMOUNT</th>
                <th>VALUE</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.negotiations.map(n => {
            
            return `
                <tr>
                    <td>${DateHelper.dateToText(n.date)}</td>
                    <td>${n.amount}</td>
                    <td>${n.value}</td>
                    <td>${n.volume}</td>
                </tr>
            `
        }).join('')}

        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
        `;

    }


     //magic view JS inner
    update(model) {
        this._element.innerHTML = this._template(model);
    }
}
