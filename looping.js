// for of use on array or string not in object 
// for in use on object 
const numbers = [1, 6, 8, 4];
// for(let i =0; i<numbers.length; i++){}
// while

for (const number of numbers) {
    // console.log(number);
};

const nobab = 'Siraj ud Doula';
for (const char of nobab) {
    console.log(char);
};

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};

for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}
