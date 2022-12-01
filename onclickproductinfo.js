// used for searching params from html
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const id = params.id;

console.log(id)

const result = products.filter(p => p.id == id)[0]

console.log(result);

result.images.forEach(img => {
    $(".box1").append(`
    <img src="${img}" alt="">
`)
});


$(".box2").append(`
<img src="${result.images[0]}" alt="">
`)

$(".box3").append(`
<h1>${result.name}</h1>
<p class="series">${result.instock}</p>

<h1 class="productprice">${result.price}</h1>


<div class="sizes">
 <div class="sizecategory">
    <p data-set="S" class="sizeoptions">S</p>
    <p data-set="M" class="sizeoptions">M</p>
    <p data-set="L" class="sizeoptions">L</p>
    <p data-set="XL" class="sizeoptions">XL</p>
<a class="viewsizeguide" href="#">VIEW SIZE GUIDE</a>
 <div class="sizechart" >
    <img src="images/logo/international-mens-t-shirts-jackekts-tanktop-sizechart.jpg" alt="">
    <i class="closesizechart far fa-window-close"></i>
 </div>
</div>

<div class="buyingoptions">
    <div class="buynow">BUY NOW</div>
    <div class="addtocart"><a href="cartpage.html?id=${result.id} ">ADD TO CART</a></div>
</div>
</div>

<div class="categories">
   <p>Category</p>
   <p>${result.categoryName}</p>
</div>

<div  class="categories" >
<p>Delivery Time</p>
<p>${result.DeliveryTime} </p>
</div>

<div  class="categories">
<p>Description</p>
<p class="desclaimer">
N/A
</p>
</div>
`)




$(".addtocart").on("click" , ()=>{
    cart.push({
        qty:2,
        size:$(".sizeoptions.selected").data('set'),
        product: result,
    })
    localStorage.setItem("cart" , JSON.stringify(cart))
})


// sizes on click

$(".sizeoptions").on("click" , function(){
    console.log(this)
   $(".sizeoptions").removeClass("selected") 
   this.classList.add('selected')
})








$(".moreoption").on("mouseover", ()=>{
     $(".moreitems").show()
 })
 $(".moreoption").on("mouseout" ,()=>{
    $(".moreitems").hide()
 })

 $(".moreitems").on("mouseover" , ()=>{
    $(".moreitems").show()
 })
 $(".moreitems").on("mouseout" , ()=>{
    $(".moreitems").hide()
 })


//  

// size guide 

$(".viewsizeguide").on("click" , ()=>{
    $(".sizechart").show()
})

$(".closesizechart").on("click" , ()=>{
    $(".sizechart").hide()
})