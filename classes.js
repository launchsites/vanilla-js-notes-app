class note {
    constructor(id, title, note) {
        this.id = id;
        this.title = title;
        this.note = note;
    }
    replaceTitle(title) {
        this.title = title
    }
    replaceNote(text) {
        this.note = text
    }
}

class noteList {
    constructor(){
        this.notes = []
        this.lastId = 0
    }
    addNote(title, note){
        this.lastId ++
        this.notes = [...this.notes, new note (this.lastId, title, note)];
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



