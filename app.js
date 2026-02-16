let input = document.querySelector(".input")
let button = document.querySelector(".add")
let varoq = document.querySelector(".list")
let delet = document.querySelector("#delet")
// click efekti
button.addEventListener("click",()=>{
    let yozu = input.value
    console.log(yozu);
    varoq.innerHTML+=`<div class="variant" style="cursor: pointer;">
    <input type="checkbox" id="checkbox" onclick="toggleTask(this)">
    <span>${yozu}</span>
    <span class="material-symbols-outlined" id="delet" >delete</span>
    </div>`
    input.value = ""
})
varoq.addEventListener("click", (e) => {
    if(e.target.id === "delet"){
        e.target.parentElement.remove()
    }
})