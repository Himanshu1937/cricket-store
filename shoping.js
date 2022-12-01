
// used for searching params from html
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// store params value in const
const cName = params.c;


// 
const result = products.filter( p => p.categoryName == cName)



for (let i = 0; i < result.length; i++) {
    const product = result[i];
    $(".jersy").append(
        `
        <div class="imgcontainer">
            <a href="onclickproductinfo.html?id=${product.id}"><img src="${product.images[0]}" alt=""></a>
            <p>${product.name}</p>
            <h3>${product. price}</h3>
            <br>
            <p  class="adtocrt">Add To Cart</p> <i class="heart fas fa-heart" onclick="addToCart(${i})"></i>
           <a href="onclickproductinfo.html?id=${product.id}"> <button>Buy Now</button></a>
        </div>
        `
    )
}
$(".product1jersy h1").text(
    `${cName}`);

// append in buynow page
result.forEach(element=>{
    $(".box1").append
})


// heart click add to cart]


var cart = [];
if(localStorage.getItem("cart") != null){
     cart = JSON.parse(localStorage.getItem("cart"));
}


function addToCart(i){
    cart.push({
        qty:1,
        size:'',
        product: result[i],
    })
    localStorage.setItem("cart" , JSON.stringify(cart))
}


// crousel
$(document).ready(function () {
    if($(window).width()>575){
        
        console.log('init carosel')
     var owl = $('.owl-carousel').owlCarousel({
         loop: true,
         margin: 0,
         dots: false,
         autoplay:true,
         responsiveClass: true,
         responsive: {
             0: {
                 items: 1,
                 // nav:true
             },
             600: {
                 items: 2,
                 // nav:false
             },
             1000: {
                 items: 3,
                 nav: true,
                 // loop:false
             }
         }
     })
    //  owl.owlCarousel();
 
     $('.button .left').click(function () {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     $('.button .right').click(function () {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     })}
 });
 
 //  header more click

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