// EJERCICIO 5
// Crear un algoritmo que muestre la tabla de multiplicar de un número ingresado por
// el usuario hasta un límite también especificado por el usuario. Además, el
// programa debe mostrar el total de las multiplicaciones.
function Multiplicacion(){

    let n = parseInt(prompt("Ingresa un numero del 1 en adelante"))
    let L = parseInt(prompt("Ingresa hasta que numero quiere multiplicar"))

    if (isNaN(n) || n <= 0 || isNaN(L) || L <= 0){
        alert("Lo que ingresaste no es numero valido")
        return
    }
    let total = 0;
    let tablas = "";

    for (let i = 1; i <= L; i++){
        let solucion = n * i;
        tablas += n + " x " + i + " = " + solucion + "\n";
        total += solucion;
    }
    alert("La tabla de multiplicacion del " + n + " hasta el " + L + " \n\n " + tablas)
    alert("La suma de los totales multiplicados es: " + total)
}
window.onload = Multiplicacion;