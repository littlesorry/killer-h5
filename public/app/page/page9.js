define(['jquery', 'wechat', 'nprogress'], function($, wechat, NP) {

	(function($) {
	    $.fn.animateNumbers = function(stop, commas, duration, ease) {
	        return this.each(function() {
	            var $this = $(this);
	            var start = parseInt($this.text().replace(/,/g, ""));
				commas = (commas === undefined) ? true : commas;
	            $({value: start}).animate({value: stop}, {
	            	duration: duration == undefined ? 1000 : duration,
	            	easing: ease == undefined ? "swing" : ease,
	            	step: function() {
	            		$this.text(Math.floor(this.value));
	            	},
	            	complete: function() {
	            	   if (parseInt($this.text()) !== stop) {
	            	       $this.text(stop);
	            	   }
	            	}
	            });
	        });
	    };
	})($);

	var p9 = {
	};

	p9.init = function() {
		setInterval(function() {
			var rand = $(".icon-img").removeClass("spin delay-1 delay-2 delay-3 delay-0").sort(function() {return Math.random() - 0.5});
			$(rand[0]).addClass("spin delay-1");
			$(rand[1]).addClass("spin delay-2");
			$(rand[2]).addClass("spin delay-3");
			$(rand[3]).addClass("spin delay-0");
		}, 5000);

	};

	p9.render = function() {
		setTimeout(function() {
			$(".page9 .index").animateNumbers(213797);
		}, 1000);
	};

	p9.share = function() {
		$(".page9 .overlay").show();
		wechat.callback = function() {
			$(".page9 .overlay").hide();
		};
	};

	p9.shareClose = function() {
		$(".page9 .overlay").hide();
		wechat.callback = null;
	};

	return p9;
});