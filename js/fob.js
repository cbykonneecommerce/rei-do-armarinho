setTimeout(function(){
    $(".srp-content").append("<p id='fob' style='color: #333;font-weight:600;display:none'>Frete FOB (transportadora indicada pelo cliente).<br/>Entraremos em contato para confirmar a transportadora.</p>");
},1000)



setInterval(function(){
    if($(".srp-delivery-select").val() == "CHEAPEST") {
$("#fob").show();
$($(".full-cart .summary-totalizers .monetary")[1]).text("A combinar");
$(".shipping-estimate-date").text("");
$(".shipping-estimate-detail").text("A combinar");

    } else {
        $("#fob").hide();
    }
},1000)