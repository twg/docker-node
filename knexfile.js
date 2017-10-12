const { postgres } = require('config')

module.exports = {
  client: 'pg',
  connection: postgres.uri
}

