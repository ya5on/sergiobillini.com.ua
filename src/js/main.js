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

    //Adv-slider
    let productsAdv = new Swiper('.swiper-container-adv', {
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
                slidesPerView: 3,
            },
            960: {
                slidesPerView: 3,
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.swiper-button-next-adv',
            prevEl: '.swiper-button-prev-adv',
        },
    });

    //main-slider
    let mainSlider = new Swiper('.swiper-container-main', {
        // Optional parameters
        loop: false,
        slidesPerView: 2,
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
                slidesPerView: 1,
            },
            960: {
                slidesPerView: 2,
            }
        },
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
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
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
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
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
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
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
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
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

    let swiper = new Swiper('.swiper-container-reviews', {
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
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
                slidesPerView: 1,
            },
            960: {
                slidesPerView: 2,
            }
        },

        navigation: {
            nextEl: '.swiper-button-next-reviews',
            prevEl: '.swiper-button-prev-reviews',
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 60,
            modifier: 1,
            slideShadows : false,
        }
    });

    //Order-slider
    let productsOrder = new Swiper('.swiper-container-order', {
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
                slidesPerView: 4,
            },
            960: {
                slidesPerView: 4,
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.swiper-button-next-order',
            prevEl: '.swiper-button-prev-order',
        },
    });

});