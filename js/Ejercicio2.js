// EJERCICIO 2
// Crear un algoritmo que determine si un número ingresado por el usuario es par o impar

function Algoritmo() {
    let N = parseInt(prompt("Ingresa un numero"))
    if (isNaN(N)){
        alert("No ingresaste un numero vuelve pronto")
        return
    }
    if (N % 2 ===0) {
        alert("El numero "+N+ " que ingresaste es par")     
    }
    else{
        alert("El numero "+N+ " que ingresaste es impar")
    }
}
window.onload = Algoritmo;

