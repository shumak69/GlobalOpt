new WOW().init();

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
    $('#consultation').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите cвой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            }
          }
    });
    $('#questions').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true,
                minlength: 30
            }
        },
        messages: {
            name: {
              required: "Пожалуйста, введите свое имя",
              minlength: jQuery.validator.format("Введите {0} символа!")
            },
            phone: "Пожалуйста, введите cвой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно введен адрес почты"
            },
            textarea: {
                required: "Пожалуйста, заполните это поле",
                minlength: jQuery.validator.format("Введите минимум {0} символов!")
            }
          }
    });
    $(window).scroll(function () {
        if($(this).scrollTop() > 1100) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }
      });
      $('form').submit(function(e) {
        e.preventDefault();
  
        if(!$(this).valid()) {
          return;
        }
  
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          // $('#consultation, #order').fadeOut();
          $('.overlay').fadeIn('slow');
          
          $('form').trigger('reset');
        });
        return false;
      });
      $('.modal__close').on('click', function() {
        $('.overlay').fadeOut('slow');
    });
    const slider = document.querySelectorAll('.review__item'),
    rightArrow = document.querySelector('.right-arrow'),
    leftArrow = document.querySelector('.left-arrow'),
    lastSlide = slider.length;
    let currentSlide = 1;
    rightArrow.style.userSelect = 'none';
    leftArrow.style.userSelect = 'none';
    function nextSlide() {
      if(currentSlide == lastSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      toggleSlider();
    }
    function previousSlide () {
      if(currentSlide == 0) {
        currentSlide = lastSlide - 1;
      } else {
        currentSlide--;
      }
      toggleSlider();
    }
    function toggleSlider() {
      slider.forEach(item => {
        item.classList.remove('active');
      });
      slider.forEach((item, i) => {
        if(i == currentSlide) {
          item.classList.add('active');
        }
      });
    }
    toggleSlider();
    rightArrow.addEventListener('click', (e) => {
      e.preventDefault();
      nextSlide();
    });
    leftArrow.addEventListener('click', e => {
      e.preventDefault();
      previousSlide();
    });
});