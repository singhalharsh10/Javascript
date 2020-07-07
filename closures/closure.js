// Using out of scope things


// function outer() {
//     function inner() {

//     }
//     return inner;
// }

// let x = outer()

// type of x == 'function'

// function outer(arg1) {
//     let var1 = 10;

//     function inner(arg2) {
//         let var2 = 20;
//         console.log(arg1, var1, arg2, var2)
//         console.log(arguments[0])

//     }
//     return inner;
// }

// let x = outer('param1')

// // typeof x==function

// // scope of var1 and arg1 will be entire outer lopp 

// x('param2')

// MY Practice
function outer(arg1) {
    console.log(arg1);
    console.log(arguments[0]);

    function middle(arg2) {
        console.log(arg1, arg2);
        console.log(arguments[0]);

        function inner(arg3) {
            console.log(arg1, arg2, arg3);
            console.log(arguments[0]);
        }
        return inner;
    }
    return middle;
}

let x = outer('param1')
    // let y = le('param2')
let y = x('param2')

y('param3')