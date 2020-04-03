/* document.body.onload = function() {

    setTimeout(function(){
        $('.main').attr("style","display: flex");
       // SLICK
        $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav',
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          dots: true,
          focusOnSelect: true
        });
        }, 10);

} */ 

// SLICK
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  });
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  focusOnSelect: true
});


// ZOOM
$('.ex1').zoom();

// STYLE GRAB
$('.ex2').zoom({ on:'grab' });

// STYLE CLICK
$('.ex3').zoom({ on:'click' }); 

// STYLE TOGGLE
$('.ex4').zoom({ on:'toggle' });


//ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
 

