//Decide qual foto mostrar baseado na existencia ou não de variação de SKU

function cardhandler() {
    $(".box-item").each( async function(index) {
        let myId = $(".product-name a span", this).text();
        myId= parseInt(myId);
        let moreThanOne = false
        await vtexjs.catalog.getProductWithVariations(myId).done(function(product){
            console.log(product);
            if(product.skus.length > 1) {
                moreThanOne = true
            }
   // console.log(moreThanOne)
        
        });
    
        if(moreThanOne) {
            $(".product-image .onlyOne", this).hide();
            $(".product-image .manyvariations", this).show();
        } 
      
       })
}


cardhandler();

$(".carregar-prox-pg").on("click",function(){
    cardhandler();
    setTimeout(function(){
        cardhandler();
    }, 2300)

  
});

setInterval(() => {
    cardhandler();
}, 1000);





   
