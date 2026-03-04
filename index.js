

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
    generateSidebar()
}

//generate HTML for sidebar
// <div class='sidebarItem'>awesome note</div><hr class='divider'><div class='sidebarItem'>even better note</div><hr class='divider'><div class='sidebarItem'>even more awesome</div>
function generateSidebar(){
    let currentList = fetchFromStorage()

    let output = ""

    for (let i = currentList.notes.length - 1; i >= 0; i --) {
        output += `<div class='sidebarItem'>${currentList.notes[i].title}</div><hr class='divider'>`
    }

    const length = output.length - 20

    output = output.slice(0, length)

    document.getElementById("noteSidebar").innerHTML = output
    console.log(output)

}


generateSidebar()