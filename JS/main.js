$(document).ready(()=>{

$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: false,
    pager: true,
    slideWidth: 1400,
     //controls: false
  });

  $('#btn').click(() =>{

    $('#menu').toggleClass('open');

  });


});