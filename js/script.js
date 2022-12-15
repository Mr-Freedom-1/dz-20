/*-------------Завдання №1-------------*/
let a = prompt('Enter first number', '0');
let b = prompt('Enter second number', '0');

function maxNumber(a, b){
    if (+a > +b){
        return `Number ${a} is bigger`;
    } else if(+b > +a){
        return `Number ${b} is bigger`;
    }
    return 'a = b';
}

alert(maxNumber(a, b));

/*-------------Завдання №2-------------*/
let number = prompt('Enter the number', '0');

function revers(number){
    if(number > 0){
        return `${number * -1}`;
    } else if(number < 0){
        return `${number * -1}`;
    }
    return `What are you doing?`;
}

alert(revers(number));

/*-------------Завдання №3-------------*/
let nuMber = prompt('Enter the number', '0');
let count = prompt('Enter the count', '0');

function three(a, b){
    return a + 3 * b;  
}

alert(three(+nuMber, +count));

/*-------------Завдання №4-------------*/
let metric = prompt('Enter the metric (\'m\' or \'cm\')', '0');
let km = prompt('How many kilometers?', '0');

function KmToM(m){
    return `${km} kilometers is ${km * 1000} m`;
}

function KmToCm(cm){
    return `${km} kilometers is ${km * 100000} cm`;
}

function getMetric(metric, km, m, cm){
    if(metric == 'm'){
        return KmToM();
    } else if(metric == 'cm'){
        return KmToCm();
    }
    return `What are you doing?`;
}

alert(getMetric(metric, km, KmToM, KmToCm));