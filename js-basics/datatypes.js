// finction in js

function a()
{
    return 1
}


let b=1;

console.log(b);

// let a= [1,2,3,4];
// console.log(a);


// Variables
c=20;     //Globsl Varible
var e=30;   //Functiom Scope

function fun()
{
    let a=5;
    if(a===5)
    {
        b=10;
        console.log(b);
    }
    console.log(b);  ///It will print value 1
}


let f=23;  ///Block Scope











console.log(typeof 133)
console.log(typeof 345.65)


console.log(typeof 'a')
console.log(typeof "sdfgg")
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(a,typeof a)
console.log(a(), typeof a())


a()
b()  //Not a function so  runtimee rror

console.log(a,b)
console.log((a) (b))