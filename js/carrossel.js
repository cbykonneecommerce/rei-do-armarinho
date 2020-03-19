

$(document).ready(function() {
 
    
$("#carouselpropostas").owlCarousel({
 
    autoPlay: 3000, //Set AutoPlay to 3 seconds

    items : 1,
    itemsDesktop : [1199,6],
    itemsDesktopSmall : [979,1],
    itemsMobile : [479,1],
    navigation: false,
    stopOnHover: true,
    pagination: false

});

$("#carouseldeptos").owlCarousel({
 
  autoPlay: 3500, //Set AutoPlay to 3 seconds

  items : 1,
  itemsDesktopSmall : [979,1],
  itemsMobile : [479,1],
  navigation: true,
  stopOnHover: true,
  pagination: false

});

$("#carouselmarcas").owlCarousel({
 
  autoPlay: 3500, //Set AutoPlay to 3 seconds

  items : 5,
  itemsDesktopSmall : [979,5],
  itemsMobile : [479,2],
  navigation: true,
  stopOnHover: true,
  pagination: false

});







$(".owl-prev").html("<img src='/arquivos/seta-esquerda.png' />");
$(".owl-next").html("<img src='/arquivos/seta-direita.png' />");
   
  });

  