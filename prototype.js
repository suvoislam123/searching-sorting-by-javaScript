// const personMethods= {
//     eat(){
//         console.log(`I am Eating Now`);
//     },
//     play(){
//         console.log(`I am Playin Now`);
//     },
//     sleep(){
//         console.log(`I am Sleeping Now`);
//     }

// }
    // The constructor function is a kind of function which are used to craete an Object;
// function Person(name,age){
//     let p ={};
//     p.name = name;
//     p.age = age;
//     p.eat = personMethods.eat;
//     p.play = personMethods.play;
//     p.sleep = personMethods.play;
//     return p;
// }
// let p1 = Person('Shakib',23);
// console.log(p1.play());
////Object.create
// const mihir = {
//     hair: 'black',
//     scene:'white'
// }
// let sawon = Object.create(mihir);
// sawon.behave = 'dirty';
// console.log(sawon.hair);
// console.log(sawon.behave);
// console.log(sawon);
////with Object.create
// const personMethods= {
//     eat(){
//         console.log(`I am Eating Now`);
//     },
//     play(){
//         console.log(`I am Playin Now`);
//     },
//     sleep(){
//         console.log(`I am Sleeping Now`);
//     }

// }
// function Person(name,age){
//     let p =Object.create(personMethods);
//     p.name = name;
//     p.age = age;
//     return p;
// }
// let p1 = Person('Shakib',23);
// p1.sleep();

// function p(){
//     let p1 = {};
//     p1.age =19;
//     return p1;

// }
// let x= p();
// console.log(x.age);
// console.log(p().cool);

// * Declare the function 'myFunc' */
// function myFunc(theObject) {
//   theObject.brand = "Toyota";
// }

// /*
//  * Declare variable 'mycar';
//  * create and initialize a new Object;
//  * assign reference to it to 'mycar'
//  */
// var mycar = {
//   brand: "Honda",
//   model: "Accord",
//   year: 1998
// };

// /* Logs 'Honda' */
// console.log(mycar.brand);

// /* Pass object reference to the function */
// myFunc(mycar);

// /*
//  * Logs 'Toyota' as the value of the 'brand' property
//  * of the object, as changed to by the function.
//  */
// console.log(mycar.brand);

// let obj = {
//     nam:'ami ekta object'
// };
// function sokhina(pn){
//     pn.nam = 'Na ami hoitasi sokhina'
// }
// console.log(obj.nam);
// sokhina(obj);
// console.log(obj.nam);
// console.log(typeof obj);
// function Bongsho(name,status)
// {
//     let p = Object.create(Bongsho.prototype);
//     p.name = name;
//     p.status = status;
//     return p;
// }
// Bongsho.prototype = {
//     getMeaning(){
//         console.log("It will a kind of relative class identifier");
//     },
//     getMyOpinion(){
//         console.log("It should be depricated from our society");
//     }
// }
// let khan = Bongsho('khan','high');
// khan.getMeaning();
// let sheikh = Bongsho();
// sheikh.getMyOpinion();
// function Tree(name,fuits,flower){
//     // let green = Object.create(Tree.prototype);
//     this.name = name;
//     this.fruits = this.fruits;
//     this.f = 'something';
//     // return green;
// }
// Tree.prototype = {
//     giveFruits(){
//         console.log("Take fruits from tree");
//     },
//     giveFood(){
//         console.log(`Take Food from me`);
//     },
//     giveFlower(){

//         console.log("Take Flower frome Me");
//     }
// }
// const mangotree =  new Tree("Mango","Mango","Bowl");
// mangotree.giveFlower();
// mangotree.giveFruits();
// console.log(mangotree.f);
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`The player is eating`);

    }
    play(){
        console.log(`The person is playing`);
    }
}
const sakib = new Person('sakib',38);
sakib.play();
console.log(Array.prototype);

var arr2d = [
    ['Shuvo',23,'student','good boy'],
    ['sawon',20,'college','bad']
];
console.log(arr2d[1][3]);
var arr =[[

]];
arr[0][1] = 23;
console.log(arr[0][1]);