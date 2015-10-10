



$(function(){

  if (window.outerWidth > 700) {
    $("body").removeClass("smallish").addClass("largish");
  } else {
    $("body").removeClass("largish").addClass("smallish");
  }


  $(".aka").on("click", function() {
    $("body").toggleClass("open");
  });


/*
  $.getJSON('https://alpha-api.app.net/stream/0/posts/stream/global',
    function(data) {
      $.each(data, function(i, item) {
        $('<div>' + item.text + '</div>').appendTo('body');
      });
    }
  );
*/

});