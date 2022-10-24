const formatDate = (date) => {
    let newDate = date;
    const day = newDate[8] + newDate[9];
    const year = newDate[0] + newDate[1] + newDate[2] + newDate[3];
    const monthNumber = parseInt(newDate[5] + newDate[6]);
    const month = getMonth(monthNumber - 1);
    newDate = `${month} ${day}, ${year}`;
    return newDate;
};
export const getMonth = (month) => {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return months[month];
};
export const reverseFormatDate = (date) => {
    const getMonth = date[0] + date[1] + date[2];
    const getDay = date[4] + date[5];
    const getYear = date[8] + date[9] + date[10] + date[11];
    if (getMonth === 'Jan')
        return `01/${getDay}/${getYear}`;
    if (getMonth === 'Feb')
        return `02/${getDay}/${getYear}`;
    if (getMonth === 'Mar')
        return `03/${getDay}/${getYear}`;
    if (getMonth === 'Apr')
        return `04/${getDay}/${getYear}`;
    if (getMonth === 'May')
        return `05/${getDay}/${getYear}`;
    if (getMonth === 'Jun')
        return `06/${getDay}/${getYear}`;
    if (getMonth === 'Jul')
        return `07/${getDay}/${getYear}`;
    if (getMonth === 'Aug')
        return `08/${getDay}/${getYear}`;
    if (getMonth === 'Sep')
        return `09/${getDay}/${getYear}`;
    if (getMonth === 'Oct')
        return `10/${getDay}/${getYear}`;
    if (getMonth === 'Nov')
        return `11/${getDay}/${getYear}`;
    if (getMonth === 'Dec')
        return `12/${getDay}/${getYear}`;
};
export const formatFullDate = () => {
    const date = new Date();
    let seconds = date.getSeconds().toString();
    let minutes = date.getMinutes().toString();
    let hour = date.getHours();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate().toString();
    const newMonth = getMonth(month);
    let meridiem = '';
    if (hour < 12)
        meridiem = 'AM';
    if (hour >= 12)
        meridiem = 'PM';
    minutes = zeroAfter(minutes);
    seconds = zeroAfter(seconds);
    day = zeroAfter(day);
    const FullDate = `${newMonth} ${day}, ${year} ${hour}:${minutes}:${seconds} ${meridiem}`;
    return FullDate;
};
const zeroAfter = (number) => {
    let date = number;
    if (date[1] === undefined)
        date = '0' + date;
    return date;
};
export default formatDate;
