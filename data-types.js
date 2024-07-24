const str = "строчка не иначе";
console.log("str", str, typeof str);

const range = 17;
console.log("range", range, typeof range);

const logic = 7 > 15;
console.log("logic", logic, typeof logic);

const blackHole = null;
console.log("blackHole", blackHole, typeof blackHole);

let Uncertain;
console.log("Uncertain", Uncertain, typeof Uncertain);
/* В задании указано, что создать нужно через переменную const но со значением undefined этого не возможно, спасибо гуглу*/
const objectcase = {};
console.log("objectcase", objectcase, typeof objectcase);

const veryBigNumber = 456n;
console.log("veryBigNumber", veryBigNumber, typeof veryBigNumber);

const id = Symbol("id");
console.log("id", id, typeof id);
