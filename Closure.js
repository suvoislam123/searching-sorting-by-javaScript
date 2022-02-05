// function sum(num1,num2)
// {
//     return num1 + num2;
// }
// console.log(sum(110,5)); this is common in most of the programming language
// ***************But In javascript it also give same output on below case************
//below example are simpliest example of clousure
// var num1 = 110;
// var num2 =5;
// function sum()
// {
//     return num1 + num2; ///????think about lexical scoping
// }///Closure mane bondhoni joraia dhoira raksi amon
// console.log(sum);
// -----------------------------------------
// var num1 = 110;
// var sum= function()
// {
//     var num2 = 5;
//     return function()
//     {
//         return num1 + num2;
//     };
// }///Clouser: function with remembered values
// var myFunc = sum();
// console.dir(myFunc);
// console.log(sum());
// -----------------------------------------------------------
// function bankAccount(initialBalance)
// {
//     var balance = initialBalance;
//     return function()
//     {
//         return balance;
//     }
// }
// let account = bankAccount(1000);
// // console.log(balance); // it gives error not accesible
// console.log(account());
// console.dir(account);
// // eikhane balance ta baire thake accessible na but clousure er maddhome amra access nite parsi...protected
// --------------------------------------------------------------------------------------------
// var num1 = 9;
// var sum = function()
// {
//     var num2 = 8;
//     return function()
//     {
//         return num1;
//     };

// };///global scope er variable use korle clousure hoibo na....enclosing scope e thaka lagbe
// console.dir(sum);

// (function(){
//     var sum = function()
// {
//     var num2 = 8;
//     return function()
//     {
//         return num1;
//     };

// };

// console.dir(sum);
// })();
// ----------------------------------------------------------------------------------
// function stopeWatch()
// {
//     var startTime = Date.now();
//     function getDelay()
//     {
//         console.log(Date.now() - startTime);
//     }
//     return getDelay;
// }
// var timer = stopeWatch();
// for(var i=0;i<100000000;i++)
// {
//     var a = Math.random()*1000000;
// }
// timer();
// for(var i=0;i<100000000;i++)
// {
//     var a = Math.random()*1000000;
// }
// console.dir(timer)
// timer();
// timer = null ///for grabez clean
// timer(); // here timer is not a function

for(let i=0;i<4;i++)
{
   const counter=()=>{
       console.log(i);//var i er khattre 4444 print and let i er khatre 0,1,2,3
       //eitar karon clousure kar var i hoi global but let i block scop
       //let er khatre vinno vino i pabo but variable er ekata i er referrence
       //global i o bises dhoroner clousure bola jai kintu closure na


   }
//    console.log(i);
//    console.dir(counter)
   setTimeout(counter,4000);
}

// i = 17; ei khane eita dia try korla.o bujha jabe
//sutorang foor loop e let use kora uchit asynchronous programming er khatree
console.log("For Loop has finished but.....");
//What is clousure? Answer A function with some remembered values
