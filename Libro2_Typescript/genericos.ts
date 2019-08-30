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

//var a = echo("aaa");
//var t = echo({length: 2, name: "aa"});

//esto no funciona
//var b = echo(1);

//function copyFields<T extends U, U>(source: T, target: U) : U {
  //  for(let id in source){
    //    if(target[id] != undefined){
        //    source[id] = target[id];
      //  }else {
          //  target[id] = source[id];
      //  }
   // }

    //return target;
//}

//let a = {a: 1, b: 2, c: 3};
//let b = copyFields (a, {b: 10, c:20}); // Esto funcionará
//let c = copyFields (a, {Q: 20}); // Esto NO funcionará
//console.log(b); // 1, 10, 20
//console.log(c); // Lo devuelve si lo compilas a pesar de saber que está mal
