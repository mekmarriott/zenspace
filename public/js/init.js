(function($) {
    $(function() {

        $('.button-collapse').sideNav();
        $('#video-space').hide();

        // for (element in $('#video-space') {}

    }); // end of document ready
})(jQuery); // end of jQuery name space

function clearContent(self) {
    $(self).css('display', 'none');
}


function genCard(self) {
    $('#value-child').fadeOut();
    $('#video-space').show();
    $('#index-banner').slideUp('slow');
}

function updateNav() {
    var x = document.location.pathname;
    if (x == '/') {
        // $("#menubar").children('li')[0].toggleClass('selected');
        $("#one").toggleClass('selected');
    } else if (x == '/analysis') {
        $("#two").toggleClass('selected');
    } else if (x == '/logs') {
        $("#three").toggleClass('selected');
    } else if (x == '/exercises') {
        $("#ex").toggleClass('selected');
    } else if (x == '/graphs') {
        $("#five").toggleClass('selected');
    }

}

function hideCards(self) {
        y = $(self).attr('id').substring(5)
        for (i = 1; i <= $('.card').length; i++) {
            $('#card-' + i).toggleClass('hidden');
            console.log(i);
        }
        $('#card-' + y).removeClass('hidden');
        $('#card-' + y).parent().toggleClass('m12');
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

updateNav();
