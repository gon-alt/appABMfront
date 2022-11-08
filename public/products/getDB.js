const deleteProduct = async (_id) => {
  console.log(_id)
  try {
    await fetch(`https://appabm.azurewebsites.net/api/v1/products/${_id}`, {
      method: "DELETE",
    });
    router.push("/products/getDB");

  } catch (error) {
    console.log(error);
  }
  location.reload()
};


let url = `https://appabm.azurewebsites.net/api/v1/products/`;
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

const mostrarData = (data) => {
  
  let body = ""
  for (var i = 0; i < data.length; i++) {
    body += `<tr class="tabla">
                <td>${data[i]._id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].price}</td>                
                <td>                  
                    <button class="button1" onclick="Edit('${data[i]._id}')">Editar</button>
                </td>
                <td>
                  <button class='button1' type="button" onclick=deleteProduct('${data[i]._id}')>Eliminar</button>
                </td>  
              </tr>`
  }
  document.getElementById('data').innerHTML = body

}

const product = { name: '', price: 0 }

function resetform() {
  document.getElementById("form").reset();
}

function Edit(_id) {
  let name = document.getElementById('pname').value
  let price = document.getElementById('pprice').value
  
  if (name == "") {
      alert("Debes compeltar el nombre del producto"); 
  }
  product.name = name
  product.price = price
  try{
  fetch(`https://appabm.azurewebsites.net/api/v1/products/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }) 

  console.log('Producto modificado con éxito')

  }catch (error) {
    console.log(error);
  }
  setTimeout(resetform, 500 );  
  }

function resetform() {
  document.getElementById("form").reset();
  location.reload();
}
// ## reloj para estimar tiempo de reaccion del servidor en mostrar la DDBB

// document.addEventListener("DOMContentLoaded", () => {
// 	const $tiempoTranscurrido = document.querySelector("#tiempoTranscurrido"),
// 		$btnIniciar = document.querySelector("#btnIniciar"),
// 		$btnPausar = document.querySelector("#btnPausar"),
// 		$btnMarca = document.querySelector("#btnMarca"),
// 		$btnDetener = document.querySelector("#btnDetener"),
// 		$contenedorMarcas = document.querySelector("#contenedorMarcas");
// 	let marcas = [],
// 		idInterval,
// 		tiempoInicio = null;
// 	let diferenciaTemporal = 0;
	
// 	// const ocultarElemento = elemento => {
// 	// 	elemento.style.display = "none";
// 	// }

// 	// const mostrarElemento = elemento => {
// 	// 	elemento.style.display = "";
// 	// }

// 	const agregarCeroSiEsNecesario = valor => {
// 		if (valor < 10) {
// 			return "0" + valor;
// 		} else {
// 			return "" + valor;
// 		}
// 	}

// 	const milisegundosAMinutosYSegundos = (milisegundos) => {
// 		const minutos = parseInt(milisegundos / 1000 / 60);
// 		milisegundos -= minutos * 60 * 1000;
// 		segundos = (milisegundos / 1000);
// 		if (segundos == 20){
// 			detener();
// 		}
// 		return `${agregarCeroSiEsNecesario(minutos)}:${agregarCeroSiEsNecesario(segundos.toFixed(1))}`;
// 	};


// 	const iniciar = () => {
// 		const ahora = new Date();
// 		tiempoInicio = new Date(ahora.getTime() - diferenciaTemporal);
// 		clearInterval(idInterval);
// 		idInterval = setInterval(refrescarTiempo, 100);
// 		// ocultarElemento($btnIniciar);
// 		// ocultarElemento($btnDetener);
// 		// mostrarElemento($btnMarca);
// 		// mostrarElemento($btnPausar);
		
// 	};
// 	// const pausar = () => {
// 	// 	diferenciaTemporal = new Date() - tiempoInicio.getTime();
// 	// 	clearInterval(idInterval);
// 	// 	mostrarElemento($btnIniciar);
// 	// 	ocultarElemento($btnMarca);
// 	// 	ocultarElemento($btnPausar);
// 	// 	mostrarElemento($btnDetener);
// 	// };
// 	const refrescarTiempo = () => {
// 		const ahora = new Date();
// 		const diferencia = ahora.getTime() - tiempoInicio.getTime();
// 		$tiempoTranscurrido.textContent = milisegundosAMinutosYSegundos(diferencia);
//     $tiempoTranscurrido = milisegundosAMinutosYSegundos(diferencia);
// 	};
// 	// const ponerMarca = () => {
// 	// 	marcas.unshift(new Date() - tiempoInicio.getTime());
// 	// 	dibujarMarcas();
// 	// };
// 	// const dibujarMarcas = () => {
// 	// 	$contenedorMarcas.innerHTML = "";
// 	// 	for (const [indice, marca] of marcas.entries()) {
// 	// 		const $li = document.createElement("p");
// 	// 		$li.innerHTML = `<strong class="is-size-4">${marcas.length - indice}.</strong> ${milisegundosAMinutosYSegundos(marca)}`;
// 	// 		$li.classList.add("is-size-3");
// 	// 		$contenedorMarcas.append($li);
// 	// 	}
// 	// };

// 	const detener = () => {
// 		if (!confirm("Actualizar para ver Base de datos")) {
// 			return;
// 		}
// 		clearInterval(idInterval);
// 		init();
// 		marcas = [];
// 		dibujarMarcas();
// 		diferenciaTemporal = 0;
// 	}

// 	const init = () => {
		
// 		$tiempoTranscurrido.textContent = "00:00.0";		
		
// 	};
// 	init();
//   	iniciar();
//   });
