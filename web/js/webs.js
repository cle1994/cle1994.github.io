/** Javascript for Christian's Portfolio.
 *  @author Christian Le */


$(document).ready(function () {

    //  var oddclick = true;
    // $("#burger").click(function() {
    //     if (oddclick) {
    //         $(".menu #main_nav").fadeIn(600);
    //     } else {
    //         $(".menu #main_nav").fadeOut(600); 
    //     }
    //     oddclick = !oddclick;
    // });

    // $(document).mouseup(function (e) {
    //     var container = $("#burger");

    //     if (!container.is(e.target)
    //         && container.has(e.target).length === 0)
    //     {
    //         $(".menu #main_nav").fadeOut(600);
    //         oddclick = !oddclick;
    //     }
    // });

    $(window).scroll(function(){
        var windowPos = $(window).scrollLeft(); // get the offset of the window from the top of page
        var windowWidth = $(window).width(); // get the height of the window
        var docWidth = $(document).width();

        var web1 = $("div#innod").offset().left - 100;
        var web2 = $("div#andieweb").offset().left - 100;
        var web3 = $("div#web2start").offset().left - 100;
        
        if (windowPos + windowWidth == docWidth) {
            $("#web_nav ul #web2").addClass("active");
            $("#web_nav ul #andie").removeClass("active");
            $("#web_nav ul #innod").removeClass("active");
        } else if (windowPos >= web3) {
            $("#web_nav ul #web2").addClass("active");
            $("#web_nav ul #andie").removeClass("active");
            $("#web_nav ul #innod").removeClass("active");
        } else if (windowPos >= web2) {
            $("#web_nav ul #web2").removeClass("active");
            $("#web_nav ul #andie").addClass("active");
            $("#web_nav ul #innod").removeClass("active");
        } else if (windowPos >= web1) {
            $("#web_nav ul #innod").addClass("active");
            $("#web_nav ul #web2").removeClass("active");
            $("#web_nav ul #andie").removeClass("active");
        }
    });

    $("#web_nav ul #innod").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: 0
        }, 1000); 
    });

    $("#web_nav ul #andie").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#andieweb").offset().left
        }, 1000); 
    });

    $("#web_nav ul #web2").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#web2start").offset().left
        }, 1000); 
    });

    // // Popup Window
    // var scrt = $(window).scrollTop();
    // $(window).scroll(function() {
    //     scrt = $(window).scrollTop();
    // });

    // // Window Height
    // $.getDocHeight = function() {
    //     var D = document;
    //     return Math.max(Math.max(D.body.scrollHeight, D.documentElement.scrollHeight), Math.max(D.body.offsetHeight, D.documentElement.offsetHeight), Math.max(D.body.clientHeight, D.documentElement.clientHeight));
    // };

    // // Window ScrollTop Offset
    // $('[data-full]').on('click', function(e) {
    //     e.preventDefault();

    //     $('#popup').find('img').remove();
    //     $('#popup').find('img');
    //     $('#popup-window').height($.getDocHeight).fadeTo(0, 0).css({marginLeft : 0}).fadeTo(300, 1);

    //     var imgload = $(this).data('full');
    //     $('<img>', {src : imgload, height : '100%'}).appendTo('#popup');
    // });

    // // Close popup
    // $('#popup-window').on('click', function() {
    //     $('#popup-window').fadeTo(300, 0, function() {
    //         $(this).hide();
    //     });
    // });

    // $('#popup').on('click', function(ev) {
    //     ev.stopPropagation();
    // });
    
});