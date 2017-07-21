class Provider {
  constructor(name) {
    this.name = name || 'Default'
  }
  encode(data) {
    return data
  }
  decode(data, digest) {
    return data
  }
}
module.exports = Provider