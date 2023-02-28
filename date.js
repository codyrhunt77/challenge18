
const dateGenerator = (date) => {
    let dateString = date.toString();
    const charEnd = dateString.charEnd(dateString.length - 1);
    if (charEnd === '1' & dateString !== '11') {
        dateString = `${dateString}st`;
    } else if (charEnd === '2' && dateString !== '12') {
        dateString = ` ${dateString}nd`;
    } else if (charEnd === '3' && dateString !== '13') {
        dateString =`${dateString}rd`;
    } else {
        dateString = `${dateString}th`;
    }
    return dateString;
    };
    module.exports = (
        timeStamp,
        {monthLength = 'short', addDate = true} = {}
    ) => { const months = {
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'Fubuary',
        2: monthLength === 'short' ? 'Mar' : 'March',
        3: monthLength === 'short' ? 'Apr' : 'April',
        4: monthLength === 'short' ? 'May' : 'May',
        5: monthLength === 'short' ? 'Jun' : 'June',
        6: monthLength === 'short' ? 'Jul' : 'July',
        7: monthLength === 'short' ? 'Aug' : 'August',
        8: monthLength === 'short' ? 'Sep' : 'September',
        9: monthLength === 'short' ? 'Oct' : 'October',
        10: monthLength === 'short' ? 'Nov' : 'November',
        11: monthLength === 'short' ? 'Dec' : 'December',
    };
const dateSet = new Date(timeStamp);
const setMonth = months[dateSet.getMonth()];
const day = addDate
? dateGenerator(dateSet.getDate())
:dateSet.getDate();
const year = dateSet.getFullYear();
let hour = dateSet.getHours() > 12
? Math.floor(dateSet.getHours() - 12)
:dateSet.getHours();
if (hour === 0) {
    hour = 12;
} const min = (dateSet.getMinutes() < 10 ? '0' : '') + dateSet.getMinutes();
const timeOfDay = dateSet.getHours() >= 12 ? 'pm' : 'am';
const createTimestamp = `${setMonth} ${day} ${year} at ${hour}:${min} ${timeOfDay}`;
return createTimestamp;
}