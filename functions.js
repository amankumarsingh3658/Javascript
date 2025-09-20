// Functions is JS

// function hny(params) {
//     console.log("Happy New Year");
// }

//*------------------------------------------------------------------------------------------------------------*
// You can store a function in a variable too

// let fnc = function (params) {
//   console.log("Hello");
// };
// fnc();

//*------------------------------------------------------------------------------------------------------------*
// fat arrow function
// let fnc = () => {
//   console.log("Hello");
// };
// fnc();

//*------------------------------------------------------------------------------------------------------------*
// Default, Rest and Spread Parameters;

// default
// function add(v1, v2) {
//     console.log(v1 , v2);
// }

// add() ==> undefined undefined;

// function add(v1 , v2){
//     console.log(v1 + v2);
// }

// add() ==> NaN;

// we can put default values in case user dont provide
// function add(v1 = 0, ms = 0) {
// These are default parameters
// }

// rest
// function add(...val) {
//   console.log(val);
// }
// add(1, 2, 3, 4, 5, 6);  ===> val :- [1 ,2 3, 4,5];

//*------------------------------------------------------------------------------------------------------------*
// first class functions

// functions which are treated as values

// let fn = function abcd(v1) {

// }

// fn(12);

// function name(val) {

// }
// name(function (params) {
//     console.log("Hello");
// })

//*------------------------------------------------------------------------------------------------------------*
// Higher Order Function

// any function that accepts a function in Paramters or return a function from the values

//*------------------------------------------------------------------------------------------------------------*
// Pure vs Impure Functions

// Any function that dont change any outer value is pure function else impure

//*------------------------------------------------------------------------------------------------------------*
// Closures
// A function that returns another function and the returned function uses a variable from the parent function

// function abcd(params) {
//     let a = 12;
//     function hello(params) {
//         console.log(a);
//     }
// }

// Lexical Scoping
// function abcd(params) {
//     let a = 10;
//     function defg(params) {
//         let b = 3;
//          function ghij(params) {
//             let c = 14;
//         }
//     }
// }

//*------------------------------------------------------------------------------------------------------------*
// IIFE
// Immediately invoked function expression

// used to isolate private variables

// (function (params) {

// })();

// will run immediately

//*------------------------------------------------------------------------------------------------------------*
// Hoisting difference between declaration and expression

// abcd()

// function abcd(params) {

// }

// This will run as its hoisting

// abcd();

// let abcd = function (params) {

// }

// This will not work
// Hoisting wont work in expressions

//*------------------------------------------------------------------------------------------------------------*
// you can use fat arrow function anywhere in JS but you cant use it in objects where this keyword is used
