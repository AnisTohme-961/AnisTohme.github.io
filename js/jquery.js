$(document).ready(function() {
    $('.content').fadeToggle(7000);
});

  $(document).ready(function() {
    $('a[href="#main"]').on('click', function(event) {
      event.preventDefault(); 
      
      var targetOffset = $('#main').offset().top; 
      
      $('html, body').animate({
        scrollTop: targetOffset 
      }, 1000); 
    });
  });

  $(document).ready(function() {
    $('a[href="#about"]').on('click', function(event) {
      event.preventDefault(); 
      
      var targetOffset = $('#about').offset().top; 
      
      $('html, body').animate({
        scrollTop: targetOffset 
      }, 1000); 
    });
  });

  $(document).ready(function() {
    $('a[href="#contact"]').on('click', function(event) {
      event.preventDefault(); 
      
      var targetOffset = $('#contact').offset().top; 
      
      $('html, body').animate({
        scrollTop: targetOffset 
      }, 1000); 
    });
  });
   
  $(document).ready(function() {

    $('.responsive-image').hide();

    function fadeImage() {
      $('.responsive-image').fadeIn(1000).delay(3000).fadeOut(1000);
    }
  
    fadeImage();
  
    setInterval(fadeImage, 5000);
  });

  $(document).ready(function() {
    $('.phone').hover(
      function() {
        $(this).addClass('shake');
      },
      function() {
        $(this).removeClass('shake');
      }
    );
  });

  $(document).ready(function() {
    $('.phone').on('click', function(e) {
      e.preventDefault();
      var phoneNumber = $(this).text().replace(/\D/g, '');
      window.location.href = 'tel:' + phoneNumber;
    });
  });
  


  
    