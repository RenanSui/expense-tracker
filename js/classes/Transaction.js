import { AddNewTransaction } from '../AddNewTransaction.js';
import { EditOldTransaction } from '../EditOldTransaction.js';
export default class Transaction {
    constructor(title, amountNumber, note, type, date, id, tag, createdAt) {
        this.title = title;
        this.amountNumber = amountNumber;
        this.note = note;
        this.type = type;
        this.date = date;
        this.id = id;
        this.tag = tag;
        this.createdAt = createdAt;
    }
    printFormat() {
        console.log(`
	    ${this.title},
	    ${this.amountNumber},
	    ${this.note},
	    ${this.type},
	    ${this.date},
		${this.id},
		${this.tag},
		${this.createdAt}`);
    }
    NewTransaction() {
        AddNewTransaction(this.title, this.amountNumber, this.note, this.type, this.date, this.id, this.tag, this.createdAt);
    }
    EditTransaction() {
        EditOldTransaction(this.title, this.amountNumber, this.note, this.type, this.date, this.id, this.tag, this.createdAt);
    }
}
