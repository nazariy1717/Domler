let front = {

    hamburger: $('.hamburger'),
    nav: $('.header__content'),
    header_drop: $('.header-drop'),

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: true,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true
    },

    init: function () {
        this.events();
        this.headerScroll();
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        // let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },


    headerScroll: function(){
        if( $(window).scrollTop() > 0){
            $('.header').addClass('js-fixed');
        } else {
            $('.header').removeClass('js-fixed');
        }
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.toggleClass('js-show');
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.toggleClass('js-show');
        }
    },




    events: function () {
        let self = this;

        $(window).on('scroll',function(){
            self.headerScroll();
        });

        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });





    }
};



let modal = {
    closeButton: $('.modal__close'),
    closeOverlay: $('.modal'),
    can: 1,
    init: function () {
        this.events();
    },
    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();
    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);

        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal__body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);
        });




    }
};



jQuery(function () {
    front.init();
    modal.init();
});