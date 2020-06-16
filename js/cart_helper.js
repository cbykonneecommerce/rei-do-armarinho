

   function openNav() {

    const mq = window.matchMedia("(max-width: 600px)");
    if (mq.matches) {
      document.getElementById("mySidenav").style.width = `${document.documentElement.clientWidth}px`;
    } else{
      document.getElementById("mySidenav").style.width = "485px";
    }
    }
    

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

setTimeout(()=>{
    $("#mini-cart-admake .mini-cart-item .detalhes").append(`
    <button class="btn btn-menos-check" style="background-color: transparent;outline-style: none;
        box-shadow: none;"><img src="/arquivos/menos.png" alt="" style="width: 22px;"></button>
            <input type = "number" class="qtd-field" value = "1" style = "width: 50px;
            margin: 11px;
            padding-left: 11px;
            font-size: 18px !important;
            color: #333 !important;
            border: solid 2px #931A29 !important;"/>
            <button class="btn btn-mais-check" style = "background-color: transparent;outline-style: none;
        box-shadow: none;"><img src="/arquivos/mais.png" alt="" style="width: 22px;"></button>

        <span class="product-remover"><img src="/arquivos/btn-remove.png"  style="width: 31px;
        position: absolute;
        top: -6px;
        right: 2px;"/></span>
    `);

    $(".qtd-field").prop("disabled", true);
 vtexjs.checkout.getOrderForm()
.then(function(orderForm) {

    for(let i = 0; i < orderForm.items.length; i++) {
        $($(".qtd-field")[i]).val(orderForm.items[i].quantity)
    }

    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
 //formatReal(orderForm.value)
});

/*

$(".btn-menos-check", "body").on('click',  function(event) {
    var rowindex = $(this).closest('.mini-cart-item').index();
    console.log('rowindex', rowindex);
    let me =  $(".qtd-field")[rowindex];
   let value = parseInt($($(".qtd-field")[rowindex]).val())
   console.log(me, value);

   if (value > 1) {
       console.log("entrei")
       value -=  1;
       console.log(value)
       $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text(`${value} X`)
    
   // $(me).val(value)
    $($(".qtd-field")[rowindex]).val(value)

    vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[rowindex];
    var updateItem = {
      index: rowindex,
      quantity:  value
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    //alert('Items atualizados!');
    console.log(orderForm);
    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  });
}
});



$(".btn-mais-check", "body").on('click',  function(event) {
    var rowindex = $(this).closest('.mini-cart-item').index();
    console.log('rowindex', rowindex);
    let me =  $(".qtd-field")[rowindex];
   let value = parseInt($($(".qtd-field")[rowindex]).val())
   console.log(me, value);

  
       value +=  1;
       console.log(value)
       $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text( `${value} X`)
   // $(me).val(value)
    $($(".qtd-field")[rowindex]).val(value)

    vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[rowindex];
    var updateItem = {
      index: rowindex,
      quantity:  value
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    //alert('Items atualizados!');
    console.log(orderForm);
    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  });

});


$(".product-remover", "body").on('click', function(event){
  var rowindex = $(this).closest('.mini-cart-item').index();
  let itemsToRemove = [{"index": rowindex,
  "quantity": 0}]
  vtexjs.checkout.removeItems(itemsToRemove).then(res=>{
    console.log("removido");
    
    $($(".mini-cart-item")[rowindex]).remove();

  });
})
*/
},2000);




$(document).on('click', ".btn-mais-check",  function(event) {
  var rowindex = $(this).closest('.mini-cart-item').index();
  console.log('rowindex', rowindex);
  let me =  $(".qtd-field")[rowindex];
 let value = parseInt($($(".qtd-field")[rowindex]).val())
 console.log(me, value);


     value +=  1;
     console.log(value)
     $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text( `${value} X`)
 // $(me).val(value)
  $($(".qtd-field")[rowindex]).val(value)

  vtexjs.checkout.getOrderForm()
.then(function(orderForm) {
  var itemIndex = 0;
  var item = orderForm.items[rowindex];
  var updateItem = {
    index: rowindex,
    quantity:  value
  };
  return vtexjs.checkout.updateItems([updateItem], null, false);
})
.done(function(orderForm) {
  //alert('Items atualizados!');
  console.log(orderForm);
  $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
});

});

$(document).on('click',".btn-menos-check",  function(event) {
  var rowindex = $(this).closest('.mini-cart-item').index();
  console.log('rowindex', rowindex);
  let me =  $(".qtd-field")[rowindex];
 let value = parseInt($($(".qtd-field")[rowindex]).val())
 console.log(me, value);

 if (value > 1) {
     console.log("entrei")
     value -=  1;
     console.log(value)
     $($("#mini-cart-admake .mini-cart-item .qtd-valor .qtd")[rowindex]).text(`${value} X`)
  
 // $(me).val(value)
  $($(".qtd-field")[rowindex]).val(value)

  vtexjs.checkout.getOrderForm()
.then(function(orderForm) {
  var itemIndex = 0;
  var item = orderForm.items[rowindex];
  var updateItem = {
    index: rowindex,
    quantity:  value
  };
  return vtexjs.checkout.updateItems([updateItem], null, false);
})
.done(function(orderForm) {
  //alert('Items atualizados!');
  console.log(orderForm);
  $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
});
}
});


$(document).on('click', ".product-remover", function(event){
  var rowindex = $(this).closest('.mini-cart-item').index();
  let itemsToRemove = [{"index": rowindex,
  "quantity": 0}]
  vtexjs.checkout.removeItems(itemsToRemove).then(res=>{
    console.log("removido");
    
    $($(".mini-cart-item")[rowindex]).remove();
    $("#mini-cart-admake-total").text("R$ " + formatReal(res.value));

  });
})

