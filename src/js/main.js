// preloader
// window.addEventListener('load', function () {
//     let preloader = document.querySelector('.preloader');
//     preloader.className += " hide";
// });
// AOS.init({
//     once: true,
// });
// window.addEventListener('load', AOS.refresh);


$(document).ready(function () {

    // scroll to------------------
    $('.menu__list a').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 600);
    });

    //burger---------------------------
    $('.icon-menu').click(function (ev) {
        $('.menu__body').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__list').on('click', function () {
        $('.menu__body').removeClass('active');
        $('.icon-menu').removeClass('active');
        $('body').removeClass('lock');
    });
    //burger------------------------end

    //btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    //-------------------------------

    $('.tab').on('click', function(evt) {
        evt.preventDefault();
        $(this).toggleClass('active');
        let sel = this.getAttribute('data-toggle-target');
        $('.product__items').removeClass('active').filter(sel).addClass('active');
    });

    //main-slider
    let mainSlider = new Swiper('.swiper-container-main', {
        // Optional parameters
        loop: false,
        slidesPerView: 2,
        pagination: {
            el: '.swiper-pagination-main',
            // dynamicBullets: true,
            // dynamicMainBullets: 3,
        },
        navigation: {
            nextEl: '.swiper-button-next-main',
            prevEl: '.swiper-button-prev-main',
        },
    });

    //products-slider
    let productsSlider1 = new Swiper('.swiper-container-1', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            740: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 3,
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
        },
    });
    let productsSlider2 = new Swiper('.swiper-container-2', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            740: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        },
    });
    let productsSlider3 = new Swiper('.swiper-container-3', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            740: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next-3',
            prevEl: '.swiper-button-prev-3',
        },
    });
    let productsSlider4 = new Swiper('.swiper-container-4', {
        // Optional parameters
        loop: false,
        slidesPerView: 3,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            740: {
                slidesPerView: 2,
            },
            960: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next-4',
            prevEl: '.swiper-button-prev-4',
        },
    });



    // Params
    let sliderSelector = '.swiper-container-reviews',
        options = {
            init: false,
            loop: true,
            speed:800,
            slidesPerView: 2, // or 'auto'
            // spaceBetween: 10,
            centeredSlides : true,
            effect: 'coverflow', // 'cube', 'fade', 'coverflow',
            coverflowEffect: {
                rotate: 50, // Slide rotate in degrees
                stretch: 0, // Stretch space between slides (in px)
                depth: 100, // Depth offset in px (slides translate in Z axis)
                modifier: 1, // Effect multipler
                slideShadows : true, // Enables slides shadows
            },
            grabCursor: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination-reviews',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-reviews',
                prevEl: '.swiper-button-prev-reviews',
            },
            breakpoints: {
                1023: {
                    slidesPerView: 1,
                    spaceBetween: 0
                }
            },
            // Events
            on: {
                imagesReady: function(){
                    this.el.classList.remove('loading');
                }
            }
        };
    let mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
    mySwiper.init();

});