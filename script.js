const toggle = document.getElementById("toggle") 
const inputEl = document.getElementById("inputEl") 
const root = document.querySelector(':root') 
const inputBtn = document.getElementById("c1") 
const unorderedList = document.getElementById("list-values")
const itemsLeft = document.getElementById("left") 
const allItems = document.getElementById("all") 
const activeItems = document.getElementById("active") 
const completedItems = document.getElementById("completed") 

let listCount = 0
let listValues = []

toggle.addEventListener("click", ()=>{
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        root.style.setProperty('--bg-color', "hsl(237, 14%, 26%)");
        root.style.setProperty('--li-color', "hsl(0, 0%, 98%)");
        root.style.setProperty('--bd-color', "rgb(151, 151, 151)");
        root.style.setProperty('--bd-color2', "rgb(75, 75, 75)");
        toggle.src = "/images/icon-sun.svg" 
        body.style.background = "url('./images/bg-desktop-dark.jpg') no-repeat"

        if(window.innerWidth < 500) {
            body.style.background = "url('./images/bg-mobile-dark.jpg') no-repeat"
        }
    }
    else {
        root.style.setProperty('--bg-color', "hsl(0, 0%, 98%)");
        root.style.setProperty('--li-color', "#202020");
        root.style.setProperty('--bd-color', "hsl(192, 100%, 67%)");
        root.style.setProperty('--bd-color2', "rgb(218, 218, 218)");
        toggle.src = "./images/icon-moon.svg" 
        body.style.background = "url('./images/bg-desktop-light.jpg') no-repeat"

        if(window.innerWidth < 500) {
            body.style.background = "url('./images/bg-mobile-light.jpg') no-repeat"
        }
    }
})

inputBtn.addEventListener("click", (event)=> {
    if (inputEl.value != "") {
        listValues.push(inputEl.value)

        listCount++

        renderList()
    }
})

inputEl.addEventListener("keypress", (event)=>{
    if(event.key==="Enter" && inputEl.value != "") {
        listValues.push(inputEl.value)

        renderList()
    }
})

function renderList () {
    let content = ''

    for (let i = 0; i < listValues.length; i++) {
        content += `
        <li id="list-elements">
            <input type="checkbox" id = "cb" name= "cb">
                                            
            <label for="c${i+1}">
                <p id = "item">${listValues[i]}</p>
            </label>

            <img src="./images/icon-cross.svg" alt="checkbox" class="deleteBtn" id="${i}">
        </li>
        ` 
    }

    itemsLeft.innerText =  `${listValues.length} items Left`
    unorderedList.innerHTML = content
    inputEl.value = ""
}

body.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        let elId = parseInt(event.target.id)

        listValues.splice(elId, 1)

        renderList()
    }
})











