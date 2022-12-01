



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
 
 
