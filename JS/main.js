$(document).ready(()=>{

$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: false,
    slideWidth: 1000,
    controls: false,
    mode: 'fade',
    randomStart: true,
  
  });

  $('#btn').click(() =>{

    $('#menu').toggleClass('open');

  });


});