const first = 'Jaan';
const last = 'pakhi';
const greet = 'potas potas';
const name = first + ' ' + last + ' ' + greet;
console.log(name);
const a = 10;
const b = 20;
const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
console.log(result);

const numbers = [45, 48, 98, 78];
const student = { name: 'john ochena', age: 5 }
// const math = `The sum of ${a} and ${b} is ${a + b}`
const math = `The sum of ${numbers[0]} and ${student.age} is ${numbers[0] + student.age}`


// when we try to creat new line we must use back sash (\) with n like this (\n).
const email = 'Hi john \n' +
    'cena cena lage \n' +
    'tumi mara mari korba nki'
    ;
console.log(email);

// but when we have more easy way to create new line with backtick sign.
// but  when we USE backtick sign. this (`) sign name is backtick sign
const challenge = `Jhon Cena
cena naki ochena
mair dimu prochur`;

console.log(challenge);

