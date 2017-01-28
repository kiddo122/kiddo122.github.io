(function ($) {

    'use strict';

    $(document).ready(function () { 
        $("#clevest-btn").click(function(e)
         {
            e.preventDefault();
            $("#clevest-info").stop().slideToggle(1000);
            return false;
         }); 

        $("#ubc-btn").click(function(e)
         {
            e.preventDefault();
            $("#ubc-info").stop().slideToggle(1000);
            return false;
         });
        $("#mojio-btn").click(function(e)
         {
            e.preventDefault();
            $("#mojio-info").stop().slideToggle(1000);
            return false;
         });
        $("#rallyteam-btn").click(function(e)
         {
            e.preventDefault();
            $("#rallyteam-info").stop().slideToggle(1000);
            return false;
         });


        // Init here.
        var $body = $('body'),
            $main = $('#main'),
            $site = $('html, body'),
            transition = 'fade',
            smoothState;

        smoothState = $main.smoothState({
            allowFormCaching: false, 
            onBefore: function($anchor, $container) {
                var current = $('[data-viewport]').first().data('viewport'),
                    target = $anchor.data('target');
                current = current ? current : 0;
                target = target ? target : 0;
                if (current === target) {
                    transition = 'fade';
                } else if (current < target) {
                    transition = 'moveright';
                } else {
                    transition = 'moveleft';
                }
            },
            onStart: {
                duration: 400,
                render: function (url, $container) {
                    $main.attr('data-transition', transition);
                    $main.addClass('is-exiting');
                    $site.animate({scrollTop: 0});
                                    }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    $container.html($newContent);
                    $container.removeClass('is-exiting');
                    $("#clevest-btn").click(function(e)
                     {
                        e.preventDefault();
                        $("#clevest-info").stop().slideToggle(1000);
                        return false;
                     }); 

                    $("#ubc-btn").click(function(e)
                     {
                        e.preventDefault();
                        $("#ubc-info").stop().slideToggle(1000);
                        return false;
                     });
                    $("#mojio-btn").click(function(e)
                     {
                        e.preventDefault();
                        $("#mojio-info").stop().slideToggle(1000);
                        return false;
                     });
                    $("#rallyteam-btn").click(function(e)
                     {
                        e.preventDefault();
                        $("#rallyteam-info").stop().slideToggle(1000);
                        return false;
                     });

                }


            },
        }).data('smoothState');

    });

}(jQuery));



var previousScroll = 0,
    headerOrgOffset = $('#home-top').height();

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('#home-top').slideUp();
        }
    } else {
            $('#home-top').slideDown();
    }
    previousScroll = currentScroll;
});
