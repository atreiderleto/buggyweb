$(document).ready(()=>{

$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: false,
    slideWidth: 1200,
    controls: true,
    mode: 'fade',
    randomStart: true
  });

  $('#btn').click(() =>{

    $('#menu').toggleClass('open');

  });


});