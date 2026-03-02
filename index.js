

// determine if there is already a note list in storage

const already = localStorage.getItem("list")

if (!already) {
    let list = new noteList()
    localStorage.setItem("list", JSON.stringify(list))
}

// fetching current note list
function fetchFromStorage(){
    let temp = localStorage.getItem("list")
    return JSON.parse(temp)
}

console.log(fetchFromStorage())

// setting current note list
function setStorage(noteList) {
    localStorage.setItem("list", JSON.stringify(noteList))
}

