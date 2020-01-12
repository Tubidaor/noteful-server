const FoldersService = {
  getFolders(knex) {
    return knex.select('*').from('noteful_folders')
  },
  deleteFolder(knex, id) {
    return knex.from('noteful_folders').where({id}).delete()
  },
  addFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('noteful_folders')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  }
}

module.exports = FoldersService
