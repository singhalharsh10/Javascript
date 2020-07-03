
// Function has been successfully executed even before delclaration
// Works with a 2 pass way  also known as hoisting.It means firsr intepreter will read all functions and moves them at the top and then executes statements by order no matter whether they are above function or not
console.log(alpha())
// console.log(gamma())  it will give eroor as the function initialised by let type cannot be call before declearation


function alpha(){
    
     return 'A'
 }

 function beta(){
     return 'B'
 }

 let gamma = function()
 {
     return "C"
 }


//  var vs let
// var works in cached wa y
 
 console.log(gamma())


//  polymorphism in JS

function area (height , width)
{
return height*width;
}


function marea(height, width)
{
    if( typeof width ===  'undefined'  )
    return Math.PI* height* height;
    else
    return Math.PI* height * width;
}


console.log(area(3,4))

//    error (not a number) ass second argument become undefined
console.log('area 4', area(4))

console.log('area 4', marea(4))