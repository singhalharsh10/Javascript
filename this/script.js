function checkthis() {
    console.log(this);
}

let obj = {
    a: 10,
    b: "asd",
    c: true,

    // On calling obj.d() on console  we get object itself which means this is pointing to the object
    d: function() {
        console.log(this);
    },

    e: {
        m: 5,
        n: "evfv",
        o: function() {
            console.log(this);
        }
    }

}