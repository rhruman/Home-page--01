$(document).ready(function(){
    $(".first-owl").owlCarousel({
        items:1,
        navText: ["<img src='prev-icon.png'>","<img src='next-icon.png'>"],
        // autoplay:true,
        // autoplayTimeout:1500,
        // loop:true,
        responsive:{
            0:{
                nav:false,
                dots:false
            },
            700:{
                nav:true,
                dots:true
            }
        
        }
    })
})





