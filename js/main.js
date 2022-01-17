// alert('12345');

$('.faces__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        768: {
            items: 1,
            nav: false,
            dots: true
        }
    },
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.organizers__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 3
        },
        1200: {
            items: 4
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.general__owl').owlCarousel({
    margin: 10,
    loop: false,
    items: 2,
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.official__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.support__owl').owlCarousel({
    margin: 23,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.org-committee__owl').owlCarousel({
    loop: false,
    margin: 50,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        1200: {
            items: 4
        }
    },
    nav: true,
    dots: true,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.info__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.slider').owlCarousel({
    margin: 10,
    loop: false,
    items: 1,
    nav: false,
    dots: true
})

$('.organization-party__owl').owlCarousel({
    margin: 23,
    loop: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})


// Мобильное меню

const burger = document.getElementById('burger');
const close = document.getElementById('close');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
})

close.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
})

// Поиск

const searchField = document.querySelector('.search');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    searchField.classList.add('active');
})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('#search-btn') && !target.closest('.search')) {
        searchField.classList.remove('active')

    }
})

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// $('.eco-knowledge__video').owlCarousel({
//     margin:10,
//     loop:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         576:{
//             items:2
//         },
//         992:{
//             items:3
//         }
//     },
//     nav:true,
//     dots:false,
//     navText:['<img src="img/prev.svg" alt="prev">','<img src="img/next.svg" alt="next">']
// })

$('.eco-knowledge__video').slick({
    infinite: false,
    slidesToShow: 3,
    rows: 2,
    arrows: true,
    prevArrow: '<button type="button" class="prev-slicks-slide"><img src="img/prev.svg" alt="prev"></button>',
    nextArrow: '<button type="button" class="next-slicks-slide"><img src="img/next.svg" alt="prev"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: "unslick"
        }
    ]
});

$('.eco-knowledge__podcast').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 2
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

var podcasts = document.querySelectorAll(".eco-knowledge__podcast_audio");

for (let i = 0; i < podcasts.length; i++) {
    podcasts[i].addEventListener('click', () => {
        if (podcasts[i].querySelector('audio').paused) {
            for (let x = 0; x < podcasts.length; x++) {
                podcasts[x].querySelector('audio').pause();
                podcasts[x].classList.remove('active');
            }
            podcasts[i].classList.add('active');
            podcasts[i].querySelector('audio').play();
        }
        else {
            console.log(podcasts[i]);
            podcasts[i].querySelector('audio').pause();
            podcasts[i].classList.remove('active');
        }
    })
}

// for (const podcast of podcasts) {
//     podcast.addEventListener('click', () => {
//         if (podcast.querySelector('audio').paused) {
//             podcast.classList.add('active');
//             podcast.querySelector('audio').play();
//         }
//         else {
//             podcast.querySelector('audio').pause();
//             podcast.classList.remove('active');
//         }
//     })
// }

$('.eco-knowledge__literature').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.event__galery').owlCarousel({
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        }
    },
    nav: false,
    dots: false,
    autoPlay: true
})


let platformStatus = document.querySelectorAll('.offline-platforms__item_status');

for (let i = 0; i < platformStatus.length; i++) {
    if (platformStatus[i].className === 'offline-platforms__item_status opened') {
        platformStatus[i].innerHTML = 'Открытая';
    }
    else if (platformStatus[i].className === 'offline-platforms__item_status closed') {
        platformStatus[i].innerHTML = 'Закрытая';
    }
}


// Select с чебоксами

(function ($) {
    function setChecked(target) {
        var checked = $(target).find("input[type='checkbox']:checked").length;
        if (checked) {
            $(target).find('select option:first').html('Выбрано: ' + checked);
            $(target).find('select').css('color', '#02517A');
        } else {
            $(target).find('select option:first').html('Все');
        }
    }

    $.fn.checkselect = function () {
        this.wrapInner('<div class="checkselect-popup"></div>');
        this.prepend(
            '<div class="checkselect-control">' +
            '<select class="form-control"><option></option></select>' +
            '<div class="checkselect-over"></div>' +
            '</div>'
        );

        this.each(function () {
            setChecked(this);
        });
        this.find('input[type="checkbox"]').click(function () {
            setChecked($(this).parents('.checkselect'));
        });

        this.parent().find('.checkselect-control').on('click', function () {
            $popup = $(this).next();
            $('.checkselect-popup').not($popup).css('display', 'none');
            if ($popup.is(':hidden')) {
                $popup.css('display', 'block');
                $(this).find('select').focus();
            } else {
                $popup.css('display', 'none');
            }
        });

        $('html, body').on('click', function (e) {
            if ($(e.target).closest('.checkselect').length == 0) {
                $('.checkselect-popup').css('display', 'none');
            }
        });
    };
})(jQuery);

$('.checkselect').checkselect();

// 

$('.news-world__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.news-federal__owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".news-events");
    if (windowWidth < 992) {
        elem.addClass('owl-carousel owl-theme news-events-owl');
    }
    else {
        elem.removeClass('owl-carousel owl-theme news-events-owl');
    }
}

checkWidth();

$(window).resize(function () {
    checkWidth();
});

$('.news-events-owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

function checkWidthAll() {
    var windowWidth1 = $('body').innerWidth(),
        elem1 = $(".all-news");
    if (windowWidth1 < 992) {
        elem1.addClass('owl-carousel owl-theme all-news-owl');
    }
    else {
        elem1.removeClass('owl-carousel owl-theme all-news-owl');
    }
}

checkWidthAll();

$(window).resize(function () {
    checkWidthAll();
});

$('.all-news-owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.documentation-owl').owlCarousel({
    margin: 10,
    loop: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.project-office-owl').owlCarousel({
    loop: false,
    margin: 50,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        576: {
            items: 2,
            nav: true
        },
        768: {
            items: 3
        },
        1200: {
            items: 4

        }
    },

    dots: true,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.about-instructions-owl').owlCarousel({
    loop: false,
    responsive: {
        0: {
            items: 1,
            margin: 20
        },
        768: {
            items: 2,
            margin: 20
        },
        992: {
            items: 2,
            margin: 100
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.reviews-owl').owlCarousel({
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3

        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('#file-load').click(function () {
    $("#file-input").trigger('click');
})

$("#file-input").change(function () {
    $('#file-name').text(this.value.replace(/C:\\fakepath\\/i, ''))
})

$('.user-education__history_video').owlCarousel({
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.user-education__history_podcasts').owlCarousel({
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        // 576:{
        //     items:2
        // },
        // 992:{
        //     items:3
        // }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})

$('.user-education__history_literature').owlCarousel({
    loop: false,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        // 576:{
        //     items:2
        // },
        // 992:{
        //     items:3
        // }
    },
    nav: true,
    dots: false,
    navText: ['<img src="img/prev.svg" alt="prev">', '<img src="img/next.svg" alt="next">']
})