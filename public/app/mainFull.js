requirejs.config({
    baseUrl: '/',
    waitSeconds: 60,
    paths: {
        'jquery': 'lib/jquery-1.11.1.min',
        'jtap': 'lib/jtap',
        'nprogress': 'lib/nprogress',
        'progressbar': 'lib/progressbar.min',
        'fullPage': 'lib/jquery.fullPage',
        'wx': '//res.wx.qq.com/open/js/jweixin-1.1.0',
        'wechat': 'app/wechat',
        'page': 'app/page',
        'page0': 'app/page/page0',
        'page1': 'app/page/page1',
        'page2': 'app/page/page2',
        'page3': 'app/page/page3',
        'page4': 'app/page/page4',
        'page5': 'app/page/page5',
        'page6': 'app/page/page6',
        'page7': 'app/page/page7',
        'page8': 'app/page/page8',
        'page9': 'app/page/page9'
    },
    shim: {
        'fullPage': {
            exports: 'FullPage'
        },
        'jquery': {
            exports: '$'
        },
        'jtap': {
            deps: ['jquery']
        },
        'wx': {
            exports: 'wx'
        }
    }
});

require(['jquery', 'fullPage', 'page', 'wechat'], function($, FullPage, pages, wechat) {
    $(function() {
        var preOntouch = document.ontouchmove;
        // document.ontouchstart = function(e){ 
        //     e.preventDefault(); 
        // };

        pages.init();
        wechat.init();
        wechat.shareTimeline("网易首款女上位陌生交友神器来啦！");
        wechat.shareFriend("网易首款女上位陌生交友神器来啦！");

        // var runPage = new FullPage({
        //     id : 'pageContain',                            // id of contain
        //     slideTime : 300,                               // time of slide
        //     effect : {                                     // slide effect
        //         transform : {
        //             translate : 'X',                   // 'X'|'Y'|'XY'|'none'
        //             scale : [1, 1],                   // [scalefrom, scaleto]
        //             rotate : [0, 0]                    // [rotatefrom, rotateto]
        //         },
        //         opacity : [0, 1]                       // [opacityfrom, opacityto]
        //     },                           
        //     mode : 'touch',                                  // mode of fullpage
        //     easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
        //     , onSwipeStart : function(index, thisPage) {   // callback before pageChange
        //         if ($(thisPage).hasClass('page1')) {
        //             return 'stop';
        //         }
        //     }
        //     , beforeChange : function(index, thisPage, nextDiff) {   // callback before pageChange
        //         console.log(arguments);
        //         $(".page1 .btn-outer").hide();
        //         if (nextDiff === 1) {
        //             $(".page.current").animate({"left": "-100%"});
        //         } else if (nextDiff === -1) {
        //             $(".page.current").animate({"left": "100%"});
        //         }
        //     }
        //     , callback : function(index, thisPage) {       // callback when pageChange  
        //         audioSlip.play();   
        //         if ($(thisPage).hasClass('page7')) {
        //             p7.render();
        //         } else if ($(thisPage).hasClass('page9')) {
        //             p9.render();
        //         } else if ($(thisPage).hasClass('page1')) {
        //             p1.render();
        //         }
        //     }
        // });

        var fullpage = window.fullpage = $('#fullpage').show().fullpage({
            onSlideLeave: function() {
                 return false;
            },
            onLeave: function() {
                return false;
            }
        });
        $(".pageload-overlay").remove();
        window.next = function() {$.fn.fullpage.moveSectionDown();};
        window.go = function(idx) {r$.fn.fullpage.silentMoveTo('firstSlide', idx);};


    });

});


