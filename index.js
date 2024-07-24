let a = 25;
a = "Теперь это строка";
alert(a);
let b = "Вроде всё легко, но сложно хD";
b = "25";
alert(b);
let d = 2 > 5;
d = null;
alert(d);
console.log(typeof d);

/* Исходный код
let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

let initialValue1;
let initialValue2 = 0;

var isJavaScriptProgrammer1 = true;
var isJavaScriptProgrammer2 = false;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';*/

let ageOfPerson1 = 18;
let ageOfPerson2 = "20";
ageOfPerson2 = 20;
console.log("ageOfPerson2", ageOfPerson2, typeof ageOfPerson2);

let nameOfAnimal1 = null;
let nameOfAnimal2 = "Charlie";
nameOfAnimal2 = null;
console.log("nameOfAnimal2", nameOfAnimal2, typeof nameOfAnimal2);
console.log("Переменную с const переопределить нельзя");
const bestProgrammingLanguage1 = "JavaScript";
const bestProgrammingLanguage2 = "Java";
console.log(
  "bestProgrammingLanguage1",
  "bestProgrammingLanguage2",
  bestProgrammingLanguage1,
  bestProgrammingLanguage2,
  typeof bestProgrammingLanguage1,
  typeof bestProgrammingLanguage1
);

let initialValue1;
let initialValue2 = 0;
initialValue2 = undefined;
console.log("initialValue2", initialValue2, typeof initialValue2);

console.log('"var является устаревшим"');
let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;
isJavaScriptProgrammer2 = 2 === 2;
console.log(
  "isJavaScriptProgrammer2",
  isJavaScriptProgrammer2,
  typeof isJavaScriptProgrammer2
);

let helloText1 = "Hello!";
let helloText2 = "Привет!";
helloText2 = "По условию можно и не менять";
console.log("helloText2", helloText2, typeof helloText2);
