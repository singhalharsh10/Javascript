class Person {
    constructor(name, age) {
            this.name = name
            this.age = age
        }
        //Function
    isAdult() {
        return this.age >= 18
    }
}

let p1 = new Person('Harsh', 23)
let p2 = new Person('Abhi', 13)



console.log(typeof Person) //Function

// When we create a class to uska prototype ban jaata h jiska proto object k prototype se same hoga
console.log(p1.__proto__ == Person.prototype)
console.log(p1.__proto__.__proto__ == Object.prototype)


// p1.__proto__.isAdult()


// yntax of Inheritance

class Student extends Person {
    constructor(name, age, grade) {
        // Sbse phle peson ka constructor chalega
        // Synatx for running constructor of parent
        super(name, age)
        this.grade = grade
    }
}

let s1 = new Student('Harry', 13, 'A')


console.log(s1.__proto__ == Student.prototype)
console.log(s1.__proto__.__proto__ == Person.prototype)
console.log(s1.__proto__.__proto__.__proto__ == Object.prototype)
console.log(s1.__proto__.__proto__.__proto__.__proto__ == null)

// inheritance chain 
// Object.prototype -> Person.prototype -> Student.prototype

// no inheritance between the classes (actually they are functions)
// Object -x-> Person -x-> Student