const control=document.querySelector(".control");
let circle=document.querySelector(".circle");
let numbers=document.querySelectorAll(".number");
let hiddens=document.querySelectorAll(".hidden");
let buts=document.querySelectorAll(" .button")


circle.style.left="3px";
control.addEventListener(("click"),()=>{
    if(circle.style.left=="3px"){
        circle.style.left="24px"
        hiddens.forEach((hidden)=>{
            hidden.style.display="block"
            numbers.forEach((number)=>{
                number.style.display="none"
            })
        })
    }else{
     circle.style.left="3px"
     hiddens.forEach((hidden)=>{
        hidden.style.display="none"
        numbers.forEach((number)=>{
            number.style.display="block"
        })
    })
    }
})
buts.forEach((button)=>{
    console.log(button)
    button.addEventListener("click",()=>{
        alert("thank you")
    })
})
