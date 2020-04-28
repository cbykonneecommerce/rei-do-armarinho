/*function strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
 }*/
 //FUNCAO ACIMA PARA FILTRAR TEXTO DE HTML PURO
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");


$(document).ready(function() {
    const price = skuJson.skus[0].bestPrice;
    if( price < 10000) {
        $(".valor-dividido").hide();
        $(".shipping-box").hide()
    }
  

    let descriptionShort = $(".productDescription").text();
    descriptionShort = descriptionShort.slice(0, 150)
    $("#description-inside").html(`<p>${descriptionShort}...<p> <a id="shortdes" style="color: #4F4F4F;text-decoration: underline;" href="#description">ver mais</a>`)
      $("#shortdes").click(()=>{
        $(".product-description-box #specification").fadeOut()
        $(".product-description-box #description").fadeIn()
      })
  
    
});

/*setTimeout(function () {
    $(".desk-info-nav a#first").css({"color":"#BEBEBE"});
    $(".product-info .shipping-box label", "body").prepend(`<img src="/arquivos/truck.png" style="margin-right: 10px" >`)
    $(".glis-popup-link.glis-thickbox.tb-added.qvBinded", "body").html(`<img src="/arquivos/CORACAO.png" style="max-width: 18px"> ADICIONAR A LISTA DE DESEJOS`);
    $("#TB_closeWindowButton").html(`<img src="/arquivos/menu-close.png" style="max-width:25px"/>`);
}, 1000);*/


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

$(".product-sku-selector-btn").click(()=>{
    $(".product-resume").hide();
   $(".selector-sector").fadeIn();
})



