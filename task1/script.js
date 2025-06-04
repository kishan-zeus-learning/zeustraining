const fullName=document.getElementById("name");
const comments=document.getElementById("comments");
const genderMale=document.getElementById("male");
const genderFemale=document.getElementById("female");
const btn=document.getElementById("submit");

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(!fullName.value){
        alert("please enter name");
        return ;
    }
    if(!comments.value){
        alert("please enter comments");
        return ;
    }

    if(genderMale.checked && genderFemale.checked){
        alert("Can't enter 2 genders");
        return ;
    }

    if(!genderMale.checked && !genderFemale.checked){
        alert("Please enter gender");
        return ;
    }

    console.log("full name: ",fullName.value);
    console.log("comments: ",comments.value);
    if(genderFemale.checked){
        console.log("gender: Female");
    }

    if(genderMale.checked){
        console.log("gender: Male");
    }


});