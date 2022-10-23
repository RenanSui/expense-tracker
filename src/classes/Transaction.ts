import AddNewTransaction from '../AddNewTransaction.js';

export default class Transaction {
	constructor(
		public title: string,
		public amountNumber: number,
		public note: string,
		public type: string,
		public date: string,
	) {}

	printFormat(): void {
		console.log(`
	    ${this.title},
	    ${this.amountNumber},
	    ${this.note},
	    ${this.type},
	    ${this.date},`);
	}

	NewTransaction(): void {
		AddNewTransaction(
			this.title,
			this.amountNumber,
			this.note,
			this.type,
			this.date,
		);
	}

	// EditTransaction(): void {
	// 	EditOldTransaction(
	// 		this.title,
	// 		this.amountNumber,
	// 		this.note,
	// 		this.type,
	// 		this.date,
	// 		this.amountString
	// 	)
	// }
}