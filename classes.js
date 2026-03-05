class note {
    constructor(id, title, noteText) {
        this.id = id;
        this.title = title;
        this.noteText = noteText;
    }
    replaceTitle(title) {
        this.title = title
    }
    replaceNote(text) {
        this.noteText = text
    }
}

class noteList {
    constructor(notes, lastId){
        this.notes = notes || []
        this.lastId = lastId || 0
    }
    addNote(title, textNote){
        this.lastId ++
        let addedNote = new note(this.lastId, title, textNote)
        this.notes = [...this.notes, addedNote];
    }
    removeNote(noteId) {
        let newArray = []
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id !== noteId) {
                newArray = [...newArray, this.notes[i]]
            }
        }
        this.notes = newArray;
    }
    findNoteId(text){

        let returnIds = []

        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].title.toLowerCase().includes(text.toLowerCase())) {
                returnIds = [...returnIds, this.notes[i].id]
            }
        }

        return returnIds
    }
    findNoteById(noteId) {
        for (let i = 0; i < this.notes.length; i++) {
            if (this.notes[i].id === noteId) {
                return this.notes[i]
            }
        }
    }
}



