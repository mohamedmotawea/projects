// spinner start/////
window.addEventListener("load" ,function(){
    const spinner=document.getElementById("spinner_wrapper");
 setTimeout(() => {
               spinner.style.display="none"

}, 300);
});
// spinner end/////



    let next = document.getElementById('next');
    let brev = document.getElementById('brev');
    let carousel_items = document.getElementById('carousel_items');


    let carousel_w = document.getElementById('carousel_item').scrollWidth;
    
//    let carousel_w = carousel_item.scrollWidth ;

next.addEventListener('click' , function(){
    carousel_items.scrollBy(carousel_w,0);
    carousel_items.style.scrollBehavior="smooth";
    


    
});

brev.addEventListener('click', function() {
    carousel_items.scrollBy(-carousel_w,0);
    carousel_items.style.scrollBehavior="smooth";


});



// lazy load

document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll(".lazy");
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    let img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.add('lazy-loaded');
                    observer.unobserve(img);
                }, 500); // تأخير 1 ثانية
            }
        });
    });
    lazyImages.forEach(img => observer.observe(img));
   });














