

setTimeout(function(){
    $("#admake-advanced-filter > .box-filtro h3").append(`<span class="caret" style="margin-left:16px;float: right;margin-top: 8px;">`);

   // $("#admake-advanced-filter .opcoes").hide();
    
    $("#admake-advanced-filter > .box-filtro h3").toggle(function() {
        let me = $(this).text().toLowerCase();
        setTimeout(()=>{
            $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideDown();
        },1000)
        
    }, function() {
        let me = $(this).text().toLowerCase();
        $(`#admake-advanced-filter > .box-filtro.filtro-${me} .opcoes`).slideUp();
    })
}, 1000)