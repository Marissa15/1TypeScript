function Person1(age) {
    this.age = age
    // aquí el this es el objeto y no quien hace la llamada
    this.growOld = () => {
        this.age++;
    }
  }
  var person1 = new Person1(1);
  setTimeout(person1.growOld,1000);
  setTimeout(function() { console.log(person1.age); },2000); //devuelve 2
  
  class Person2 {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
  }
  var person2 = new Person2(1);
  setTimeout(person2.growOld,1000);
  setTimeout(function() { console.log(person2.age); },2000); // 2
  