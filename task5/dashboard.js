const navbtn=document.querySelector('.nav-btn');
const navbar=document.querySelector('.sidebar');
navbtn.addEventListener("click",(event)=>{
    if(navbar.style.display=="none"){
        navbar.style.display="block";
    }else{
        navbar.style.display="none";
    }
});