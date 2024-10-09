// EJERCICIO 4
// Crear un algoritmo que permita al usuario seleccionar productos de un menú
// escribiendo el nombre del producto. Cada selección sumará el precio del
// producto al total, hasta que el usuario escriba "pagar". Al finalizar, el programa
// mostrará el total a pagar.
// Las opciones del menú puede ser definido por el programador
// Pista: Se puede realizar con 2 arrays o con 1 array de objetos
  function seleccionarProductos() {
    let total = 0;
    let seleccion;

    const menu = [
        { nombre: 'Mouse Logitech', precio: 40000 },
        { nombre: 'Teclado Logitech', precio: 80000 },
        { nombre: 'Torre Asus', precio: 5400000 },
        { nombre: 'Mouse primus', precio: 20000 },
        { nombre: 'Teclado Primus', precio: 55000 },
        { nombre: 'Torre hp', precio: 4200000 }
      ];
  
    while (true) {
      seleccion = prompt("Escribe el nombre del producto que deseas (o 'pagar' para finalizar):");
      
      // Verificar si el usuario quiere pagar
      if (seleccion.toLowerCase() === 'pagar') {
        alert(`El total a pagar es: $${total.toFixed(2)}`);
        break;
      }
  
      // Buscar el producto seleccionado en el menú
      const producto = menu.find(item => item.nombre.toLowerCase() === seleccion.toLowerCase());
  
      // Si el producto existe, agregar su precio al total
      if (producto) {
        total += producto.precio;
        alert(`Has agregado ${producto.nombre} por $${producto.precio.toFixed(2)}. Total actual: $${total.toFixed(2)}`);
      } else {
        // Si el producto no se encuentra en el menú
        alert("Producto no encontrado. Inténtalo nuevamente.");
      }
    }
  }
  
  // Ejecutar la función para comenzar el proceso
  seleccionarProductos();
  
