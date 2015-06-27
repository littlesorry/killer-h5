define(["jquery"], function($) {

	var p1 = {};

	p1.init = function() {
	};

	p1.next = function() {
		$(".page1 .btn-outer").show();
		setTimeout(function() {
			next();
		}, 250);
	}

	return p1;
});