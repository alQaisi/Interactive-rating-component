const numbers=document.querySelectorAll(".numbers .item");
const button=document.querySelector("button");
const rating_comp=document.querySelector(".rating-comp");
const response_comp=document.querySelector(".response-comp");
var active=undefined;
const rating=document.querySelector("#rating");
numbers.forEach(number=>number.addEventListener("click",()=>{
    if(active==undefined)
        active=number;
    else{
        active.classList.remove("active");
        active=number;
    }
    active.classList.add("active");
}));

button.addEventListener("click",()=>{
    if(active!=undefined){
        const state=rating_comp.hidden;
        rating_comp.hidden=!state;
        response_comp.hidden=state;
        rating.textContent=active.id;
    }
});