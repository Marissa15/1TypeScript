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

function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
  }
  var gen1 = logGenerator();

  gen.next(); 
  gen.next('pretzel'); 
  gen.next('california'); 
  gen.next('mayonnaise'); 
  
  function getFirstName() {
    setTimeout(function(){
        gen.next('alex')
    }, 1000);
}
function getSecondName() {
    setTimeout(function(){
        gen.next('perry')
    }, 1000);
}
function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b); //alex perry
}
var gen2 = sayHello();
gen.next();
