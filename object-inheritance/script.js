let obj1 = {
    a: 10,
    b: 20,
    c: 50
}

let obj2 = Object.create(obj1)

// obj2==obj1 //false

/*
obj2.a-> it will try to find a in obj2
->if not found
->it will tr to find in obj2.proto
->if not found
->it will try to find in obj2._proto._proto__
->and so on till ._proto becomes null

*/

obj2.p = 'dwffr'
obj2.q = 'dwf'
obj2.r = 'adcdcd'

let obj3 = Object.create(obj2)

// obj3.__proto==obj2  //true
// obj3>__proto__.__proto__==obj1 //true
// obj3.__proto__.__proto__.__proto__.__proto==NULL//true