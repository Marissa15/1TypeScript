var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x; // OK
//x = y; // Error
var z = function () { return ({ name: 'Alice' }); };
var a = function () { return ({ name: 'Alice', location: 'Seattle' }); };
z = a; // OK
//y = x; //Error porque x no tiene la propiedad locacion
