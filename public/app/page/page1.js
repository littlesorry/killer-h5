define(["jquery"], function($) {

	var p1 = {};

	p1.init = function() {
	};

	p1.render = function() {
		$(".page1 .btn-outer").hide();
	};

	p1.next = function() {
		audioBtn.play();
		$(".page1 .btn-outer").show();
		setTimeout(function() {
			//$.fn.fullpage.moveSectionDown();
			next();
		}, 250);
	}

	return p1;
});