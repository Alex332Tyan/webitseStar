var but = document.getElementById("btn1") 
 
 
function myfun() { 
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop  > 20) { 
        but.style.display = 'block'; 
    } else { 
        but.style.display = 'none'; 
    } 
} 
 
window.onscroll = function(){ 
    myfun() 
} 
 
function scrolltop() { 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}



// $(window).scroll(function() {

//     $(".section").each(function() {

//         var x = $(window).scrollTop() + $(window).height();
//         var y = $(this).offset().top + $(this).height() / 2;

//         if (x >= y) {
//             $(this).addClass('activeSec');

//         };

//     });


// });

