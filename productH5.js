!function () {
    h5 = {
        data:[],
        init:function () {

        },
        bindingEvents:function () {
            //顶部轮播
            var mySwiper = new Swiper ('.swiper-container_top', {
                direction: 'vertical',
                loop: true,
            })
        },
    }
}();
$(function () {
    h5.init();
})