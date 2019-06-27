$("figure").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);


//menu
$(".navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
});


//menu close on menu item click
$(".navToggleClose").click(function() {
  $(".navBurger").removeClass("active");
  $(".overlay").removeClass("open");
  // this line ▼ prevents content scroll-behind
});
