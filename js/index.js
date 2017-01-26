var previousScroll = 0,
    headerOrgOffset = $('#home-top').height();

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#home-top').slideUp();
        } else {
            $('#home-top').slideDown();
        }
    } else {
            $('#home-top').slideDown();
    }
    previousScroll = currentScroll;
});

$('#about').click(function() {

    $(this).animate({
        left: '-50%'
    }, 500, function() {
        $(this).css('left', '150%');
        $(this).appendTo('#container');
    });

    $(this).next().animate({
        left: '50%'
    }, 500);
});
