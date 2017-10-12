
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('users', function (table) {
      table.bigincrements('id').primary()
      table.string('name')
      table.timestamps()
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
}
