// this keyword ta babohito hoi kono ekta function ke different context reuse korar jonno
// rules->
// 1.Implicit Binding(. er age ki ase)
// 2.Explicit Binding
// 3.New Binding 
// 4.Window Binding
// var printP = function(obj)
// {
//     obj.printPl = function()
//     {
//         console.log(this.name);
//     };
// };
// let sakib = {
//     name:"Shakib"
// };
// let tamim = {
//     name:"tamim"
// };
//  printP(sakib);
// sakib.printPl();
// printP(tamim);
// tamim.printPl();
//********************************************************** */
// var Person = function(name,age)
// {
//     return{
//         name:name,
//         age:age,
//         getName:function()
//         {
//             console.log(this.name);
//         },
//         father:{
//             name:'Babul Sheikh',
//             getName:function()
//             {
//                 console.log(this.name);
//             }

//         }
//     }
// }
// let p1  = Person('Shuvo Islam',23);
// p1.getName();
// p1.father.getName(); Implicit Binding
// *******************************************************************************
// 2.Explict Binding
let getName = function()
{
    console.log(this.name);
}
p1 = {
    name:'Karim',
    age:37
}
getName.call(p1); // eikhane p1 hoitase object jeita directly boila dite pari
var v1 = "kalo";
var v2 = "Buddhiman";
var v3 = "Admin";
//--------------------------------------------------------
let getNameWithP= function(v1,v2,v3)
{
    console.log(`${this.name} is ${v1} , ${v2} and a ${v3}`);

}
getNameWithP.call(p1,v1,v2,v3); // with parameter
// Now apply which almost same to call() but it takes Array
let v = [v1,v2,v3];
getNameWithP.apply(p1,v);
// Now bind method. Bind method also almost same to call it just doesn't call the function,it return a function instance
let inst = getNameWithP.bind(p1,v1,v2,v3);
inst();
// *****************************************************************************************
// 3.New binding /
function Person(name,age)
{
    // let this = Object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
    // return this; when we call a function by new keyword then this two line become auto generats


}
// *******************************************************************
//4.Window Binding
// let sawon = new Person('sawon',21);
// "use strict";
var Func = function()
{
    console.log(this);
    console.log(this.name);
}
let sakib = {
    name:"salib",
    age:45
}
Func(); //undefined.
//call bind apply is only for normal function not for arro function



