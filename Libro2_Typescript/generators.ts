function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++;
    }
}
var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); 
}

function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
console.log(gen.next()); 
// Accede a la variable por que se le ha dicho apesar de que el 'yield' no ha sido efectuado.
