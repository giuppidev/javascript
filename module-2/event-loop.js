
console.log("A");

setTimeout(function timeout() {
    console.log("B");
}, 2000);

console.log("C");


------

function readFromDB(){
    console.log("Giuppi")
}


function getName(){
    readFromDB();
}


function printName(){
    getName()
}

printName();