const form=document.getElementById("form");
const display=document.getElementById("display");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const user={
        name:e.target.elements.name.value,
        age:e.target.elements.age.value,
    };
    display.textContent=`Name: ${user.name}, Age:${user.age}`;
    e.target.reset();
})