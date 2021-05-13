$(function () {
    $("#services-slider").owlCarousel({
        items: 3,
        margin: 20,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     480: {
        //         items: 2
        //     },
        //     720: {
        //         items: 2
        //     }
        // }
    });
})

$("#isotope-container").isotope({});
$('#isotope-filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $("#isotope-container").isotope({
        filter: filterValue
    });

    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
});
