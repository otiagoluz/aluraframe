class DateHelper {

    constructor() {

        throw new Error('DateHelper cannot be extended :( ') //caso alguem extancie " = new DateHelper "
    }
    
    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        
    }

    static textToDate(text) {

        if(!/\d{4}-\d{2}-\d{2}/.test(text)) {
            throw new Error('Must be in the format: "yyyy-mm-dd"');
        }
        return new Date(...text.split('-').map((item, indice) => item - indice % 2));
        // options most verbose:
        // if (indice == 1) { return item - 1 } return item;
        // function(item, indice) {return item - indice % 2}
    }


}


