/*function strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
 }*/
 //FUNCAO ACIMA PARA FILTRAR TEXTO DE HTML PURO
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");
let canIShowSKUIMG = false;

//SE NAO TIVER VARIAÇÃO E NÃO TIVER ESTOQUE
if(skuJson.skus.length <= 1 && !skuJson.available) {
    $(".buy-button-box .box-qtd").hide();
}






function BatchBuy_OnSkuDataReceived(e) {
    var id = e.skuData.id;
    selectedToBuy = [];
    if (id > 0) {
        console.log(e.skuData);
        if(!e.skuData.availability) {
            $(".buy-button-box .box-qtd").hide();
            $(".product-info .buy-button-box .box-qtd").hide()
        } else {
            $(".buy-button-box .box-qtd").show();
            $(".product-info .buy-button-box .box-qtd").show()
        }
    }
}


function IsOnlyOneSKU() {
    if(skuJson.skus.length == 1) {
        $(".product-sku-selector-btn").hide();
        $("#only-one-sku-sector").show();
    } 

    if(skuJson.skus.length <= 1 && !skuJson.available) {
        $(".buy-button-box .box-qtd").hide();
    }
    
}



IsOnlyOneSKU();
var batchBuyListener = new Vtex.JSEvents.Listener('batchBuyListener', BatchBuy_OnSkuDataReceived);
skuEventDispatcher.addListener(skuDataReceivedEventName, batchBuyListener);

setTimeout(function () {

    IsOnlyOneSKU();
if( !(skuJson.skus.length == 1)) {
    const imgsLength = $(".product-resume .product-image .apresentacao .thumbs li").length;
    let imgProduct = $($(".product-resume .product-image .apresentacao .thumbs li a img")[imgsLength - 1]).attr("src");
    imgProduct = imgProduct.replace(/-70-70/g, '-500-500');

    $(".product-image .zoomPad #image-main").attr("src",imgProduct);
    $(".product-image .zoomWrapperImage img").attr("src",imgProduct)
}



    const price = skuJson.skus[0].bestPrice;
    if( price < 10000) {
        $(".valor-dividido").hide();
        $(".shipping-box").hide()
    }
  

    let descriptionShort = $(".productDescription").text();
    descriptionShort = descriptionShort.slice(0, 150)
    $("#description-inside").html(`<p>${descriptionShort}...<p> <a id="shortdes" style="color: #4F4F4F;text-decoration: underline;">ver mais</a>`)
      $("#shortdes").click(()=>{
        $(".product-description-box #specification").fadeOut()
        $(".product-description-box #description").fadeIn()
        $('html,body').animate({scrollTop: $(".product-description").offset().top - 150});
      })
      $(".product-details .seletor-sku .specification").text("Selecione uma cor")


      
}, 500);


$(".desk-info-nav a").click((e)=>{
    $(".desk-info-nav a").css({"color":"#BEBEBE"});
    $(e.target).css({"color":"#000"});
    if($(e.target).attr("id") == "first") {
        $(".product-description-box #specification").fadeOut()
        $(".product-description-box #description").fadeIn()
    } else if ($(e.target).attr("id") == "last") {
        $(".product-description-box #description").fadeOut()
        $(".product-description-box #specification").fadeIn()
    }

})

/*
$(".dropdown-container").hide();
$(".dropdown-btn#descricao").toggle(() => {

    $(".dropdown-btn#descricao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#descricao").slideDown()
}, () => {
    $(".dropdown-container#descricao").slideUp()
    $(".dropdown-btn#descricao i").attr('class', 'fa fa-plus');
})


$(".dropdown-btn#especificacao").toggle(() => {
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-minus');
    $(".dropdown-container#especificacao").slideDown()
}, () => {
    $(".dropdown-container#especificacao").slideUp()
    $(".dropdown-btn#especificacao i").attr('class', 'fa fa-plus');
})
*/
$(".product-sku-selector-btn").click(()=>{
    $(".product-resume").hide();
   $(".selector-sector").fadeIn();
})

$("#selector-closer").click(()=>{
    $(".product-resume").fadeIn();
   $(".selector-sector").hide();
})


for(let i= 0;i < 4; i++) {
    $(".sku-selector-container ul li.select span").append("<label for='1167_Cor_0' class='hide-me' style='visibility: hidden;'>HIDDEN</label>");

}






