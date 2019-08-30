class Generic<T> {
    add: (X: T, y:T) => T;
}

let myGeneric = new Generic<number>();

console.log(myGeneric.add = function (x,y) {return x + y});
console.log(myGeneric.add(3,4));

interface withLenght {
    length: number;
}

//function echo<T extends withLength>(arg: T): T {
//    console.log(arg.length);
//    return arg;
//}

//let a = echo("aaa");
//let t = echo({length: 2, name: "aa"});

//let b = echo(1);

function echo(arg) {
    console.log(arg.length);
    return arg;
}

var a = echo("aaa");
var t = echo({length: 2, name: "aa"});

//esto no funciona
//var b = echo(1);