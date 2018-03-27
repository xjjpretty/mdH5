!function () {
    h5 = {
        data:[],
        init:function () {
            var _this = this;
            _this.bindingEvents();
            console.log('1')
        },
        bindingEvents:function () {
            //顶部轮播
            var swiper = new Swiper('.swiper-container-top', {
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }
            });
        },
    }
}();
$(function () {
    h5.init();
})