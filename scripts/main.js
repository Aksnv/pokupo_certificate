/* Read fragment popup */

$(".read-fragment_button").click(function() {
  $(".popup-wrapper").addClass("popup-wrapper--active");
});

$(".popup--read-fragment__close").click(function() {
  $(".popup-wrapper").removeClass("popup-wrapper--active");
});


/* Увеличение картинки при клике по ней */

$(".certificate__image img").click(function() {
  $(".image-overlay").toggleClass("image-overlay--active");
  $(".image-increase").toggleClass("image-increase--active");
  $(".image-increase").prepend($(this).clone());
});

$(".image-overlay").click(function() {
  $(".image-overlay").toggleClass("image-overlay--active");
  $(".image-increase").toggleClass("image-increase--active");
  $(".image-increase img").remove();
});

/* END - Увеличение картинки при клике по ней */