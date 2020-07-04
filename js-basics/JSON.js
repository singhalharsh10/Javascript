// OOP in javascript




//Allows to create objects without defining clas


// Objects

// Onr way of Crating Objects(JSON)
var bird={
    x:100,
    u: 10.50,
    color: "red",
    eggs:[1,2,3,4],


    fly:function(){
        console.log("Bird is Flying",this.x,this.u);
    }




};

// for loop
for( let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}


//  For each loop

bird.eggs.forEach(function(idx,val){
    console.log(idx,val);
})