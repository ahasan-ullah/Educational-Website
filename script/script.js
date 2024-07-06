window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})

const faqs=document.querySelectorAll('.faq');

faqs.forEach(faq=>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open');

    const icon=faq.querySelector('.faq__icon i');
    if(icon.className==='uil uil-plus'){
      icon.className='uil uil-minus';
    }
    else{
      icon.className='uil uil-plus';
    }
  })
})

const menu=document.querySelector(".nav__menu");
const openMenu=document.querySelector("#open-menu-btn");
const closeMenu=document.querySelector("#close-menu-btn");

openMenu.addEventListener('click',()=>{
  menu.style.display="flex";
  closeMenu.style.display="inline-block";
  openMenu.style.display="none";
})

closeMenu.addEventListener('click',()=>{
  menu.style.display="none";
  openMenu.style.display="inline-block";
  closeMenu.style.display="none";
})