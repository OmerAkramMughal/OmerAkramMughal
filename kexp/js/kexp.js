
$('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.sub').click(function () {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



//,,,,,,,,,,,,,,,,//
//......................//

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        dots: false,
        smartSpeed: 900,
        navText: ["<i class='fas fa-angle-double-left arrow'></i>", "<i class='fas fa-angle-double-right arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 3
            },
            1440: {
                items: 5
            }
        }
    })
});

//......................//
//,,,,,,,,,,,,,,,,//

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else {
            currLink.removeClass("active");
        }
    });
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('.fixed-top').css('background', 'transparent');
    } else {
        $('.fixed-top').css('background', '#ffffff');
    }
});

