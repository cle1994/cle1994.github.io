$(document).ready(function () {
    
    "use strict";

    // var oddclick = true;
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
        var sixtyWindow = $(window).height() * .4;

        var studentLoc = $("div#student_start").offset().left - sixtyWindow;
        var photographerLoc = $("div#photographer_start").offset().left - sixtyWindow;
        var designerLoc = $("div#designer_start").offset().left - sixtyWindow;
        
        if (windowPos + windowWidth == docWidth) {
            $("#photo_nav ul #stu").removeClass("active");
            $("#photo_nav ul #pho").removeClass("active");
            $("#photo_nav ul #des").addClass("active");
        } else if (windowPos >= designerLoc) {
            $("#photo_nav ul #stu").removeClass("active");
            $("#photo_nav ul #pho").removeClass("active");
            $("#photo_nav ul #des").addClass("active");
        } else if (windowPos >= photographerLoc) {
            $("#photo_nav ul #stu").removeClass("active");
            $("#photo_nav ul #pho").addClass("active");
            $("#photo_nav ul #des").removeClass("active");
        } else if (windowPos >= studentLoc) {
            $("#photo_nav ul #stu").addClass("active");
            $("#photo_nav ul #pho").removeClass("active");
            $("#photo_nav ul #des").removeClass("active");
        }
    });

    $("#photo_nav ul #stu").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: 0
        }, 2000); 
    });

    $("#photo_nav ul #pho").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#photographer_start").offset().left
        }, 2000); 
    });

    $("#photo_nav ul #des").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#designer_start").offset().left
        }, 2000); 
    });
    
    // var sectionHeight = $(window).height();
    
    // $("#about-me").css("margin-bottom", sectionHeight * 2);
    // $(".outer").css("height", sectionHeight);
    // $("#about-me").css("height", sectionHeight);
    // $("#about-photo").css("height", sectionHeight);
    // $("#about-cs").css("height", sectionHeight);
    
    // var windw = this;

    // $.fn.followTo = function (pos) {
    //     var $this = this;
    //     var $window = $(windw);
        
    //     $window.scroll(function (e) {
    //         if ($window.scrollTop() > pos) {
    //             $this.css({
    //                 position: 'absolute',
    //                 top: pos + 300
    //             });
    //         } else {
    //             $this.css({
    //                 position: 'fixed',
    //                 top: '300px'
    //             });
    //         }
    //     });
    // };
    
    // var totalheight1 = $(".main-nav").height() + $("#aboutwrapper").height() + $("#about-me").height() - 300;
    
    // var totalheight2 = $(".main-nav").height() + $("#aboutwrapper").height() + $("#about-me").height() + $("#about-cs").height() - 300;
    
    // $('#about-photo').followTo(totalheight1);
    // $('#about-cs').followTo(totalheight2);
    
});