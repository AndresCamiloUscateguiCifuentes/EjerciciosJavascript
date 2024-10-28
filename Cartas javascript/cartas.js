// ------------ Puntos a realizar --------------------

// en "total productos" se debe mostrar la cantidad de elementos seleccionados por el ususario.
// en "subtotal" se debe mostar el valor total de los elementos dependiendo de la cantidad.
// en "ahorro" se debe mostrar el descuento de "5 dolares" si hay mas de 5 articulos.
// en "total a pagar" se debe mostrar el valor total menos el "ahorro".
// la cantidad de productos no debe poder bajar nemos de "0"

const elementosCocina = [
    { id: 1, 
      nombre: "Sartén Antiadherente", 
      precio: 25.99, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yZ_PxjZ7YCnXT4VCnslyU2j0Mxr0ZO-cMw&s" },
    { id: 2, 
      nombre: "Cuchillo Chef", 
      precio: 18.50, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Tik7ZJfwwU8iOhfJsoRZ9j6qLvU5WSfcg&s" },
    { id: 3, 
      nombre: "Tabla de Cortar", 
      precio: 12.75, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn4jjm12FseOdd69lIZuAhM8430td1weBkg&s" },
    { id: 4, 
      nombre: "Olla de Acero Inoxidable", 
      precio: 35.00, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aK2b4HIOkOwMY85IjkwiC8imDt_AUggUow&s" },
    { id: 5, 
      nombre: "Batidora de Mano", 
      precio: 29.99, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM_P7EhOLvK0CjdHuSbBRJFA0blhRHNq-Ugw&s" },
    { id: 6, 
      nombre: "Tetera Eléctrica", 
      precio: 22.50, 
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VlNNZOrbLiSB-iHJ3xQhcl5RI3XIJFgzkg&s" }
  ];

  let NumerodeProductos = 0;
  let TotalParcial = 0;
  const Ahorro = 5;

  function CargarTotales() {
    document.getElementById("Total").innerText = `Total productos: ${NumerodeProductos}`;
    document.getElementById("Totalito").innerText = `Subtotal: $${TotalParcial}`;
    
    let Descuentito;

    if (NumerodeProductos > 5) {
        Descuentito = Ahorro;
      } else {
        Descuentito = 0;
      }

    document.getElementById("Gangaso").innerText = `Ahorro: $${Descuentito}`;
    const PagoTotal = TotalParcial - Descuentito;
    document.getElementById("Totalidad").innerText = `Total a pagar: $${PagoTotal}`;
  }

  let htmlContent = "";
  elementosCocina.forEach((element, index) => {
      htmlContent += `                        
        <div class="card tarjeta col-3" style="width: 16rem;">
          <img src="${element.imagen}" class="card-img-top imagen" alt="${element.nombre}">
          <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <div class="d-flex justify-content-center py-0">
              <p class="btn btn-primary py-0 mt-4">$${element.precio}</p>
            </div>
            <div class="d-flex justify-content-center ">
              <i id="Hola${index}" type="button" class="fa-solid fa-arrow-left me-2"></i>
              <p id="que${index}" class="fw-bold fs-3 cantidad mb-0">0</p>
              <i id="sapo${index}" type="button" class="fa-solid fa-arrow-right ms-2"></i>
            </div>
          </div>
        </div>`;
    });

    productos.innerHTML = htmlContent;
    elementosCocina.forEach((element, index) => {
        let Unidades = 0;
        let Positivo = document.getElementById(`sapo${index}`);
        let Negativo = document.getElementById(`Hola${index}`);
        let Numerador = document.getElementById(`que${index}`);
        
        Positivo.addEventListener("click", () => {
            Unidades++;
            NumerodeProductos++;
            TotalParcial += element.precio;
            
            Numerador.innerText = Unidades;
            CargarTotales();
        });

        Negativo.addEventListener("click", () => {
            if (Unidades > 0) {
            Unidades--;
            NumerodeProductos--;
            TotalParcial -= element.precio;
              
            Numerador.innerText = Unidades;
            CargarTotales();
            }
          });
        });


  