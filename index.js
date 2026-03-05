var activeNote

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

    let parsedNotes = []

    for (let i = 0; i < parsed.notes.length; i++)
        parsedNotes = [...parsedNotes, new note(parsed.notes[i].id, parsed.notes[i].title, parsed.notes[i].noteText)]

    let newList = new noteList(parsedNotes, parsed.lastId)
    // issue is it's going in as not note
    // parsed.notes instead needs to be an array of note objects
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
        output += `<button onclick="generateNoteDisplay(${currentList.notes[i].id})" class='sidebarItem' id="sidebar-${currentList.notes[i].id}">${currentList.notes[i].title}</button><hr class='divider'>`
    }

    const length = output.length - 20

    output = output.slice(0, length)

    document.getElementById("noteSidebar").innerHTML = output
    console.log(output)

}

function generateNoteDisplay(noteId){

    if (activeNote) {
        document.getElementById(`sidebar-${activeNote}`).style.fontWeight = "normal"
    }


    let currentList = fetchFromStorage()

    let noteText

    if (!noteId) {
        noteText = "Create a new note!"
    }
    else {
        let thatNote = currentList.findNoteById(noteId)
        noteText = thatNote.noteText
        document.getElementById(`sidebar-${noteId}`).style.fontWeight = "bold"
    }

    document.getElementById("noteEditor").value = noteText;




    activeNote = noteId
    console.log(noteText)



}


function deleteNote (confirmation) {

    if (activeNote) {
        let currentList = fetchFromStorage()

        if (confirmation === "y") {
            currentList.removeNote(activeNote)
            setStorage(currentList)
            generateSidebar()
            generateNoteDisplay()
            document.getElementById("deleteNoteConfirmation").style.visibility = "hidden";
            activeNote = null
        }

        else if (confirmation === "n") {
            document.getElementById("deleteNoteConfirmation").style.visibility = "hidden";
        }

        else {
            document.getElementById("deleteNoteConfirmation").style.visibility = "visible"
            let noteTitle = currentList.findNoteById(activeNote).title
            document.getElementById("deleteConfirmationText").innerText = `Are you sure that you want to delete ${noteTitle}?`
        }
    }



    //do error feedback for if no active note

}

// save written content

function saveWrittenContent() {
    let writtenContent = document.getElementById("noteEditor").value
    let currentList = fetchFromStorage();
    let openNote = currentList.findNoteById(activeNote)
    openNote.replaceNote(writtenContent);
    setStorage(currentList);
    console.log("function run ")
}

generateSidebar()