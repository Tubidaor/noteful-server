const express = require('express')
const FoldersService = require('./folders-service')
const foldersRouter = express.Router()
const uuid = require('uuid')
const jsonParser = express.json()


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
  .post(jsonParser, (req, res, next) => {
    const { folder_name } = req.body
    const id = uuid()
    const newFolder = { id, folder_name}
    console.log(folder_name)
    FoldersService.addFolder(
      req.app.get('db'),
      newFolder
    )
    .then(folder => {
      res
        .status(201)
        .json(folder)
    })
    .catch(next)
  })

module.exports = foldersRouter