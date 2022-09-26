const product = { name: '', price: 0 }


function resetform() {
  document.getElementById("form").reset();
}

function Create() {
  
  const name = document.getElementById("pname").value
  const price = document.getElementById("pprice").value
  
  if (name == "") {
      alert("Debes compeltar el nombre del producto"); 
  }else{
  product.name = name
  product.price = price

  fetch(`http://appabm.azurewebsites.net/api/v1/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      
      resetform();
      console.log('Producto creado con éxito')
    })
    .catch((err) => {
      console.log({ err })
    })
  }
}
