/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
	"use strict";

    jQuery("#hideSwitcher, #showSwitcher").click(function () {

        if (jQuery("#showSwitcher").is(":visible")) {

			var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
			createCookie("switcher_visible", 'true', 365);

        } else {

			var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({"margin-left": "0"}, 500);
			createCookie("switcher_visible", 'false', 365);

        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			jQuery(this).hide();
		});

    });
	
	$('#ecstasy-css').on('click', function () {
		setActiveStyleSheet('ecstasy'); 
	});
	$('#antique-brass-css').on('click', function () {
		setActiveStyleSheet('antique-brass'); 
	});
	$('#blue-css').on('click', function () {
		setActiveStyleSheet('blue'); 
	});
	$('#blue-ribbon-css').on('click', function () {
		setActiveStyleSheet('blue-ribbon'); 
	});
	$('#blue-whale-css').on('click', function () {
		setActiveStyleSheet('blue-whale'); 
	});
	$('#blue-violet-css').on('click', function () {
		setActiveStyleSheet('blueviolet'); 
	});
	$('#deep-cerulean-css').on('click', function () {
		setActiveStyleSheet('deep-cerulean'); 
	});
	$('#grey-css').on('click', function () {
		setActiveStyleSheet('grey'); 
	});
	$('#keppel-css').on('click', function () {
		setActiveStyleSheet('keppel'); 
	});
	$('#la-palma-css').on('click', function () {
		setActiveStyleSheet('la-palma'); 
	});
	$('#mexican-red-css').on('click', function () {
		setActiveStyleSheet('mexican-red'); 
	});
	$('#orange-css').on('click', function () {
		setActiveStyleSheet('orange'); 
	});
	$('#persian-blue-css').on('click', function () {
		setActiveStyleSheet('persian-blue'); 
	});
	$('#pink-css').on('click', function () {
		setActiveStyleSheet('pink'); 
	});
	$('#purple-css').on('click', function () {
		setActiveStyleSheet('purple'); 
	});
	$('#red-css').on('click', function () {
		setActiveStyleSheet('red'); 
	});
	$('#goldenrod-css').on('click', function () {
		setActiveStyleSheet('goldenrod'); 
	});
	$('#russet-css').on('click', function () {
		setActiveStyleSheet('russet'); 
	});
	$('#sunflower-css').on('click', function () {
		setActiveStyleSheet('sunflower'); 
	});
	$('#yellow-css').on('click', function () {
		setActiveStyleSheet('yellow'); 
	});
	$('#waikawa-grey-css').on('click', function () {
		setActiveStyleSheet('waikawa-grey'); 
	});
                      
});

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) { a.disabled = false; }
		}
	}
}

function getActiveStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) { return a.getAttribute("title"); }
	}

	return null;
}

function getPreferredStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) { 
			return a.getAttribute("title"); 
		}
	}

	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}	document.cookie = name+"="+value+expires+";";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];

		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}

		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}


/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
window.onload = function(e) {

	// COLOR SCHEME
	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);

	// SWITCHER OPEN|CLOSED
	var switcher_visible = 'false';
	if(switcher_visible != 'false') {
		jQuery("#showSwitcher").trigger('click');
	}

	// BOXED or WIDE
	var is_boxed = readCookie('is_boxed');
	if(is_boxed == 'true') {
		jQuery('body').removeClass('boxed');
		jQuery('body').addClass('boxed');
		jQuery("#is_boxed").trigger('click');
	}
	
}



/**
	LAYOUT STYLE [wide|boxed]
**/
jQuery("input.boxed_switch").bind("click", function() {
	var boxed_switch = jQuery(this).attr('value');

	if(boxed_switch == 'boxed') {
		jQuery("body").removeClass('boxed');
		jQuery("body").addClass('boxed');
		createCookie("is_boxed", 'true', 365);
	} else {
		jQuery("body").removeClass('boxed');
		createCookie("is_boxed", '', -1);
		jQuery('body').removeClass('transparent');
	}
});
