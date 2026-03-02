let input = document.querySelector(".TODO")
let button = document.querySelector(".todo-actions")
let varoq = document.querySelector(".todo-list")
let delet = document.querySelector("#delet")
// click efekti
button.addEventListener("click",()=>{
    let yozu = input.value
    if (yozu == "") {
       return alert("siz xali vazifangizli yozmadingiz")
    }

    console.log(yozu);
    varoq.innerHTML+=`<div class="todo-item" style="cursor: pointer;">
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
// === data
const date = document.getElementById('date')
const name = document.getElementById('name_data')
const vaqt = new Date()

const soat = vaqt.getHours()  < 10 ? '0' + vaqt.getHours() : vaqt.getHours()
const minut = vaqt.getMinutes()  < 10 ? '0' + vaqt.getMinutes() : vaqt.getMinutes()

console.log(`${soat} : ${minut} `);

setInterval(() => {
    const now = new Date()
    const siqunt = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()
    date.innerText = ''
    date.innerText += `${soat} : ${minut} : ${siqunt}`
}, 1000);
