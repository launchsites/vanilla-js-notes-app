

// determine if there is already a note list in storage

const already = localStorage.getItem("list")

if (!already) {
    let list = new noteList()
    localStorage.setItem("list", JSON.stringify(list))
}

// fetching current note list
function fetchFromStorage(){
    let temp = localStorage.getItem("list")
    let parsed = JSON.parse(temp)
    let newList = new noteList(parsed.notes, parsed.lastId)
    return newList
}

console.log(fetchFromStorage())

// setting current note list
function setStorage(noteList) {
    localStorage.setItem("list", JSON.stringify(noteList))
}

// show create window
function showCreateWindow(){
    let theWindow = document.getElementById("createNoteDisplay")
    theWindow.style.visibility = "visible";
}

// close create window
function closeCreateWindow(){
    let theWindow = document.getElementById("createNoteDisplay")
    theWindow.style.visibility = "hidden";
    document.getElementById("success-feedback").innerText = ""
}

// create a note
function createNote(){
    let currentList = fetchFromStorage()
    let noteTitle = document.getElementById("createNoteTitleInput").value
    currentList.addNote(noteTitle, "");
    document.getElementById("createNoteTitleInput").value = ""
    setStorage(currentList)
    document.getElementById("success-feedback").innerText = `${noteTitle} was created successfully!`
}