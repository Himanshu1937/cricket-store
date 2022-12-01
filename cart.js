

var total = 0;

function appendProducts() {
  total = 0;
  $(".cartbox1").empty();
  cart.forEach((element) => {
    total += element.product.price * element.qty;
    $(".cartbox1").append(`            
    <div class="addeditem">
        <div class="additembox1">
        <img src="${element.product.images}" alt="">
        <div>
        <h3>${element.product.name}</h3>
        <h3>${element.product.categoryName}</h3>
        <select name="totalqunt" id="qnt"  onchange=update('${element.product.id}')>
           <option class="options" ${element.qty == 1 ? 'selected' : ''} value="1">Qnt 1</option>
           <option class="options" ${element.qty == 2 ? 'selected' : ''} value="2">Qnt 2</option>
           <option class="options" ${element.qty == 3 ? 'selected' : ''} value="3">Qnt 3</option>
           <option class="options" ${element.qty == 4 ? 'selected' : ''} value="4">Qnt 4</option>
        </select>
        </div>
        </div>
        <div class="additembox2">
         <h3>Total: ${element.product.price}</h3>
        </div>
        <div class="additembox3" onclick=remove('${element.product.id}') >
        Remove
        </div>
    </div>
</div>
    `);
  });
  $('.get_price').text(total)
}

appendProducts();

$(".cartbox2").append(`
<h1>Price Details</h1>
<div class="cardtotal">
     <p>Card Total</p>
     <p class="get_price">${total}</p>
</div>
<div class="ordertotal">
    <p>Order Total</p>
    <p class="get_price">${total}</p>
</div>
<div class="deliverycharges">
<p>Delivery Charges</p>
<p>${0}</p>
</div>    
<div class="total">
<p>Total</p>
<p class="get_price">${total}</p>
</div>  
<button  class="buttonlogin"> Checkout </button>
`);

$(".cartheading").text(`
        <h1>My Cart (${cart.length} items)</h1>
        <h1>Total : ${total}</h1>
`);



// remove product from array

function remove(pid) {
  console.log('remove called')
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id == pid) {
      cart.splice(i, 1);
    }
  }
  localStorage.setItem('cart',JSON.stringify(cart))
  console.log(cart.length);
  appendProducts();
  $(".totalcartitems").text(`
      ${cart.length}
`)

}

// cart append total items present in cart

$(".totalcartitems").text(`
      ${cart.length}
`)

function update(id) {
  console.log(($('#qnt').val(),typeof(($('#qnt').val()))))
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id == id) {
      cart[i].qty = Number($('#qnt').val());
    }
  }
  localStorage.setItem('cart',JSON.stringify(cart))
  appendProducts()
}

// login form 
$(".buttonlogin").on("click" , function(){
  $(".loginform").css("display" , "block")
})
$(".loginform i").on("click" , function (){
  $(".loginform").css("display" , "none")
})
     
