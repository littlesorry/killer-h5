define(['jquery', 'nprogress'], function($, NP) {

	var p7 = {
    };

    p7.render = function() {
    	setTimeout(function() {
    		$(".page7 .icon-1").addClass("fadeOut");
    		$(".page7 .icon-2").removeClass("hide");
    	}, 2500);
    };

	return p7;
});