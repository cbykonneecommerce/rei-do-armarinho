// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE. THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.



$(document).ready(function () {
  
  


    
    
    window.onhashchange = function() { 
      $("#orderform-title").hide()
        if($("#tracker")) {
            $("#tracker").html("");
        }
      
        if (window.location.href.indexOf("profile") != -1) {
            
        
      $("#is-corporate-client").click();
          $("#not-corporate-client").remove();
          $(".container-order-form").prepend(`<div id="tracker" style="margin-bottom:2em"><img src='/arquivos/id-ball.png'/></div> `)
        } else if (window.location.href.indexOf("shipping") != -1) {
            $(".container-order-form").prepend(`<div id="tracker" style="margin-bottom:2em"><img src='/arquivos/entrega-ball.png'/></div> `)
        } else if (window.location.href.indexOf("payment") != -1) {
            $(".container-order-form").prepend(`<div id="tracker" style="margin-bottom:2em"><img src='/arquivos/pag-ball.png'/></div> `)
        } 
    }
    
                                               
                                               
                                               
                                               
                                               
                                               
                                               
setTimeout(function(){
    $(".srp-content").append("<p id='fob' style='color: #333;font-weight:600;display:none'>Frete FOB (transportadora indicada pelo cliente).<br/>Entraremos em contato para confirmar a transportadora.</p>");
                            
  if($(".srp-delivery-select optgroup").length > 1) {
    $(".srp-delivery-header").append("<span style='display:block'>Clique abaixo para ver todas as opções de frete</span>")
  }

},2000)








setInterval(function(){
    if($(".srp-delivery-select").val() == "CHEAPEST" || $(".srp-delivery-select").val() == "Normal") {
$("#fob").show();
$($(".full-cart .summary-totalizers .monetary")[1]).text("A combinar");
$(".shipping-estimate-date").text("");
$(".shipping-estimate-detail").text("A combinar");
      $("#sla-option-CHEAPEST").text("Frete FOB - A combinar")
      $(".srp-delivery-current-many__price").text("A combinar");
      $(".srp-delivery-current-many__sla").text("A combinar");
      $(".srp-delivery-current-many__name").text("Frete FOB");
      $($(".shp-option-text-label")[0]).text("Frete FOB");
       $($(".shp-option-text-time span")[0]).text("A combinar");
        $($(".shp-option-text-price")[0]).text("A combinar");


        $("#sla-option-Normal").text("Frete FOB - A combinar");
        $($(".srp-delivery-select optgroup")[0]).attr("label", "Frete FOB")
   

    } else if($(".srp-shipping-current-single__sla")) {
      
      if($(".full-cart .summary-totalizers .monetary").text().includes("Grátis")){$($(".full-cart .summary-totalizers .monetary")[1]).text("A combinar")}
      
      $(".shipping-estimate-date").text("");
$(".shipping-estimate-detail").text("A combinar");
      
      $(".srp-shipping-current-single__price").text("A combinar");
      $(".srp-shipping-current-single__sla").text("Frete FOB");
      $(".srp-shipping-current-single__name").text("Frete FOB");
      $($(".shp-option-text-label")[0]).text("Frete FOB");
      
      setTimeout(()=>{ 
        $($(".shp-option-text-price")[0]).text("A combinar");
        $(".vtex-omnishipping-1-x-leanShippingTextLabelSingle").text("Frete FOB")
                     
                     },1000)
     
   
      $("#fob").show();
      
    }  else {
        $("#fob").hide();
    } 


    if($(".srp-delivery-select optgroup").length > 1) {
        $(".thereismore").remove()
        $(".srp-delivery-header").append("<span class='thereismore' style='display:block'>Clique abaixo para ver todas as opções de frete</span>")
      }
},1000)
        
      
        
        
        
});