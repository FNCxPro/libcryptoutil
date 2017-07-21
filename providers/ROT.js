const Provider = require('./Provider')
class ROTProvider extends Provider {
  constructor() {
    super('ROT')
  }
  encode(data, rot) {
    return data.replace(/[a-zA-Z]/g, function (c) {
      return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + rot || 13) ? c : c - 26)
    })
  }
  decode(data, rot) {
    return this.encode(data, 26-rot > 0 ? 26-rot : 13)
  }
}
module.exports = ROTProvider