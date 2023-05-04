
function calculateVolumeAndArea(a) {
    let b = (a * a) * a;
    let c = (a * a) * 6;
    if (Number.isInteger(a) && a > 0 && typeof (a) === "number") {
        console.log(`Объем куба:${b}, площадь всей поверхности: ${c}`);
    } else {
        console.log("При вычислении произошла ошибка");
    }
}
calculateVolumeAndArea("5");

function getCoupeNumber(a) {
    if (!Number.isInteger(a) || a < 0 || typeof(a) !== "number") {
        return ("Ошибка. Проверьте правильность введенного номера места");
    } else if (a === 0 || a > 36) {
        return ("Таких мест не существует");
    } else {
        return(Math.ceil(a/4));
    }
}
console.log(getCoupeNumber(6));

function getTimeFromMinutes(minutesTotal) {
    if (!Number.isInteger(minutesTotal) || minutesTotal < 0 || typeof(minutesTotal) !== "number") {
        return ("Ошибка, проверьте данные");
    }
    let hours = Math.floor(minutesTotal/60);
    let minutes = Math.floor(minutesTotal % 60);
    
    let hoursStr = "";

    switch (hours) {
        case 0:
            hoursStr = "часов";
            break;
        case 1:
            hoursStr = "час";
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = "часа";
            break;
        default:
            hoursStr = "часов";
        }
        return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
console.log(getTimeFromMinutes(160));


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== "number" ||
        typeof(b) !== "number" ||
        typeof(c) !== "number" ||
        typeof(d) !== "number") {
            return 0;
        } else {
            return Math.max(a, b, c, d);
        }
}
console.log(findMaxNumber(3, 4, "6.7", "5"));


function sum(num) {
    for (i = 0; i < num; i++) {
        console.log(i);
    }
    if (num !== "number") {
        return 0;
    } 

}
console.log(sum(4));

function fib(digit) {
    if (typeof(digit) !== "number" || digit < 0 || !Number.isInteger(digit)) {
        return "";
    }
    let array = [0, 1];
    for (let i = 2; i < digit; i ++) {
        array[i] = array[i-1] + array[i-2];
    }
    return array.join(" ");
}
console.log(fib(7));