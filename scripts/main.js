/* Read fragment popup */

$(".read-fragment_button").click(function() {
  $(".popup-wrapper").addClass("popup-wrapper--active");
});

$(".popup--read-fragment__close").click(function() {
  $(".popup-wrapper").removeClass("popup-wrapper--active");
});