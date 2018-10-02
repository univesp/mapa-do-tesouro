$(document).ready(function(){

  function posicionaRodape(){
    var pageHeight = $("body").height();
    var windowHeight = $(window).height();
    if(pageHeight <= windowHeight){
      $("footer").addClass("fixed");
    } else {
      $("footer").removeClass("fixed");
    }
  }

  posicionaRodape();
  $(window).resize(posicionaRodape);

});
