define(['jquery', 'wx'], function($, wx) {

	var wechat = {};

	var host = 'http://121.41.15.119:3000/';
	var img = 'http://121.41.15.119:3000/assets/p9/icon.png';

	wechat.init = function() {
        wx.showOptionMenu();
	};

	function shareOK() {
		wechat.callback && (wechat.callback());
	}

	wechat.shareTimeline = function(msg) {
		var link = host;
		wx.onMenuShareTimeline({
		    title: msg,
		    desc: msg,
		    link: link,
		    imgUrl: img,
		    success: function () {
		    	shareOK();
		    },
		    cancel: function () {
		    }
		});
	};

	wechat.shareFriend = function(msg) {
		var link = host;
		wx.onMenuShareAppMessage({
		    title: msg,
		    desc: msg,
		    link: link,
		    imgUrl: img,
		    success: function () { 
		    	shareOK();
		    },
		    cancel: function () { 
		    }
		});
	}

	wechat.close = function() {
		wx.closeWindow();
	};

	return wechat;
});