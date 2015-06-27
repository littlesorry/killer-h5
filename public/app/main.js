requirejs.config({
    baseUrl: '/',
    waitSeconds: 60,
    paths: {
        'jquery': 'lib/jquery-1.11.1.min',
        'jtap': 'lib/jtap',
        'nprogress': 'lib/nprogress',
        'fullPage': 'lib/fullPage',
        'wx': '//res.wx.qq.com/open/js/jweixin-1.0.0',
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
        var preOntouch = document.ontouchstart;
        document.ontouchstart = function(e){ 
            e.preventDefault(); 
        };

        pages.init();
        wechat.init();
        wechat.shareTimeline();

        var runPage = new FullPage({
            id : 'pageContain',                            // id of contain
            slideTime : 200,                               // time of slide
            effect : {                                     // slide effect
                transform : {
                    translate : 'none',                   // 'X'|'Y'|'XY'|'none'
                    scale : [1, 1],                   // [scalefrom, scaleto]
                    rotate : [0, 0]                    // [rotatefrom, rotateto]
                },
                opacity : [0, 1]                       // [opacityfrom, opacityto]
            },                           
            mode : '',               // mode of fullpage
            easing : 'ease'                                // easing('ease','ease-in','ease-in-out' or use cubic-bezier like [.33, 1.81, 1, 1];
            , onSwipeStart : function(index, thisPage) {   // callback before pageChange
            }
            , beforeChange : function(index, thisPage) {   // callback before pageChange
            }
            , callback : function(index, thisPage) {       // callback when pageChange     
                if ($(thisPage).hasClass('page7')) {
                    p7.render();
                } else if ($(thisPage).hasClass('page9')) {
                    p9.render();
                }
            }
        });
        $(".pageload-overlay").remove();

        window.runPage = runPage;
        window.next = function() {runPage.next();};
        window.prev = function() {runPage.prev();};
        window.go = function(idx) {runPage.go(idx || 0);};

    });

});


