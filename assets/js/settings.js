jQuery( function ( $ ) {

	$( '.nav-tab-wrapper a' ).click( function () {

		if ( $( this ).hasClass( 'nav-tab-active' ) ) {
			return false;
		}

		$( '.settings_panel' ).hide();
		$( '.nav-tab-active' ).removeClass( 'nav-tab-active' );
		$( $( this ).attr( 'href' ) ).show();
		$( this ).addClass( 'nav-tab-active' );
		return true;
	} );

	$( '#setting-dlm_default_template' ).change( function () {
		if ( $( this ).val() == 'custom' ) {
			$( '#setting-dlm_custom_template' ).closest( 'tr' ).show();
		} else {
			$( '#setting-dlm_custom_template' ).closest( 'tr' ).hide();
		}
	} ).change();

	$( '#setting-dlm_enable_logging' ).change( function () {
		if ( $( this ).is( ":checked" ) === true ) {
			$( '#setting-dlm_count_unique_ips' ).closest( 'tr' ).show();
		} else {
			$( '#setting-dlm_count_unique_ips' ).closest( 'tr' ).hide();
		}
	} ).change();

	// load tab of hash, if no hash is present load first tab.
	if ( window.location.hash ) {
		var active_tab = window.location.hash.replace( '#', '' );
		$( '.nav-tab-wrapper a#dlm-tab-' + active_tab ).click();
	} else {
		$( '.nav-tab-wrapper a:first' ).click();
	}

	$( window ).bind( 'hashchange', function ( e ) {
		var active_tab = window.location.hash.replace( '#', '' );
		$( '.nav-tab-wrapper a#dlm-tab-' + active_tab ).click();
	} );

} );