const navbtn=document.querySelector('.nav-btn');
const navbar=document.querySelector('.sidebar');
// const arrow=document.querySelectorAll('.arrow');
const hasSubMenu=document.querySelectorAll('.has-submenu');

let hamburger=false;
let navitem=false;


function showNav(){
  if(hamburger || navitem){
    navbar.classList.add('show');
  }else{
    navbar.classList.remove('show');
  }
}


hasSubMenu.forEach(submenu=>{
    submenu.addEventListener('click',(event)=>{
        const arrow=submenu.querySelector('.arrow');
        const subItem=submenu.querySelector('.sub-items');
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

