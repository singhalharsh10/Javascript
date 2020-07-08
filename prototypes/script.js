let str = 'dwf'
let num = 23
let bool = true
let arr = [1, 2, 3, 4]
let obj = {
    a: 10,
    b: 'cadw'
}

// if x and y are not primitive 
// x == y : true <- what does this mean ? 
// this means they are reference to the same object in memory 

console.log('======= types =======')
console.log('typeof String', typeof String)
console.log('typeof Boolean', typeof Boolean)
console.log('typeof Number', typeof Number)
console.log('typeof Array', typeof Array)
console.log('typeof Object', typeof Object)
console.log('typeof Function', typeof Function)

console.log('======= proto chain =======')
console.log(str.__proto__.__proto__ == obj.__proto__)
console.log(num.__proto__.__proto__ == obj.__proto__)
console.log(bool.__proto__.__proto__ == obj.__proto__)
console.log(arr.__proto__.__proto__ == obj.__proto__)
    // console.log(fun.__proto__.__proto__ == obj.__proto__)


// Everything indirectly inherits from the same thing
// that obj is inherited from 
// i.e. in Javascript, everything is essentially an Object


console.log('************prototypes**********')
console.log(obj.__proto__ == Object.prototype)
console.log(str.__proto__ == String.prototype)
console.log(num.__proto__ == Number.prototype)


// Prototype wali inheriatanve datatype ko maintain kre not same
// String.prototype inherits from Object.prototype

// typeof Object.create(Boolean.prototype) -> ??


// .__proto__ is a pointer which points to that object from which current object has been inherited
// .prototype is predefined from which objects made
// example- Object.prototype will make x and x.__proto__ will point ki vo kha se bankar aaya h
//  let x=Object.create(object.prototype)
//  x.__proto__





console.log(str.charAt(4))
console.log(typeof str.charAt) // ? 
let str2 = "dgndgn"
console.log(str.charAt == str2.charAt) // true it means both are made from same 

str.charAt = function() { return 'X' } // does not make a difference not gets exexcuted

String.prototype.charAt = function() { return 'X' } //Gets executed as we have changed the definition of function on level(Prototype) on which it is working
console.log(str.charAt(1))

// String.prototype contains all default string functions
// like charAt, indexOf, substring, slice etc 

// Join normal syntax
// [1,2,3,4].join['any sign']



Array.prototype.joinOriginal = Array.prototype.join

Array.prototype.join = function() {
        console.log('join called on', this)
        return this.joinOriginal(...arguments)
    }
    /**
     * Array.prototype 
     * {
     *  .... 
     *  joinOriginal: function () {},
     *  join: function () { our fun },
     *  ....
     * }
     */