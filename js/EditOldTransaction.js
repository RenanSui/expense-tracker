import { getValuesById } from './getLocalStorage.js';
export const EditOldTransaction = (title, amountNumber, note, type, date, id, tag) => {
    console.log('EDIT OLD TRANSACTIONS LOGS');
    console.log(title);
    const values = getValuesById(id);
    const { title: oldTitle, amountNumber: oldAmountNumber, note: oldNote, type: oldType, date: oldDate, id: oldId, tag: oldTag, } = values[0];
};
