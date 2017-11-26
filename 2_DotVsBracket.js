
var aFalse = 'aTrue';

var a = {
    aTrue: 'True',
    aFalse: 'False'
};

var x = a.aTrue;
console.log(x);     // -> True

var y = a.aFalse;
console.log(y);     // -> False


/* let the black magic happen! */


var q = a[aFalse];  // ! invokes a value of variable declared outside of the object
console.log(q);     // -> True

var z = a.aFalse;   // ! invokes a value of variable declared inside of the object
console.log(z);     // -> False

