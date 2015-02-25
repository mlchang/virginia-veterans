$(function() {
  if($(window).width() <= 640) {
    $(".top-bar .name img").each(function() {
      $(this).attr("src", $(this).attr("src").replace("/img/vvclogo_nonback.jpg", "/img/vvcnoimagewhite.jpg"));
    });
  }
});