

// Another Way
function Fruit(taste,color){
    this.taste=taste;
    this.color=color;
}

let mango=new Fruit("sour","green");

// One Way
var apple = {

    taste: "sweet",
    color:"red"

}


// Classes in JS

// Not  Hoisted(First have to define and them making objects)
class Fruitclas{
    constructor(taste,color)
    {
        this.color=color;
        this.taste=taste;
    }
}


let chiku= new Fruitclas("dsds","dwfw");



// Class Expression(Not hoisted)

let FruitClass= class{
     constructor (taste,color){
         this.taste=taste;
         this.color=color;
     }
}
// making object

let Kiwi= new FruitClass("sdfsvsf","adff");