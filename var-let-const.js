// var : no reason to use var 
// let : allow it to reassign 
// const: do not allow it to reassign

const money = 25;
const rich = money + 25;
console.log(rich);


let count = 0;
count = count + 10;
console.log(count);


const numbers = [23, 4, 23, 12, 56];
// numbers = [4, 5, 7, 7];
numbers[1] = 55;
numbers.push(898, 77, 567);
console.log(numbers);

// Object
const student = {
    name: 'moyna apkhi',
    class: 12
}

// student ={name:'kokil konthi'}
student.name = 'name moyur konthi';
student.class = 6776;
student.gender = 'male';
console.log(student);


// loop
let sum = 0;

for (let i = 0; i < 10; i++) {
    const num = i;
    sum = sum + i;
};


console.log(sum);