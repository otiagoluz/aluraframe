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
            ${model.negotiations.map(n => `

                <tr>
                    <td>${DateHelper.dateToText(n.date)}</td>
                    <td>${n.amount}</td>
                    <td>${n.value}</td>
                    <td>${n.volume}</td>
                </tr>

                `).join(``)}
        </tbody>
        
        <tfoot>
            <td colspan="3"></td>
            <td>
                ${model.negotiations.reduce((total, n) => total + n.volume, 0.0)}  
            </td>
        </tfoot>

    </table>
        `;

    }




     //magic view JS inner
    update(model) {
        this._element.innerHTML = this._template(model);
    }
}






/*

    Paradigma O.O.
    ${(function() {
            let total = 0;
            model.negotiations.forEach(n => total += n.volume);
            return total;        
        })()
    }

    Paradigma Functionel
    ${model.negotiations.reduce(function(total, n) {
        return total + n.volume;
        }, 0.0)
    }

*/