import getLocalStorage from './getLocalStorage.js';
import { defaultRender } from './renderHistory.js';
export const renderFilteredHistory = (action) => {
    const currentHistory = getLocalStorage();
    let newHistory;
    if (action === 'Balance')
        newHistory = currentHistory.filter((item) => item);
    if (action === 'Income')
        newHistory = currentHistory.filter((item) => item.type === 'Income');
    if (action === 'Expense')
        newHistory = currentHistory.filter((item) => item.type === 'Expense');
    defaultRender(newHistory);
};
