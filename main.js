window.addEventListener("scroll" , ()=>{
    if(window.scrollY>200){
        document.querySelector(".navbar").classList.add("change-bg")
    }else{
        document.querySelector(".navbar").classList.remove("change-bg")
    }
})
if(window.scrollY>200){
    document.querySelector(".navbar").classList.add("change-bg")
}else{
    document.querySelector(".navbar").classList.remove("change-bg")
}
//
document.querySelectorAll(".slideInLeft button").forEach((btn,i)=>{
    btn.onclick=function change(params) {
        console.log(btn.id);
        document.querySelectorAll(".filter-container").forEach(a=>{
            a.classList.remove("active")
        })
        document.querySelectorAll(".filter-container")[i].classList.add("active")
    }
})
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
new WOW().init();

