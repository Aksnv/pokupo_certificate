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


/* Форма добавления отзыва */

$(".reviews-button").click(function() {
  $(".review-overlay").toggleClass("review-overlay--active");
  $(".popup-review").toggleClass("popup-review--active");
});

$(".popup-review__close-button").click(function() {
  $(".review-overlay").toggleClass("review-overlay--active");
  $(".popup-review").toggleClass("popup-review--active");
});

/* Форма добавления ответа на отзыв */

$(".reviews-list__review-answer").click(function(e) {
  e.preventDefault();
  $(".review-overlay").toggleClass("review-overlay--active");
  $(".popup-answer").toggleClass("popup-answer--active");
});

$(".popup-answer__close-button").click(function() {
  $(".review-overlay").toggleClass("review-overlay--active");
  $(".popup-answer").toggleClass("popup-answer--active");
});