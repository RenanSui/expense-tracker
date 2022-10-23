import AddNewTransaction from '../AddNewTransaction.js';
export default class Transaction {
    constructor(title, amountNumber, note, type, date, id, tag) {
        this.title = title;
        this.amountNumber = amountNumber;
        this.note = note;
        this.type = type;
        this.date = date;
        this.id = id;
        this.tag = tag;
    }
    printFormat() {
        console.log(`
	    ${this.title},
	    ${this.amountNumber},
	    ${this.note},
	    ${this.type},
	    ${this.date},
		${this.tag}`);
    }
    NewTransaction() {
        AddNewTransaction(this.title, this.amountNumber, this.note, this.type, this.date, this.id, this.tag);
    }
}
