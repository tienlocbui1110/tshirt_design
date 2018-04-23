$(document).ready(function() {
  if ($(window).height() > $("body").height()) {
    $(".left-control").css({ height: "100vh" });
  } else {
    $(".left-control").css({ height: "auto" });
  }
});
