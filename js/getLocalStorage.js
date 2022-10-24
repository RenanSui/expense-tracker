const getLocalStorage = () => {
    return localStorage.getItem('history')
        ? JSON.parse(localStorage.getItem('history'))
        : [];
};
export const getId_LocalStorage = () => {
    return localStorage.getItem('currentId')
        ? JSON.parse(localStorage.getItem('currentId'))
        : { id: '0' };
};
export const getValuesById = (id) => {
    const history = localStorage.getItem('history')
        ? JSON.parse(localStorage.getItem('history'))
        : [];
    const valuesById = history.filter((item) => {
        return item.id === id;
    });
    return valuesById;
};
export const getTotals = () => {
    return localStorage.getItem('totals')
        ? JSON.parse(localStorage.getItem('totals'))
        : { balance: 0, income: 0, expense: 0 };
};
export default getLocalStorage;
