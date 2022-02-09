function checkHours(hourToCheck) {
    const date = new Date();
    const hours = date.getHours();
    let checkHour = String(hourToCheck);
    if (checkHour[0] === '0') {
        checkHour = checkHour.slice(0, 1);
    }
    return +checkHour > hours
}

function checkDate(dateToCheck) {
    const date = new Date();
    const day = date.getDate();
    let checkDay = String(dateToCheck);
    if (checkDay[0] === '0') {
        checkDay = checkDay.slice(0, 1);
    }
    return +checkDay <= day;
}

export function filterDate(hour, day) {
    if (checkDate(day) && !checkHours(hour)) {
        return false
    } else return true
}

