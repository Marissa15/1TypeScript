class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

//EFECTOS EN UNA INSTANCIA
var foo = new FooBase();
foo.x;
// error : private foo.y;
// error : protected foo.z;

//EFECTOS EN UNA CLASE HIJA
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; //ok
        // error : private this.y;
        this.z; //ok
    }
}