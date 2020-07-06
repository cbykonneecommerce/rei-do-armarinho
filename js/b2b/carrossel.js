

$(document).ready(function() {

    //$(".helperComplement").remove();
  
  
    $('.product-carousel .prateleira.vitrine ul').find('.helperComplement').remove();
    $('.product-carousel-last .prateleira.vitrine ul').find('.helperComplement').remove();
   
    $('.fullbanner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        }
      }]
  
    });
  
  
    
  
    $('.product-carousel-last .prateleira.vitrine ul').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }]
  
    });
  
    $('.product-carousel .prateleira.vitrine ul').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      }]
  
    });
  
  
    
    $('#carouselpropostas').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
    });
  
    $('#carouseldeptos').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  
    
    $('#carouselmarcas').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
      responsive: [
       
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        }
      ]
    });
  
    
    
  
  $(".slick-prev.slick-arrow").html("<img src='/arquivos/seta-esquerda.png' />");
  $(".slick-next.slick-arrow").html("<img src='/arquivos/seta-direita.png' />");
     
    });
  
    