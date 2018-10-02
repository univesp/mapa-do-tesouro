$(document).ready(function(){



    //Tales stuff

    $("#intro .seta").on("click", function(){
        $('html, body').animate({
            scrollTop: $('#mapa').offset().top - 60
        }, 'slow');
      })
    
    
    
      $( "#Bussola .ui-widget-content"  ).draggable({ revert: true, stack: "div" }); /*revert:"invalid"*/
    
      /*
      $('#header-ft').droppable({ accept: "#content-ft,#content-ea" });
      $('#header-ea').droppable({ accept: "#content-ft,#content-ea" });
    */
    
    
      $( "#No .ui-widget-content"  ).draggable({ revert: true, stack: "div" }); /*revert:"invalid"*/
    
      /*$( ".ui-widget-content-cc"  ).draggable({ revert: true, stack: "div" });*/
    
      $('#header-cc').droppable({ accept: "#content-cc" });
      $('#header-cd').droppable({ accept: "#content-cd" });
      $('#header-ci').droppable({ accept: "#content-ci" });
    
    
    
    
    
      $('#Bussola .ui-widget-header').each(function(index){
        $(this).droppable({
          drop: function( event, ui ) {
    
            
    
            if(ui.draggable.attr("id") == this.id){
                val_contador_bussola++;
            }else{
                val_contador_bussola --;
            }
            paginaBussola();
    
            /*
            if(ui.draggable.attr("id")=="content-ft"){
                alert("oi");
            }
            alert(ui.draggable.attr("id"));
            */
    
            //celso
        //     ui.draggable.addClass( 'correct' );
        // ui.draggable.draggable( 'disable' );
         //$(this).droppable( 'disable' ); /*this*/
            ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
    
        // ui.draggable.draggable( 'option', 'revert', false );
        //fim celso
            //----eventos_contador(val_contador_skinner, contador_skinner, $("#v-pills-skinner"), $("#v-pills-skinner-tab"), $("#v-pills-piaget-tab div"));
    
            $(this) = false;
            //$(this).droppable = false;
          }
        });
      });
    
      var val_contador_no = 0;
      var val_contador_bussola = 0;
    
    
    
      $('#No .ui-widget-header').each(function(index){
        $(this).droppable({
          drop: function( event, ui ) {
    
            val_contador_no = val_contador_no + 1;
    
            //celso
        //     ui.draggable.addClass( 'correct' );
        // ui.draggable.draggable( 'disable' );
         //$(this).droppable( 'disable' ); /*this*/
            ui.draggable.position( { of: $(this), my: 'center center', at: 'center center' } );
    
        // ui.draggable.draggable( 'option', 'revert', false );
        //fim celso
            //----eventos_contador(val_contador_skinner, contador_skinner, $("#v-pills-skinner"), $("#v-pills-skinner-tab"), $("#v-pills-piaget-tab div"));
            paginaNo();
            $(this).droppable = false;
            $(this) = false;
            
          }
        });
      });
    
      function paginaNo(){
          if (val_contador_no >= 4) {
              document.getElementById("btnFarol").style.display = "block";
              document.getElementById("feedNo").innerHTML = "Correto! Avance no mapa.";
          }
      }
    
      function paginaBussola(){
          if (val_contador_bussola>=2){
            document.getElementById("btnNo").style.display = "block";
            document.getElementById("feedBussola").innerHTML = "Correto! Avance no mapa.";
          }else if(val_contador_bussola<=-2){
            document.getElementById("btnNo").style.display = "block";
            document.getElementById("feedBussola").innerHTML = "Errado... Aprofunde-se neste tópico quando for elaborar seu projeto de pesquisa. Avance no mapa.";
          }
      }
    
  // Using leaflet.js to pan and zoom a big image.
  // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html











  //IMAGE OVERLAY
  //http://leafletjs.com/reference-1.2.0.html#imageoverlay
  



  /*
    var imageUrl = 'images/anima_garrafa.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifGarrafa"}).addTo(map);

    var imageUrl = 'images/anima_luneta.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifLuneta"}).addTo(map);

    var imageUrl = 'images/anima_bussola.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifBussola"}).addTo(map);

    var imageUrl = 'images/anima_no.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifNo"}).addTo(map);

    var imageUrl = 'images/anima_farol.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifFarol"}).addTo(map);


    var imageUrl = 'images/anima_timao.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifTimao"}).addTo(map);

    var imageUrl = 'images/anima_bau.gif',
    imageBounds = bounds2;
    L.imageOverlay(imageUrl, imageBounds, {className: " overlay gifBau"}).addTo(map);
*/
    

  //CONTROLES
  var area_texto = $("#mapa .texto");
  
  //$('.leaflet-marker-icon:not(:first-child)').hide();

  //$(document).ready(function(){
    $('#btnGar').click(function(){
        //$('.gifGarrafa').fadeIn();
        document.getElementById("gifs").src="images/anima_garrafa.gif";
    });
  //});

    $('#btnLuneta').click(function(){
        $('.gifLuneta').fadeIn();
        document.getElementById("gifs").src="images/anima_luneta.gif";
    });

    $('#btnBussola').click(function(){
        $('.gifBussola').fadeIn();
        document.getElementById("gifs").src="images/anima_bussola.gif";
    });

    $('#btnNo').click(function(){
        $('.gifNo').fadeIn();
        document.getElementById("gifs").src="images/anima_no.gif";
    });

    $('#btnFarol').click(function(){
        $('.gifFarol').fadeIn();
        document.getElementById("gifs").src="images/anima_farol.gif";
    });

    $('#btnTimao').click(function(){
        $('.gifTimao').fadeIn();
        document.getElementById("gifs").src="images/anima_timao.gif";
    });

    $('#btnBau').click(function(){
        $('.gifBau').fadeIn();
        document.getElementById("gifs").src="images/anima_bau.gif";
    });
  
/*
  $('.leaflet-marker-icon').on('click', function(){
    $('.overlay').hide();
    $(this).css('opacity','.5');
    $('#mapa .texto').scrollTop(0);
  })
  $('.overlay').hide();*/

})
