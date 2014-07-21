/** Javascript for Christian's Portfolio.
 *  @author Christian Le */


$(document).ready(function () {

    $(window).scroll(function(){
        var windowPos = $(window).scrollLeft(); // get the offset of the window from the top of page
        var windowWidth = $(window).width(); // get the height of the window
        var docWidth = $(document).width();
        var sixtyWindow = $(window).height() * .4;

        var flareLoc = $("div#flare_start").offset().left - sixtyWindow;
        var concertLoc = $("div#concert_start").offset().left - sixtyWindow;
        var productLoc = $("div#prod_start").offset().left - sixtyWindow;
        
        if (windowPos + windowWidth == docWidth) {
            $("#photo_nav ul #flare").removeClass("active");
            $("#photo_nav ul #conc").removeClass("active");
            $("#photo_nav ul #prod").addClass("active");
        } else if (windowPos >= productLoc) {
            $("#photo_nav ul #flare").removeClass("active");
            $("#photo_nav ul #conc").removeClass("active");
            $("#photo_nav ul #prod").addClass("active");
        } else if (windowPos >= concertLoc) {
            $("#photo_nav ul #flare").removeClass("active");
            $("#photo_nav ul #conc").addClass("active");
            $("#photo_nav ul #prod").removeClass("active");
        } else if (windowPos >= flareLoc) {
            $("#photo_nav ul #flare").addClass("active");
            $("#photo_nav ul #conc").removeClass("active");
            $("#photo_nav ul #prod").removeClass("active");
        }
    });

    $("#photo_nav ul #flare").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: 0
        }, 2000); 
    });

    $("#photo_nav ul #conc").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#concert_start").offset().left
        }, 2000); 
    });

    $("#photo_nav ul #prod").click(function(evn){
        evn.preventDefault();
        $('html, body').animate({
            scrollLeft: $("div#prod_start").offset().left
        }, 2000); 
    });
    
});