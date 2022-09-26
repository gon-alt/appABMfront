const deleteProduct = async (_id) => {
  console.log(_id)
  try {
    await fetch(`http://appabm.azurewebsites.net/api/v1/products/${_id}`, {
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
  fetch(`http://appabm.azurewebsites.net/api/v1/products/${_id}`, {
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
