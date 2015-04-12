(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $( '#video-space' ).hide();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function clearContent(self) {
    $(self).css('display', 'none');
}

function genCard(self){
    $('#value-child').fadeOut();
    $( '#video-space' ).show();
    $('#index-banner').slideUp('slow');
}

/*meds = [{
    "medicine": 'Fortecortin',
    "pseudo": '(deksametazon)',
    "quantity_amount": 2,
    "quantity_unit": 'mg, Daily'
}];
for (var i = 0; i < meds.length; i++) {
    $('ul.medications').append('<li> <content-editable>' + '<code>' + meds[i].medicine + '</code> <small>' + meds[i].pseudo + ' </small> <br> - ' + meds[i].quantity_amount + meds[i].quantity_unit + '</content-editable></li>');
}*/