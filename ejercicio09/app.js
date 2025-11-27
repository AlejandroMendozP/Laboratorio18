import multiplicar from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";
import { dividir } from "./multiplicacionDivision.js";

console.log("La suma es "+sumar(4,2));
console.log("La resta es "+restar(4,2));
console.log("La multiplicacion es "+multiplicar(4,2));
try{
    const division = dividir(4,0);
    console.log("La division es "+division)
}
catch (error){
    console.log("Error en division: "+ error.message);
}
try{
    const division = dividir(4,2);
    console.log("La division es "+division)
}
catch (error){
    console.log("Error en division: "+ error.message);
}