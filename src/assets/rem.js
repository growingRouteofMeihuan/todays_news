;
// 匿名自执行
(function (win) {
    var doc = win.document;
    // 获取根元素
    var docEl = doc.documentElement;
    // 获取meta标签，设置
    var metaEl = doc.querySelector('meta[name="viewport"]');
    // cover设置页面占满整个屏幕,0.5是算出来的，1/dpr，不同设备dpr不一样
    metaEl.setAttribute(
        "content",
        "initial-scale=.5,maximum - scale=.5,minimum - scale=.5,user - scalable=no,viewport - fit=cover")
    function reRem() {
        //getBoundingClientRect用于返回元素的大小及相对于视窗的位置,
        //此处只取了宽,取了根元素的宽
        var _width = docEl.getBoundingClientRect().width
        // 设定_rem这个单位的大小（由于width不同设备是不一样的，
        //因此rem的相对大小会根据视窗（HTML根元素）的大小改变，是一个相对单位
        var _rem = _width / 10;//假设此处宽为375，则rem=37.5
        // 此处设置根元素的字体绝对大小为标准参照，其它元素的尺寸以根元素的大小为参参照
        docEl.style.fontSize = _rem + "px";

    }
    reRem()
    win.addEventListener("resize", function () {
        reRem()
    })
})(window)