$(function () {
  // *+_+_+_+_+_+_+_+_+_+_+_+_ Index _+_+_+_+_+_+_+_+_+_+_+_+

  // *Main Menu Bar
  $(".main-menu-bar").click(function () {
    $(".main-menu").addClass("active");
    $(".menu-shadow").addClass("active");
  });

  // *Product Menu Bar
  $(".service-menu-bar").click(function () {
    $(".service-nav").addClass("active");
    $(".menu-shadow").addClass("active");
  });

  $(".icon-cross").click(function () {
    $(".main-menu").removeClass("active");
    $(".service-nav").removeClass("active");
    $(".menu-shadow").removeClass("active");
  });

  $(".menu-shadow").click(function () {
    $(".main-menu").removeClass("active");
    $(".service-nav").removeClass("active");
    $(".menu-shadow").removeClass("active");
  });

  // *+_+_+_+_+_+_+_+_+_+_+_+_ Archive _+_+_+_+_+_+_+_+_+_+_+_+

  //* Toggle Slider Menu
  $("li.sub-menu-li a").click(function () {
    console.log("fff");
    $(this).children("i").toggleClass("icon-plus");
    $(this).children("i").toggleClass("icon-minus");
    $(this).parent().toggleClass("active");
    $(this).parent().find("ul.sub-menu").slideToggle();
  });
});
