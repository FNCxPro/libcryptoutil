const Provider = require('./Provider')
class Base64Provider extends Provider {
  constructor() {
    super('Base64')
  }
  encode(data) {
    return Buffer.from(data).toString('base64')
  }
  decode(data, digest) {
    return Buffer.from(data, 'base64').toString(digest || 'ascii')
  }
}
module.exports = Base64Provider