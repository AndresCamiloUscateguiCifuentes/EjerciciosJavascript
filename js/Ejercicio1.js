// EJERCICIO 1
// Crear un algoritmo que solicite al usuario un número n y calcule la suma de todos los números del 1 a n

function SumasNumeros(){
    let N = parseInt(prompt("Ingresa un numero del 1 en adelante"))

    if (isNaN(N) || N <= 0){
        alert("Lo que ingresaste no es numero valido")
        return
    }

    let suma = 0;
    for (let L = 1; L <= N; L++){
        suma += L ;     
    }
    alert("La suma del 1 al " +N+ " es: " +suma)
}
window.onload = SumasNumeros;
