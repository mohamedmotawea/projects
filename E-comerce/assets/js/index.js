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
    carousel_items.style.overflow=''


    let carousel_w = document.getElementById('carousel_item').offsetWidth
    carousel_items.
//    let carousel_w = carousel_item.scrollWidth ;

next.addEventListener('click' , function(){
    carousel_items.scrollBy(carousel_w,0);
    carousel_items.style.scrollBehavior="smooth";
    
    carousel_items.style.overflow=''


    
});

brev.addEventListener('click', function() {
    carousel_items.scrollBy(-carousel_w,0);
    carousel_items.style.scrollBehavior="smooth";


});








