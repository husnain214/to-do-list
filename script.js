const toggle = document.getElementById("toggle") 
const inputEl = document.getElementById("inputEl") 
const root = document.querySelector(':root') 
const unorderedList = document.getElementById("list-values")
const itemsLeft = document.getElementById("left") 
const delItems = document.getElementById("right") 
const allItems = document.getElementById("all") 
const activeItems = document.getElementById("active") 
const completedItems = document.getElementById("completed")


let listCount = 0
let listValues = []

toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")

    if (body.classList.contains("dark-mode")) {
        root.style.setProperty('--bg-color', "hsl(237, 14%, 26%)");
        root.style.setProperty('--li-color', "hsl(0, 0%, 98%)");
        root.style.setProperty('--bd-color', "rgb(151, 151, 151)");
        root.style.setProperty('--bd-color2', "rgb(75, 75, 75)");
        toggle.src = "./images/icon-sun.svg" 
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

inputEl.addEventListener("keypress", (event)=>{
    if(event.key === "Enter" && inputEl.value != "") {
        listValues.push({text:inputEl.value, status: "unchecked"})

        renderList()
    }
})

function renderList () {
    let content = ''

    for (let i = 0; i < listValues.length; i++) {
        if (listValues[i].status === "checked") { //CHECKED ITEMS
            content += `
            <li id="list-elements">
                <input type="checkbox" id = "c${i+1}" name= "cb" value = "${i}" checked>
                                                
                <label for="c${i+1}">
                    <p id = "item">${listValues[i].text}</p>
                </label>

                <img src="./images/icon-cross.svg" alt="checkbox" class="deleteBtn" id="${i}">
            </li>
            ` 
        }
        else { //UNCHECKED ITEMS
            content += `
            <li id="list-elements">
                <input type="checkbox" id = "c${i+1}" name= "cb" value = "${i}">
                                                
                <label for="c${i+1}">
                    <p id = "item">${listValues[i].text}</p>
                </label>

                <img src="./images/icon-cross.svg" alt="checkbox" class="deleteBtn" id="${i}">
            </li>
            ` 
        }
        
    }

    itemsLeft.innerText =  `${listValues.length} items Left`
    unorderedList.innerHTML = content
    inputEl.value = ""
}

// Delte Button

body.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteBtn")) {
        let elId = parseInt(event.target.id)

        listValues.splice(elId, 1)

        renderList()
    }
})

// Delete All

delItems.addEventListener ("click", () => {
    listValues = ""
    listCount = 0

    renderList ()
})

// Unchecked Items

activeItems.addEventListener ("click", () => {
    let content = ''

    listValues.forEach (item => {
        if (item.status === "unchecked") {

            content += `
            <li id="list-elements">                                                
                <label>
                    <p id = "item">${item.text}</p>
                </label>
            </li>
            ` 
            unorderedList.innerHTML = content
        }
    })
})

// Completed Items

completedItems.addEventListener("click", () => {
    let content = ''

    listValues.forEach (item => {
        if (item.status === "checked") {
            content += `
            <li id="list-elements">                                                
                <label>
                    <p id = "item">${item.text}</p>
                </label>
            </li>
            ` 
            unorderedList.innerHTML = content
        }
    })
})

allItems.addEventListener ("click", () => {
    renderList ()
})

// This keeps track of the status of every checkbox and updates "status" in array accordingly

setInterval(()=>{
    const checkbox = document.querySelectorAll (`input[type="checkbox"]`)
    
    checkbox.forEach(c=>{
        c.addEventListener ("click", (e)=>{

            for (let i = 0; i < listValues.length; i++) {
                if (e.target.id === "c" + (i + 1)) {
                    if (e.target.checked) listValues[i].status="checked";
                    else listValues[i].status="unchecked";
                }
            }
        })
    })
}, 1000)















