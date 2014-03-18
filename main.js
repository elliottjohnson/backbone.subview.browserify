var $ = require( "jquery" );
var Backbone = require( "backbone" );
var BackboneSubviews = require( "./node_modules/backbone.subviews/backbone.subviews.js" );

function subviewsTest () {
	if ( $.isFunction( BackboneSubviews.add ) ) 
		$( "#results" ).html( "pass" );
	else
		$( "#results" ).html( "fail" );
}

$( document ).ready( function () { subviewsTest( Backbone ); } );
