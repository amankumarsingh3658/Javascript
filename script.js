// Variables
// var , let const

var a = 12;

// Declaration and initialization
var a; // Declare
var a = 12; // Declare and Initialize

// Var has some problems associated;
// Var se bna variable khud ko window mein add krta hai
// Var is Function Scoped
// Can be declared again with same name without error

// Use Let instead of var
// Use Const Where values are not going to change

function varProblem() {
  if (true) {
    var hello = "Heyya"; // In any other programming language the variable declared inside a if block is usable in if only, But a var being function scoped can be used anywhere in the whole function which is not good
  }
}

//*------------------------------------------------------------------------------------------------------------*

// Scope of Variables
// Aapka Dayra kahan tak hai

// Global
let a = 12; // Accessible anywhere

// Functional Scope
function hello() {
  let b = 12; // Limited to this function only
}

// Blocked Scope
{
  let c = 12; // Limited to this block of code only
}

function heyya() {
  if (true) {
    let d = 34; // Limited to this block only
  }
}

//*------------------------------------------------------------------------------------------------------------*
// Reassignment and declaration

let a = 20; // Initialization and Declaration
a = 35; // Reassignment

//*------------------------------------------------------------------------------------------------------------*
// Temporal Dead Zone
console.log(a); // JS knows a is defined below, it dont show a is not defined, it shows a cannot be accessed before initialization
let a = 12; // a is defined after its used
// Area where JS knows a variable exists but value cant be provided

//*------------------------------------------------------------------------------------------------------------*
// Hoisting Impact per type
// Hoisting-> ek variable ko jab JS mein bnaate h tab voh 2 hisson mein toot jaata hai aur uska declare part upar jaata h aur initialization neeche chla jaata h

var a = 12;

// do hisse (This is how a variable breaks after it breaks)
var a = undefined; // It goes on the top
a = 12;

// So if we console log "a" before its declared it gives undefined as in case of var the var = undefined goes on the top due to hoisting

// Var -> Undefined
// let and const, have no set value so it remains in temporal dead zone until initialized

//*------------------------------------------------------------------------------------------------------------*
// Data Type and Type System

// Mainly Divided into two -> Primitives and References
// Primitives mainly consist of values which dont have brackets (can be copied directly)
// References consist of values which consist of references (cannot be copied directly)

// Primitives on copying provide real copy (String , number, boolean , null , undefined , symbol , bigint)

// References on copying dont provide real copy but provide a reference to the parent

// Primitives
let a = 12;
let b = a; // a is copied to b then it also have 12 as value

a = a + 2; // a will update to 14

// References
let a = [1, 2, 3];
let c = a;

b.pop(); // will reflect in a too , a will also become [1,2]

// Strings
// '' - Single Qoutes
// "" - Double Qoutes
// `` - Bacticks

// these are used to make string

// Number
// 12
// 12.3

// Both are numbers in JS

// boolean
// true and false

// null
// means no value is declared by self (jaan ke value nhi di)
// let selectedStudent = null

// undefined (provided by JS engine)
// variable is created and no value is provided
// let a;
// so a will be undefined

// symbol
// unique immutable(non changable) value create krta h
// future mein koi library use krenge uss case mein unn libraries mein kayi baar kuch fields hoti h jinse similar hum bhi bna dete h aur galti se hmaari bnaayi hui fields uss library ki original fields ko change krdeta h

// let libraryCode = {
//     uid: 1,
//     model:"Aman",

//     and then uid is used again in libraryCode
// }

// libraryCode.uid = 12; // This is user written code which is updating the library code that can affect the library code value

// thats why we use Symbol

let u1 = Symbol("uid");
let u2 = Symbol("uid");

// even if u1 and u2 looks same they are not same u1 === u2 will give false

// BigInt
// int store Number.MAX_SAFE_INTEGER
//  so to take number bigger than that we use BigInt
// let a = 9999999999999999n; // if we add n at last we declare it as bigint
// this resolves precision issues

// Arrays
//[]
// let a = [1,2,3]

// Objects
//{}
// let a = {"hello" : "heyya"}

// Functions
// function name(params) {}

//*------------------------------------------------------------------------------------------------------------*
// Dynamic typing
// JS dont have dynamic typing, that means data can be changed from one type to another

//*------------------------------------------------------------------------------------------------------------*
// Type Coercion(== vs ===)
// Concept where one of your data type will automatically convert

// "5" + 1 = "51"
// any operand in the function is String Js will automatically convert to String

// "5" - 1 =4;
// In this case - will just do subtract so in this case String will convert to number

//*------------------------------------------------------------------------------------------------------------*
// Truthy/Falsy Value
// if(12){

// }

// Every Value in Js is truthy or false

// false values
// 0 , false ,"" , null , undefined , document.all // These all are falsy values

// any other value is truthy

//*------------------------------------------------------------------------------------------------------------*
