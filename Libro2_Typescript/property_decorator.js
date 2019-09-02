function PropertyDecorator(target, // The prototype of the class
propertyKey // The name of the property
) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}
//class PropertyDecoratorExample {
//@PropertyDecorator
//name: string;
//}
