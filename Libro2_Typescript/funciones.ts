function padLeft(value: string, padding: string | number) {

    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string"){
        return Array(padding.length + 1).join(" ") + value;
    }

}

console.log(padLeft("hello", "aaa")); //funcion con texto (si compila)
console.log(padLeft("hello", 5)); //funcion con numeros (si compila)
// ejemplo de funcion con texto ---> console.log(padLeft("hello", true));