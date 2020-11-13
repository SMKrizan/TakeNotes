// node dependencies
const fs = require('fs');
const path = require('path');
// npm package for generating a unique id
const uniqid = require('uniqid');


class manager {

    readNote() {

    }

    writeNote() {
        fs.writeFileSync(
            path.join(__dirname, './db.json'),
            JSON.stringify({ newNote: savedNotes }, null, 2)
        )

    }

    getNotes() {

    }
    
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.id = addId();
    }

    addNote(note) {
        const { title, text } = note;
        const newNote = body;
        savedNotes.push(newNote);
        console.log("newNote: ", newNote);
    
    
        return newNote;
    
    }

    addId() {
        id = uniqid.time();
        console.log("id: ", id);
    }

    deleteNote(id) {

    }


}

module.exports = new manager();
