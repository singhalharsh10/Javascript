// abstract equality check only values (values must be same but datatypes can be differnet )
console.log(1 == '1') // True

//real equality(datatypes as well as values must be same)

console.log(1 === '1') //false

// peculiar cases
console.log(0 == '') //true because number(' ')==0

console.log('false' == false) //false because Number('false)==NaN & Number(false)=0

console.log('' == false) //true
console.log('\n' == 0) //true
console.log('\t' == 0) //true

// this doesn't hold for abstract equality
// a==b,b==c,a==c


console.log('\n' == '\t') //false

console.log([1, 2] == [1, 2]) //flase  array are iffernet though elements ae same