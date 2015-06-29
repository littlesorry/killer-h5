define(['jquery', 'wechat'], function($, wechat) {

	var p8 = {};

	p8.share = function(idx) {
		$(".page8 .overlay").show();
		if (idx  == 1) {
			$(".page .btn-outer-l").show();
			wechat.shareTimeline("发现一款好无节操的陌生交友神器，你要不要約約看？");
			wechat.shareFriend("发现一款好无节操的陌生交友神器，你要不要約約看？");
		} else {
			$(".page .btn-outer-r").show();
			wechat.shareTimeline("说了半天無节操的交友神器呢！最後就给我看这个？");
			wechat.shareFriend("说了半天無节操的交友神器呢！最後就给我看这个？");
		}
		audioBtn.play();
		wechat.callback = function() {
			$(".page8 .overlay").hide();
		};
	};

	p8.shareClose = function() {
		$(".page .btn-outer").hide();
		$(".page8 .overlay").hide();
		wechat.callback = null;
	};
	
	return p8;
});