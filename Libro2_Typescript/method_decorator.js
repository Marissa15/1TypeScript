function MethodDecorator(target, // The prototype of the class
propertyKey, // The name of the method
descriptor) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}
