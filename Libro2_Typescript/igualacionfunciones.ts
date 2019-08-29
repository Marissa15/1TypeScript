let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; // OK
//x = y; // Error

let z = () => ({name: 'Alice'});
let a = () => ({name: 'Alice', location: 'Seattle'});

z = a; // OK
//y = x; //Error porque x no tiene la propiedad locacion
