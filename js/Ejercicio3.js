// EJERCICIO 3
// La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si
// reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
// a. Si el usuario tiene 10 años o menos, recibe un jugo.
// b. Si el usuario es mayor de 18 años, recibe una cerveza.
// c. Si el usuario es mujer, además recibe una porción de pizza Hawaiana.
// d. Si el usuario es hombre, además recibe una porción de pizza de tres
// carnes.
// e. Si el usuario no cumple con ninguna condición, se le debe informar que no
// recibe ningún premio.


function Pizzeria() {
    let Edad = parseInt(prompt("Ingresa tu edad"));
    let genero = (prompt("¿Que genero tienes m o f ?")).toLocaleLowerCase();
    let premio = "";



    if (Edad <= 10){
        premio = "Ganaste un jugo"    
    }else if (Edad >= 18){
        premio = "Ganaste una Cerveza"
    }

    
    if (genero === "f"){
        premio += " y ganaste una pizza Hawaiana por ser Mujer"     
    }else if(genero === "m"){
        premio += " y ganaste una pizza de tres carnes por ser hombre"
    }


    if(premio === ""){
        premio = "No ganas nada"
    }

    alert(premio)
}
window.onload = Pizzeria;