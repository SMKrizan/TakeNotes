// node dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
// npm package for generating a unique id
const uniqid = require('uniqid');


class notesManager {

    readNote() {
        return readFile('/db.json', 'utf8')
    }

    writeNote(note) {
        return writeFile('/db.json', JSON.stringify(note));
    }

    // getNotes() {
    //     return this.read().then((notes) => {
    //         let parsedNotes;
    //     })

    //     try {
    //         parsedNotes = []
    //     }
    // }

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

module.exports = new notesManager();
