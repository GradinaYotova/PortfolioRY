$(document).ready(function() { 
    $('.aboutTrigger').click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $('.aboutView').addClass("active");
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
        $( '.aboutView' ).removeClass( 'active' );
    })

    $( '.filterbutton' ).first( ).trigger( 'click' );

        });

 

 
    let tooltip = document.createElement( 'div' );
    tooltip.classList.add( 'tooltip' );
    document.body.appendChild( tooltip );


    document.addEventListener( 'mousemove', function( event ) {
        event.preventDefault( );

        var lft = event.clientX;
        var rgt = lft + tooltip.offsetWidth;
        if ( rgt > window.innerWidth )
            lft -= rgt - window.innerWidth;

        var top = event.clientY;
        var btm = top + tooltip.offsetHeight;
        if ( btm > window.innerHeight )
            top -= btm - window.innerHeight;


        tooltip.style.top = top + 'px';
        tooltip.style.left = lft + 'px';
    } );


    let griditems = document.querySelectorAll( '[data-tooltip-container]' );
    griditems.forEach( function( griditem ) {
        griditem.addEventListener( 'mouseover', function( ) {
            var tooltiptext = this.getAttribute( 'data-tooltip-label' );
            tooltip.innerHTML = tooltiptext;
        } );

        griditem.addEventListener( 'mouseout', function( event ) {
            var lft = event.clientX;
            var top = event.clientY;

            var hovered_element = document.elementFromPoint( lft, top );
            if ( hovered_element.getAttribute( 'data-tooltip-label' ) == null )
                tooltip.innerHTML = '';
        } );
    } );




