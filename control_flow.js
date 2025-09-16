//if else else-if
// switch case
// early return pattern

//*------------------------------------------------------------------------------------------------------------*
// if else
// deciding factor

// if(condition :- resolves in true or false){
// block of code
// }

//*------------------------------------------------------------------------------------------------------------*
// else-if
// if(condition){
//     block of code
// }else if(condition){
//     block of code
// }else{
//     block of code
// }

//*------------------------------------------------------------------------------------------------------------*
// switch (3) {
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         console.log("Hello");
//         break;
// }

// its important to break after every switch case else it will create a fallthrough

// If-Else Example

// function getGrades(score) {
//   if (score >= 90 && score <= 100) {
//     return "A";
//   } else if (score >= 80 && score <= 89) {
//     return "B";
//   } else if (score >= 70 && score <= 79) {
//     return "C";
//   } else if (score >= 60 && score <= 69) {
//     return "D";
//   } else if (score >= 50 && score <= 59) {
//     return "E";
//   } else {
//     return "FAIL";
//   }
// }

// Early return pattern
// function getGrades(score) {
//   if (score >= 90 && score <= 100) return "A";
//   if (score >= 80 && score <= 89) return "B";
//   if (score >= 70 && score <= 79) return "C";
//   if (score >= 60 && score <= 69) return "D";
//   if (score >= 50 && score <= 59) return "E";
//   return "Fail";
// }

// console.log(getGrades(83));
