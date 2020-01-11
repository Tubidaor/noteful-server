const express = require('express')
const FoldersService = require('./folders-service')
const foldersRouter = express.Router()



foldersRouter
  .route('/folders')
  .get((req, res, next) => {
    FoldersService.getFolders(
      req.app.get('db')
    )
    .then(folders => {
      res.json(folders)
    })
    .catch(next);
  })

module.exports = foldersRouter