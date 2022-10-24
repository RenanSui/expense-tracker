import getLocalStorage from './getLocalStorage.js';
const history = document.querySelector('#history');
const RENDER_History = () => {
    const currentHistory = getLocalStorage();
    defaultRender(currentHistory);
};
export const defaultRender = (currentHistory) => {
    let counter = 0;
    let newHistory = currentHistory
        .map(() => {
        const { id, title, note, type, date, amountNumber, tag } = currentHistory[counter];
        let value = '';
        let icon = '';
        let color = '';
        if (type === 'Expense') {
            value = `-$${amountNumber.toLocaleString()}`;
            icon = `<span class="iconify" data-icon="bi:cart-check"></span>`;
            color = `red`;
        }
        if (type === 'Income') {
            value = `+$${amountNumber.toLocaleString()}`;
            icon = `<span class="iconify" data-icon="fluent-mdl2:money"></span>`;
            color = `green`;
        }
        counter++;
        return `<!-- individual transaction -->
        <div class="income-transaction bg-secondary bg-hover-secondary m-2 rounded" id="${id}">
            <!-- Icon -->
            <div class="t-icon bg-tertiary rounded">
                ${icon}
            </div>
            <!-- Informations -->
            <div class="transaction-info row">
                <!-- info title -->
                <div class="transaction-title mb-2 col-xs-5">
                    <h3 class="t-title text-gray-3">${title}</h3>
                </div>
                <!-- info value -->
                <h3 class="t-value text-${color} col-xs-5">${value}</h3>
                <!-- info tag -->
                <p class="t-tag text-gray-2 col-xs-5">${tag}</p>
                <!-- info date -->
                <p class="t-date text-gray-2 col-xs-5 ml-auto">${date}</p>
            </div>
        </div>
        <!-- end of individual transaction -->
        `;
    })
        .join('');
    history.innerHTML = newHistory;
};
export default RENDER_History;
