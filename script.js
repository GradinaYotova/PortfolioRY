$(document).ready(function() { 
    $('.homeTrigger').click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $('.homeView').addClass("active");
        $('.aboutView').removeClass("active");
        $('.index').removeClass("active");
        $('.browserView').removeClass("active");
        $('.installationView').removeClass("active");
        $('.movimgView').removeClass("active");
        $('.publicationView').removeClass("active");
        $('.posterView').removeClass("active");
        $('.identityView').removeClass("active");
        $('.typeView').removeClass("active");
    });

    $( '.filterbutton' ).click( function( ) {
        var button = $( this );

        var active_class = button.text( );

        if ( active_class == 'all-projects' ) {
            

            if ($(window).width() < 800) {
                $( '.img-grid .box' ).show();
                $( '.img-grid .box' ).css( 'pointer-events','' );
                $( '.img-grid .box' ).css( {opacity: 1.0} );
            }
            else {
                $( '.img-grid .box' ).css( {opacity: 1.0} );
                $( '.img-grid .box' ).css( 'pointer-events','' );
            }
           
        } else {

            if ($(window).width() < 800) {
                $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).hide()
            $( '.img-grid .box.' + active_class ).show()
            }
            else {
               
            $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).css( {opacity: 0.09} );
            $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).css('pointer-events','none');
        
            $( '.img-grid .box.' + active_class ).css( {opacity: 1.0} );
              $( '.img-grid .box.' + active_class ).css( 'pointer-events','' );
            }


            $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).css( {opacity: 0.09} );
            $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).css('pointer-events','none');
        
            $( '.img-grid .box.' + active_class ).css( {opacity: 1.0} );
              $( '.img-grid .box.' + active_class ).css( 'pointer-events','' );
            // $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).hide()
            // $( '.img-grid .box.' + active_class ).show()
        }

        button.addClass("active");
        button.siblings().removeClass("active");

        $( '.index' ).addClass( 'active' );
        $( '.homeView' ).removeClass( 'active' );
    });

    // $( '.homeTrigger' ).first( ).trigger( 'click' );
    // $( '.filterbutton' ).first( ).trigger( 'click' );

    if($(window).width() >= 1024) {
        // if browser window is larger or equal
        $( '.homeTrigger' ).first( ).trigger( 'click' );
    } else {
        // if browser window is smaller
        $( '.filterbutton' ).first( ).trigger( 'click' );
    }


});


