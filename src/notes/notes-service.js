const NotesService = {
  getNotes(knex) {
    return knex.select('*').from('noteful_notes')
  },
  deleteNote(knex, id) {
    console.log(id)
    return knex('noteful_notes')
      .where({id})
      .delete()
  },
  getNoteById(knex, id) {
    return knex.from('noteful_notes').select('*').where('id', id).first()
  },
  addNote(knex, newNote) {
    return knex
      .into('noteful_notes')
      .insert(newNote)
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  }
}

module.exports = NotesService
