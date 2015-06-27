define(['jquery', 'wechat', 'nprogress'], function($, wechat, NP) {

	var p9 = {
		idx: 0
	};

	p9.init = function() {
		var icons = ['11', '12', ];
		setInterval(function() {
			var rand = $(".icon-img").removeClass("spin delay-1 delay-2 delay-3 delay-0").sort(function() {return Math.random() - 0.5});
			$(rand[0]).addClass("spin delay-1");
			$(rand[1]).addClass("spin delay-2");
			$(rand[2]).addClass("spin delay-3");
			$(rand[3]).addClass("spin delay-0");
		}, 5000);
	};

	p9.share = function() {

	};

	return p9;
});