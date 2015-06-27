define(['jquery', 'wx'], function($, wx) {

	var wechat = {};

	var host = 'http://121.41.15.119:3000/';
	var img = '';

	wechat.init = function() {
        wx.showOptionMenu();
	};

	function shareOK() {
		wechat.callback && (wechat.callback());
	}

	wechat.shareTimeline = function(id) {
		var link = host;
		wx.onMenuShareTimeline({
		    title: '有杀气童话',
		    desc: '有杀气童话',
		    link: link,
		    imgUrl: img,
		    success: function () {
		    	shareOK();
		    },
		    cancel: function () {
		    }
		});
	};

	wechat.shareFriend = function() {
		var link = host;
		wx.onMenuShareAppMessage({
		    title: '有杀气童话',
		    desc: '有杀气童话',
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