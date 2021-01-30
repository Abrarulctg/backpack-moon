$(document).on("scroll", function(){
        if ($(document).scrollTop() > 40){
            $(".primary-nav").addClass("shrink");
        } else {
            $(".primary-nav").removeClass("shrink");
        }
});