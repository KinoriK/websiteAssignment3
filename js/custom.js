(function ($) {
  "use strict";

  // PRE LOADER
  $(window).on('load', function(){
      $('.preloader').delay(500).slideUp('slow');    
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
  });

  $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
  });

  // Updated redirectToProduct function to include children and hairextension
  window.redirectToProduct = function(productType) {
      switch (productType) {
          case 'female':
              window.location.href = "product-detail-female.html";
              break;
          case 'male':
              window.location.href = "product-detail-male.html";
              break;
          case 'children':
              window.location.href = "product-detail-children.html";
              break;
          case 'hairextension':
              window.location.href = "product-detail-hairextension.html";
              break;
          default:
              console.log("Unknown product type: " + productType);
      }
  };

})(window.jQuery);
