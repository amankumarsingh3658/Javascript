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
