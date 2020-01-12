const express = require('express')
const NotesService = require('./notes-service')
const notesRouter = express.Router()
const jsonParser = express.json()
const uuid = require('uuid')



notesRouter
  .route('/notes')
  .get((req, res, next) => {
    NotesService.getNotes(
      req.app.get('db')
    )
    .then(notes => {
      res.json(notes)
    })
    .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { note_name, content, folder_id, modified } = req.body
    const id = uuid()
    const newNote = {
      id,
      note_name,
      content,
      folder_id,
      modified
    }
    
    NotesService.addNote(
      req.app.get('db'),
      newNote
    )
    .then(note => {
      res
        .status(201)
        .json(note)
    })
    .catch(next)
  })

notesRouter
  .route('/notes/:id')
  .get((req, res, next) => {
    console.log(req.params.id)
    NotesService.getNoteById(
      req.app.get('db'),
      req.params.id
    )
    .then(note => {
      res.json(note)
    })
    .catch(next)
  })
  .delete((req, res, next) => {
    console.log(req.params.id)
    NotesService.deleteNote(
      req.app.get('db'),
      req.params.id
    )
    .then(numRowsAffected => {
      res.status(204).end()
    })
    .catch(next)
  })

module.exports = notesRouter