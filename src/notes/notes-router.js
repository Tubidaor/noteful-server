const express = require('express')
const NotesService = require('./notes-service')
const notesRouter = express.Router()



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

notesRouter
  .route('/notes/:id')
  .get((req, res, next) => {
    NotesService.getNotesById(
      req.app.get('db'),
      req.params.id
    )
    .then(note => {
      res.json(note)
    })
  })

module.exports = notesRouter