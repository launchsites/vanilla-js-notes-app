class note {
    constructor(id, title, note) {
        this.id = id;
        this.title = title;
        this.note = note;
    }
}

class noteList {
    constructor(){
        this.notes = []
    }
    addNote(note){
        this.notes = [...this.notes, note];
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



