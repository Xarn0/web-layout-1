let ocin = document.querySelectorAll('.tabl_icon')
ocin.forEach((i)=>{
    i.addEventListener('click',(envent)=>{
        for(let i = 0 ; i<ocin.length;i++){
            ocin[i].classList.remove('active')
        }
       i.classList.add('active')
    })
})

let slider = new Swiper('.myswiper',{
    slidesPerView: 1,
    spaceBetween: 10,
    speed:2,
    navigation: {
        nextEl: '.myswiper__paginator-next',
        prevEl: '.myswiper__paginator-prev',
      },
})