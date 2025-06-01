// #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// a = 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// Error : we cannot reassign a value to a constant variable

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// Error : we cannot reassign a value to a constant variable 


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
//inside the funcFive function hello

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
//funcSix()
// inside the funcSix function test
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// inside the funcSix function test

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// in the if block 5
// outside of the if block 2
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// in the if block 5
// outside of the if block 2
