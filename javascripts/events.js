$(document).ready(function(){

  // Using leaflet.js to pan and zoom a big image.
  // See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

  // create the slippy map
  if($(window).width() >= 677){
    var map = L.map('image-map', {
      minZoom: .5,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple,
      scrollWheelZoom: false,
      zoomSnap: 0.20,

    });
  } else {
    var map = L.map('image-map', {
      minZoom: .1,
      maxZoom: 4,
      center: [0, 0],
      zoom: .1,
      crs: L.CRS.Simple,
      scrollWheelZoom: false,
      zoomSnap: 0.20,
    });
  }

  map.fitBounds([[-20,160], [-260,460]])

  // dimensions of the image
  var w = 4245,
      h = 2160,
      url = 'common/background_mapa3.png';
  // var w = 5408,
  //     h = 2752,
  //     url = 'images/mapa.png';

  // calculate the edges of the image, in coordinate space
  var southWest = map.unproject([0, h], map.getMaxZoom()-1);
  var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
  var bounds = new L.LatLngBounds(southWest, northEast);

  // add the image overlay,
  // so that it covers the entire map
  L.imageOverlay(url, bounds).addTo(map);

  // tell leaflet that the map is exactly as big as the image
  map.setMaxBounds(bounds);


  //ÍCONES
  var iconCaravela = L.icon({
      iconUrl: 'images/icon1_caravela.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [40, 80], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'caravela'
  });

  var iconCana = L.icon({
      iconUrl: 'images/icon2_cana.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [27, 27], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'cana'
  });

  var iconRoda = L.icon({
      iconUrl: 'images/icon3_roda.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [36, 28], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'roda'
  });

  var iconOuro = L.icon({
      iconUrl: 'images/icon4_ouro.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [60, 50], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'ouro'
  });

  var iconCorrentes = L.icon({
      iconUrl: 'images/icon5_correntes.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [35, 40], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'correntes'
  });

  var iconCanoa = L.icon({
      iconUrl: 'images/icon6_canoa.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [35, 40], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'canoa'
  });

  var iconBateia = L.icon({
      iconUrl: 'images/icon7_bateia.gif',
      iconSize:     [60, 59], // size of the icon
      iconAnchor:   [35, 40], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76], // point from which the popup should open relative to the iconAnchor
      className: 'bateia'
  });

  var caravelamark = L.marker([-125, 240], {icon: iconCaravela}).addTo(map);
  var canamark = L.marker([-119, 373], {icon: iconCana}).addTo(map);
  var rodamark = L.marker([-180, 200], {icon: iconRoda}).addTo(map);
  var ouromark = L.marker([-205, 192], {icon: iconOuro}).addTo(map);
  var correntesmark = L.marker([-197, 194], {icon: iconCorrentes}).addTo(map);
  var canoamark = L.marker([-203, 176], {icon: iconCanoa}).addTo(map);
  var bateiamark = L.marker([-190, 180], {icon: iconBateia}).addTo(map);

  //IMAGE OVERLAY
  //http://leafletjs.com/reference-1.2.0.html#imageoverlay
  var imageUrl = 'images/layer-1caravela-colonias.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay colonias"}).addTo(map);

  var imageUrl = 'images/layer-1caravela-rotas.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay rotas"}).addTo(map);

  var imageUrl = 'images/layer-2plantas.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay plantas"}).addTo(map);

  var imageUrl = 'images/layer-3roda-rotanordesteangola.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay nordeste-angola"}).addTo(map);

  var imageUrl = 'images/layer-4ouro-spsc.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay sp-sc"}).addTo(map);

  var imageUrl = 'images/layer-5correntes-spmggo.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay sp-mg-go"}).addTo(map);

  var imageUrl = 'images/layer-6canoa-rioparana.png',
      imageBounds = bounds;
  L.imageOverlay(imageUrl, imageBounds, {className: " overlay rio-parana"}).addTo(map);

  //CONTROLES
  var area_texto = $("#mapa .texto");
  $('.leaflet-marker-icon:not(:first-child)').hide();
  $('.leaflet-marker-icon').on('click', function(){
    $('.overlay').hide();
    $(this).css('opacity','.5');
    $('#mapa .texto').scrollTop(0);
  })
  $('.overlay').hide();

  caravelamark.on('click', function(){
    map.flyToBounds([[-80,160], [-240,460]])
    $('.colonias, .rotas').fadeIn();
    area_texto.empty().append("<p>Ao longo do século XV, ocorreu a expansão portuguesa e a conquista da costa ocidental africana. Em 1498, a expedição de Vasco da Gama e a passagem pelo Cabo da Boa Esperança em direção à Índia possibilitou o desenvolvimento da navegação e da conquista também asiática.</p><p>Isso permitiu a <strong>circulação de saberes, vegetais, animais e minerais, empreendidos pelos fluxos migratórios ou pelas transações comerciais entre Europa, América, Ásia e África</strong>.</p><p>No século XVI, a dinâmica colonial altera-se, com foco na exploração do comércio das especiarias no Oriente, como o Cravo, a Canela, a pimenta, a noz-moscada etc.</p>");
    $('.cana').delay(2000).fadeIn();
  });

  canamark.on('click', function(){
    map.flyToBounds([[-80,160], [-240,460]])
    $('.plantas').fadeIn();
    area_texto.empty().append("<p>A ampliação do repertório europeu e do conhecimento de novos vegetais, animais e minerais permitiu o desenvolvimento do conhecimento dos boticários, com a utilização de novas drogas, novas práticas de conservação dos alimentos, novos produtos e mercadorias comercializadas pelos portugueses. <strong>Esses conhecimentos impulsionaram o desenvolvimento da química e das ciências pela prática dos boticários e metalurgistas</strong>.</p><p> Já no século XVII, com o declínio das companhias comerciais no Oriente, Portugal centralizou suas políticas coloniais <strong>no Brasil</strong>, especialmente com atividades voltadas à <strong>produção do açúcar</strong> em um sistema de plantation no Nordeste. Nesse momento, presenciamos um grande desenvolvimento da química empregada no desenvolvimento da produção do açúcar em escalas industriais, resultante de conhecimentos e técnicas advindos de diversas regiões do Império Português. <strong>A cana-de- açúcar, proveniente da Ásia, foi aclimatada nos Açores e posteriormente no Brasil</strong>.</p>");
    $('.roda').delay(2000).fadeIn();
  });

  rodamark.on('click', function(){
    map.flyToBounds([[-80,160], [-240,460]])
    $('.nordeste-angola').fadeIn();
    area_texto.empty().append("<p>Os engenhos de açúcar eram construídos com tecnologias advindas da China e Índia, como <strong>o emprego da roda d´água - proveniente da China - que foi utilizada no Brasil como fonte de energia para movimentar os engenhos, e também nas áreas de mineração</strong> para movimentar os rosários e esgotar a água das minas. Além disso, <strong>a facilidade de navegação entre o nordeste Brasileiro, Angola e Benguela</strong> favoreceu a produção açucareira no Nordeste pelo plantation.</p><img src='images/imagem-3roda-cana.jpg'><h6>José Joaquim Freire. <em>Tab. 1a. Moagem de cana. 1784. Manuscrito da Biblioteca Nacional do Rio de Janeiro, 21,1,2 (46)</em></h6>");
    $('.ouro').delay(2000).fadeIn();
  });

  ouromark.on('click', function(){
    map.flyToBounds([[-180,168], [-218,200]])
    $('.sp-sc').fadeIn();
    area_texto.empty().append("<p>Mas as atividades açucareiras não eram as únicas realizadas no Brasil: as primeiras descobertas de ouro ocorreram nas proximidades da cidade de São Paulo por volta de 1580. A partir desse momento, a ocupação do Brasil expandiu-se em diversas direções e sofreu um movimento de interiorização do território, impulsionado pela busca de novas jazidas de ouro e da mão-de- obra indígena. Inicia-se um processo lento de extração do ouro e da formação de pequenos povoados e vilas que desencadearam na expansão territorial em direção ao Sul do Brasil.</p><p> Ao longo do século XVII, a mineração do ouro nas capitanias do Sul caracterizou-se por processos muito distintos da exploração empreendida em Minas Gerais, Mato Grosso e Goiás ao longo do século XVIII. Utilizou-se mão-de- obra indígena e a extração das jazidas ocorria lentamente, possibilitando uma exploração mineral por períodos mais longos. A hibridização entre o conhecimento dos portugueses e indígenas viabilizou a extração do ouro e a sobrevivência dessa população, resultando na criação de uma cultura híbrida dos tropeiros, que favoreceu a ocupação do território e a sobrevivência em uma cultura nômade advinda especialmente dos indígenas.</p>");
    $('.correntes').delay(2000).fadeIn();
  });

  correntesmark.on('click', function(){
    map.flyToBounds([[-180,168], [-218,200]])
    $('.sp-mg-go').fadeIn();
    area_texto.empty().append("<p>Por outro lado, o movimento dos bandeirantes, desenvolvido em direção às Minas Gerais no início do século XVIII, caracterizou-se pelo deslocamento de grandes tropas armadas com grandes provisões de pólvora e armamentos. <strong>As técnicas de mineração e metalurgia, associadas à produção agroindustrial do açúcar e de produtos agrícolas para suprimento dos núcleos urbanos, contaram com uma grande contribuição dos conhecimentos dos escravos africanos</strong>. Os portugueses, no processo de colonização, alocaram os escravos africanos em diversas regiões do Brasil, explorando <strong>conhecimentos milenares desenvolvidos em distintas regiões da África</strong>. No caso da mineração do ouro, os escravos da <strong>região da Costa da Mina</strong> foram deslocados para as regiões de mineração mais intensa, como Minas Gerais, Goiás e Mato Grosso. <strong>A introdução da Bateia e dos Carumbés foi realizada pelos negros africanos</strong>.</p><img src='images/imagem-5correntes-bateia.png'><h6><em>Propecto da lavagem de ouro na Fabrica de minerar da m.ma lavra.</em> AHMB. Apud: <em>Viagem ao Brasil</em> (2002: 128)</h6>");
    $('.canoa').delay(2000).fadeIn();
  });

  canoamark.on('click', function(){
    map.flyToBounds([[-180,168], [-218,200]])
    $('.rio-parana').fadeIn();
    area_texto.empty().append("<p>As bandeiras distinguem-se, ainda, das Monções, realizadas em grandes navegações fluviais a partir de Porto Feliz, ou como era conhecida na época, Araritaguaba. Utilizando canoas pelo rio Tietê, as Monções utilizavam a <strong>bacia do rio Paraná, navegando até Cuiabá</strong> e também povoando os caminhos percorridos.</p><img src='images/imagem-6canoa-canoa2.png'><h6><em>Planta da Canoa da Lavagem do Ouro da mesma lavra.</em> AHMB. Apud: <em>Viagem ao Brasil</em> (2002: 131)</h6><p style='margin-top: 30px'>A <strong>Carta da Lusitânia</strong>, de 1798, mostra que já se tinha, então, um bom conhecimento da hidrografia do Brasil – mais um conhecimento científico que se desenvolveu baseado nessas expedições.</p>");
    $('.bateia').delay(2000).fadeIn();
  });

  bateiamark.on('click', function(){
    map.flyToBounds([[-80,160], [-240,460]])
    area_texto.empty().append("<p>Essa exploração dos minérios e territórios brasileiros só foi possível graças à circulação de saberes e às contribuições africana e indígena. Assim, a técnica e a ciência brasileiras, o conhecimento dos territórios do interior do país e o desenvolvimento da economia no Brasil colônia não se originam apenas nos colonizadores, mas em todos os povos que contribuíram para a formação nacional.</p>");
  });

  $("#intro .seta").on("click", function(){
    $('html, body').animate({
        scrollTop: $('#mapa').offset().top - 60
    }, 'slow');
  })

})
