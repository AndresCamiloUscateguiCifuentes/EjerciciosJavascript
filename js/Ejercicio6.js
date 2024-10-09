// EJERCICIO 6
// Crear un algoritmo que determine el valor de matrícula ($1.000.000) a pagar por
// un estudiante basado en su promedio.
// a. Si el promedio fue menor a 3 no se le descuenta nada.
// b. Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
// c. Cuando el promedio sea mayor que 4, se le descuenta 50%

function ValorMatricula(){

    const matricula = 1000000
    let Promedio = parseInt(prompt("Ingresa tu promedio"))

    if(isNaN(Promedio) || Promedio <= 0){
        alert("Lo que ingresaste no es numero valido")
    }

    let Descuento = matricula

    if (Promedio >=3 && Promedio <=4){
        Descuento -= matricula * 0.05
    }else if(Promedio > 4){
        Descuento -= matricula * 0.50        
    }
    alert("El valor final de su matricula es de " +Descuento)
}
window.onload = ValorMatricula;
