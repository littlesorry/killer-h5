define(['jquery', 'progressbar'], function($, ProgressBar) {

	var p7 = {
		rendered : false
    };

    p7.render = function() {
    	setTimeout(function() {
    		$(".page7 .icon-1").addClass("fadeOut");
    		$(".page7 .icon-2").removeClass("hide");
    		setTimeout(function() {
    			audioFade.play();
    		}, 1000);

    		if (!p7.renderer) {
    			p7.renderer = true;
				setTimeout(function() {
					var startColor = '#ff57d0';
					var endColor = '#ff57d0';

					var element = document.getElementById('text-outer-1');
					var circle = new ProgressBar.Circle(element, {
					    color: "#ff57d0",
					    trailColor: '#6a777d',
					    trailWidth: 5,
					    duration: 2500,
					    easing: 'bounce',
					    strokeWidth: 5
					});

					circle.animate(0.86);
	    		}, 1800);

	    		setTimeout(function() {
					var startColor = '#ff57d0';
					var endColor = '#ff57d0';

					var element = document.getElementById('text-outer-r');
					var circle = new ProgressBar.Circle(element, {
					    color: "#ff57d0",
					    trailColor: '#6a777d',
					    trailWidth: 5,
					    duration: 2500,
					    easing: 'bounce',
					    strokeWidth: 5
					});

					circle.animate(0.35);
	    		}, 2000);
    		}
    		
    	}, 1500);
    };

	return p7;
});