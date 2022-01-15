let ageOfPerson1 = 18;
let ageOfPerson2 = 20;

ageOfPerson1 = ageOfPerson2;
console.log(ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

nameOfAnimal1 = nameOfAnimal2;
console.log(nameOfAnimal2, typeof nameOfAnimal2);

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';
console.log('Переменную с const переопределить нельзя!', typeof bestProgrammingLanguage1, typeof bestProgrammingLanguage2);

let initialValue1;
let initialValue2 = 0;

initialValue1 = initialValue2;
console.log(initialValue2, typeof initialValue2);

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

console.log('var является устаревшим, make let not var',)

let helloText1 = 'Hello!';
let helloText2 = 'Привет!'; 

helloText1 = helloText2;
console.log(helloText2, typeof helloText2);