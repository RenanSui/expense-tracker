import getLocalStorage from './getLocalStorage.js';
export const EditOldTransaction = (newTitle, newAmountNumber, newNote, newType, newDate, newId, newTag, newCreatedAt) => {
    const history = getLocalStorage();
    const newHistory = history.map(({ title, amountNumber, note, type, date, id, tag, createdAt, }) => {
        if (newId === id) {
            return {
                title: newTitle,
                amountNumber: newAmountNumber,
                note: newNote,
                type: newType,
                date: newDate,
                id: newId,
                tag: newTag,
                createdAt: newCreatedAt,
            };
        }
        else {
            return {
                title,
                amountNumber,
                note,
                type,
                date,
                id,
                tag,
                createdAt,
            };
        }
    });
    localStorage.setItem('history', JSON.stringify(newHistory));
    console.log(newHistory);
};
