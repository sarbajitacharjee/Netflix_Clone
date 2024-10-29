$(document).ready(function () {

    // Autoplay hero section video
    setTimeout(function () {
        document.getElementById("hero-video").play();
    }, 3000);

    // Show poster after video ends
    const heroVideo = document.getElementById("hero-video");
    heroVideo.addEventListener("ended", function() {
        heroVideo.load();  // This reloads the video, displaying the poster
    });

    // On scroll, change header color and pause/play video
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $("header").css("background-color", "black");
            heroVideo.pause();
        } else if($(window).scrollTop() < 10) {
            $("header").css("background-color", "transparent");
            heroVideo.play();
        }
    });

    // Owl carousel settings
    $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    // Autoplay video on hover over a video item
    var figure = $(".video").hover(hoverVideo, hideVideo);

    function hoverVideo(e) {
        $('video', this).get(0).play();
    }

    function hideVideo(e) {
        $('video', this).get(0).pause();
        $('video', this).get(0).load();
    } 

});
