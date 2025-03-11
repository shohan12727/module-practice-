// let person = {
//     name: "shohan"
// }

// let newPerson = "person";
// person.name = "rakib";

// const name = "Ashraful Islam Shohan";
// console.log(typeof name);

// function sum (num1,num2){
//     return num1+num2;
// }
// const result = sum(52,96);
// console.log(result);

// const name = "Ashraful Islam Shohan";
// if (name){
//     console.log("this is truty value");
// }
// else{
//     console.log("this is falsy value");
// }


// if (10=='10'){
//     console.log("true");
// }
// else {
//    console.log("false");
// }


// if (10==='10'){
//     console.log("true");
// }
// else {
//    console.log("false");
// }


// function sum (){
//     let counter = 0 ;
//     counter ++;
//     console.log(counter);
// }
// sum()


// function numbers (a,b,c){
//     console.log (a,b,c);
// }
// numbers(1,25,3);


// function numbers (a,b,c){
//     console.log (arguments);
// }
// numbers(1,25,3);

function numbers (a,b,c){
    console.log (...arguments);
}
numbers(1,25,3,65);