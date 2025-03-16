let person = {
    name: "shohan"
}

let newPerson = "person";
person.name = "rakib";

const name = "Ashraful Islam Shohan";
console.log(typeof name);

function sum (num1,num2){
    return num1+num2;
}
const result = sum(52,96);
console.log(result);

const name = "Ashraful Islam Shohan";
if (name){
    console.log("this is truty value");
}
else{
    console.log("this is falsy value");
}


if (10=='10'){
    console.log("true");
}
else {
   console.log("false");
}


if (10==='10'){
    console.log("true");
}
else {
   console.log("false");
}


function sum (){
    let counter = 0 ;
    counter ++;
    console.log(counter);
}
sum()


function numbers (a,b,c){
    console.log (a,b,c);
}
numbers(1,25,3);


function numbers (a,b,c){
    console.log (arguments);
}
numbers(1,25,3);

function numbers (a,b,c){
    console.log (...arguments);
}
numbers(1,25,3,65);


let age = 33 ;
 
console.log (--age);
console.log (age--);
console.log (age++);


function odd (num1, num2){
    const result = num1+ num2 ;
    return result;
}

console.log(odd(5,6));


function  add (num1,num2){
  const result = num1+num2 ;
  console.log(num1,num2,result);
  return result ;
}

console.log (add(10,15));



default man diye rakhbo 

function sum (a,b=0){
    const result = a+b;
    return result ;
}

console.log (sum (5));

default function 

function createUser (name=' ',education={ },age=0,hobbies=[]){

}

const first = 'jaan';
const last = 'pakhi';
const name = first + ' '+last +' '+'potahsh potash';
console.log(name);

const a = 59 ;
const b = 25 ;
const math = `The sum of ${a} and ${b} is ${a+b}`;
console.log(math);

const vashon = `jhon cena 
cena naki ochina 
mair khalile nachina`;
console.log (vashon);

function getName (){
    return 'nadia';
}
const message = `na bolle sadia ache amar ${getName()}`;
console.log(message);

const age = 17;
const status = `you are an ${age>=18? 'Adult':'Minor'}`;
console.log(status);

const user = {
    name: 'shohan',
    age: 20
}

const status = `Name:${user.name},Age:${user.age}`;
console.log(status);


const fruits = ['apple','banana','mango'];
const secondFruit = `my second fruit is ${fruits[1]}`;
console.log(secondFruit);

const list = `my favourite fruits are: ${fruits.join()}`;
const list = `my favourite fruits are: ${fruits.join(",")}.`;
console.log(list);





const addition = (a,b) => a+b ;
const sum = addition(5,96) ;
console.log(sum);


const multiplication = (a,b,c=1) => a*b*c ;
const gun = multiplication(45,96);
console.log(gun);

const student = {
    name: 'hena',
    age: 007
}
const getName = person => student.name;
console.log(getName());
------------


const student = {
    name: "hena",
    age: 007
};
const getName = person => student.name;
console.log(getName());




const doMath = (a,b,c) => {
    const sum = a+b+c ;
    const mulply = a*b*c;
    const addition = sum + mulply;
    return addition;
}

console.log(doMath(12,65,989));



const person= {
    name:'shohan',
    getRegular: function(){
        console.log("hello," + this.name);
    },
    getArrow : () => {
        console.log("hello,"+ this.name);
    }
};
person.getArrow();
person.getRegular();






const gfName_ = hero.gfName;
console.log(gfName_);
const {name,gfName,age,relationStatus,lasting,phoneNumber,money} = hero ;

console.log(name);
console.log(gfName);
console.log(age);
console.log(relationStatus);
console.log(lasting);
console.log(phoneNumber);
console.log(money);




const numbers = [12,25,25,324,5421,54];
const [first,second,third,forth,fifth,sixth] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(forth);
console.log(fifth);
console.log(sixth);


function double (a,b){
    return [a*2,b*2];
}
const [prothom,ditiyo] = double (11,55);
console.log(prothom);
console.log(ditiyo);

const person = {
    name:'Ashraful islam shohan',
    age:20,
    city:'Dhaka',
    country:'Bangladesh',
    Num: 011111212
};
const {name,age,...rest} = person ;
console.log(rest);


const hero = {
    name : 'pal',
    gfName : 'nandini',
    age : 20 ,
    relationStatus: 'in a relationship',
    lasting : '<1y',
    phoneNumber : 69696969696969,
    money : 'null'
}





























































































