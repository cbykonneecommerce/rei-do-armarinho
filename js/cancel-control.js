$(document).ready(function () {
    $(".myo-order-card").each(function(){
        let status = $(".tr-ns.mt2-ns .dib span span", this).text();
        console.log(status);
        if(status != "Processando Pagamento"){
            $(".myo-cancel-btn",this).remove();
            $(".db.dib-ns.mb5.mb0-ns").remove()
        }
    })
});

setInterval(()=>{
    $(".myo-order-card").each(function(){
        let status = $(".tr-ns.mt2-ns .dib span span", this).text();
        
        if(status != "Processando Pagamento"){
            $(".myo-cancel-btn",this).remove();
            $(".db.dib-ns.mb5.mb0-ns").remove()
        }
    })
},1000)



$(".myo-order-card").each(function(){
    let status = $(".tr-ns.mt2-ns .dib span span", this).text();
    console.log(status);
    if(status != "Processando Pagamento"){
        $(".myo-cancel-btn",this).remove();
        $(".db.dib-ns.mb5.mb0-ns").remove()
    }
})
$(window).on('hashchange', function(e){
    $(".myo-order-card").each(function(){
        let status = $(".tr-ns.mt2-ns .dib span span", this).text();
        console.log(status);
        if(status == "Preparando Entrega"){
            $(".myo-cancel-btn",this).remove();
            $(".db.dib-ns.mb5.mb0-ns").remove()
        }
    })

   let status = $(".dib.br2.pv2.ph3.f7.fw5.tc span span").text();
   if( status != "Processando Pagamento") {
    $(".db.pv2.c-link.hover-c-link.link").remove()
   }


})

