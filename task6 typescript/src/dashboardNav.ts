const navbtn=document.querySelector('.nav-btn') as HTMLElement;
const navbar=document.querySelector('.sidebar') as HTMLElement;
const hasSubMenu=document.querySelectorAll('.has-submenu');

let hamburger:boolean=false;
let navitem:boolean=false;


function showNav(): void{
  if(hamburger || navitem){
    navbar.classList.add('show');
    navbtn.style.filter="brightness(0) saturate(100%) invert(1)";

  }else{
    navbar.classList.remove('show');
    navbtn.style.filter="";
  }
}

hasSubMenu.forEach(submenu=>{
    submenu.addEventListener('click',(event)=>{
        const arrow=submenu.querySelector('.arrow') as HTMLElement;
        const subItem=submenu.querySelector('.sub-items') as HTMLElement;
        arrow.classList.toggle('show');
        subItem.classList.toggle('show');
        submenu.classList.toggle('show');
    });
});

navbtn.addEventListener("mouseover",(event)=>{
  hamburger=true;
    showNav();
});

navbar.addEventListener("mouseover",(event)=>{
  navitem=true;
  showNav();
});

navbar.addEventListener("mouseleave",(event)=>{
  navitem=false;
  showNav();
})

navbtn.addEventListener("mouseleave",(event)=>{
  hamburger=false;
  showNav();
});

