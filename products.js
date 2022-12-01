const products = [
    {
        categoryName:'Jersy',
        id: 'jersy1',
        name: 'Red Rcb Jersey',
        images: ["images/jersy/4.jpg"],
        price: 100,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'

    },
    {
        categoryName:'Jersy',
        id: 'jersy2',
        name: 'Plain Rcb Red Jersey',
        images: ["images/jersy/5.jpg"],
        price: 300,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy3',
        name: 'Plain Rcb Fan Jersey',
        images: ["images/jersy/9.jpg"],
        price: 150,
        DeliveryTime: '1-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy4',
        name: 'All New Rcb Blue Jersey',
        images: ["images/jersy/bluejersy.jpg"],
        price: 600,
        DeliveryTime: '4-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy5',
        name: 'Indian Team Jersey',
        images: ["images/jersy/indian jersy.jpg"],
        price: 110,
        DeliveryTime: '6-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy6',
        name: 'Rcb Red Jersey For Training',
        images: ["images/jersy/5.jpg"],
        price: 145,
        DeliveryTime: '4-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy7',
        name: 'Rcb Dark Green Fan Jersey',
        images: ["images/jersy/jersy3.jpg"],
        price: 190,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy8',
        name: 'Plain Rcb Red Jersey (Women)',
        images: ["images/jersy/15.jpg"],
        price: 180,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy9',
        name: 'Plain Rcb Red Jersey (Kids)',
        images: ["images/jersy/4.jpg"],
        price: 135,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy10',
        name: 'Plain Rcb Red Replica Jersey',
        images: ["images/jersy/replicajersy.jpg"],
        price: 198,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Jersy',
        id: 'jersy11',
        name: 'Plain Rcb Red Fan Jersey',
        images: ["images/jersy/fanjersy.jpg"],
        price: 160,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Shoes',
        id: 'shoes1',
        name: 'Rcb Red Yellow Shoes',
        images: ["images/shoes/shoes.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Shoes',
        id: 'shoes2',
        name: 'Puma White Golden Shoes',
        images: ["images/shoes/shoes2.jpg"],
        price: 450,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Shoes',
        id: 'shoes3',
        name: 'All New Blue One8 Shoes',
        images: ["images/shoes/shoes3.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat1',
        name: 'CA Bat',
        images: ["images/bats/ca.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat2',
        name: 'All New GM',
        images: ["images/bats/gm.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat3',
        name: 'GRAY-NICOLLS New Light Weight Series',
        images: ["images/bats/gray-nicolls.jpg"],
        price: 770,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat4',
        name: 'KOOKABURA New Gen',
        images: ["images/bats/kokobura.jpg"],
        price: 990,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat5',
        name: 'NIKE With Sharp Blade',
        images: ["images/bats/nike.jpg"],
        price: 550,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat6',
        name: 'SS Master',
        images: ["images/bats/ssmaster.jpg"],
        price: 540,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat7',
        name: 'TON F-196',
        images: ["images/bats/ton.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat8',
        name: 'ADIDDAS New Edition',
        images: ["images/bats/adidas.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat9',
        name: 'CE-125',
        images: ["images/bats/gm.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat10',
        name: 'DSC',
        images: ["images/bats/dsc2.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat11',
        name: 'DSC Series-2',
        images: ["images/bats/dsc.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat12',
        name: 'MRF New Edition',
        images: ["images/bats/mrf.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat13',
        name: 'NEW-BALANCE New Edition',
        images: ["images/bats/nb.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat14',
        name: 'NEW-BALANCE Series-2 Edition',
        images: ["images/bats/nb2.png"],
        price: 150,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Bats',
        id: 'bat15',
        name: 'NB-3',
        images: ["images/bats/newbalance.jpg"],
        price: 250,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove1',
        name: 'KOOKABURA Keeping Green Gloves',
        images: ["images/gloves/kokokeepinggloves.jpg"],
        price: 150,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove2',
        name: 'KOOKABURA Green Gloves',
        images: ["images/gloves/kokobura2 gloves.jpg"],
        price: 750,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove3',
        name: 'PUMA Gloves',
        images: ["images/gloves/pumagloves.jpg"],
        price: 50,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove4',
        name: 'BAS Gloves',
        images: ["images/gloves/basgloves.jpg"],
        price: 10,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove5',
        name: 'KOOKABURA Red Gloves',
        images: ["images/gloves/kokoburagloves.jpg"],
        price:20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove6',
        name: 'SG Red Gloves',
        images: ["images/gloves/sggloves.jpg"],
        price: 20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove7',
        name: 'SS Keeping Gloves',
        images: ["images/gloves/sskeepinggloves.jpg"],
        price: 20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove8',
        name: 'SS Red Gloves',
        images: ["images/gloves/ssgloves.jpg"],
        price: 20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove9',
        name: 'MRF Gloves',
        images: ["images/gloves/mrfgloves.jpg"],
        price: 20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Gloves',
        id: 'glove10',
        name: 'SG Keeping Gloves',
        images: ["images/gloves/sgkeeepinggloves.jpg"],
        price: 20,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Pads',
        id: 'pad1',
        name: 'MAC Golden Pads',
        images: ["images/pads/goldenads.jpg"],
        price: 220,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Pads',
        id: 'pad2',
        name: 'MRF Red Pads',
        images: ["images/pads/mrfpads.jpg"],
        price: 220,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Pads',
        id: 'pad3',
        name: 'PUMA Blue Pads',
        images: ["images/pads/puma bluepads.jpg"],
        price: 22,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Pads',
        id: 'pad4',
        name: 'PUMA White Pads',
        images: ["images/pads/whitepumapads.jpg"],
        price: 220,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask1',
        name: 'RCB Designed Mask',
        images: ["images/mask/mask1.jpg"],
        price: 2,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask2',
        name: 'RCB Grey Mask',
        images: ["images/mask/mask2.jpg"],
        price: 2,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask3',
        name: 'RCB Red Mask',
        images: ["images/mask/mask3.jpg"],
        price: 2,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask4',
        name: 'RCB Red Strip Mask',
        images: ["images/mask/mask5.jpg"],
        price: 6,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask5',
        name: 'RCB Red Mask',
        images: ["images/mask/mask6.jpg"],
        price: 7,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask6',
        name: 'RCB Go Green Mask',
        images: ["images/mask/mask6green.jpg"],
        price: 3,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask7',
        name: 'Play Bold Mask',
        images: ["images/mask/mask7.jpg"],
        price: 5,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask8',
        name: 'RCB Pair Of 2 Mask',
        images: ["images/mask/maskpairof2.jpg"],
        price: 9,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Mask',
        id: 'mask9',
        name: 'RCB Pair Of 3 Mask',
        images: ["images/mask/maskpairof3.jpeg"],
        price: 5,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Caps',
        id: 'cap1',
        name: 'RCB Black Cap',
        images: ["images/caps/cap.jpg"],
        price: 55,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Caps',
        id: 'cap2',
        name: 'RCB Red Black Cap',
        images: ["images/caps/cap2.jpg"],
        price: 59,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Caps',
        id: 'cap3',
        name: 'RCB Cap',
        images: ["images/caps/cap3.jpg"],
        price: 45,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Caps',
        id: 'cap4',
        name: 'RCB Red Cap',
        images: ["images/caps/cap4.jpg"],
        price: 85,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Caps',
        id: 'cap5',
        name: 'RCB-PUMA Red Mask',
        images: ["images/caps/cap5withpumasticker.jpg"],
        price: 25,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Slipper',
        id: 'slipper1',
        name: 'RCB Slipper',
        images: ["images/sleepers/sleepers.jpg"],
        price: 75,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    },
    {
        categoryName:'Slipper',
        id: 'slipper2',
        name: 'RCB-PUMA Slipper',
        images: ["images/sleepers/sleepers2.jpg"],
        price: 35,
        DeliveryTime: '5-7 days',
        instock:'In-Stock'
    }   
    
]

var cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log(cart);

$(".totalcartitems").text(`
      ${cart.length}
`)

if(cart.length == 0){
    $(".totalcartitems").css("display" , "none")  
}