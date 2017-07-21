const path = require('path')
const fs = require('fs')
const Provider = new (require('../providers/Provider'))
const PROVIDERS = [
  new (require(path.join('..', 'providers', 'Base64.js'))),
  new (require(path.join('..', 'providers', 'ROT.js')))
]

class Crypto {
  constructor() {
    this.providers = PROVIDERS 
  }
  getProvider(name) {
    let providers = this.providers
    let ret = Provider
    for(let key in providers) {
      if(!providers.hasOwnProperty(key)) continue
      let provider = providers[key]
      if(provider.name.toLowerCase() == name.toLowerCase()) {
        ret = provider
        break
      }
    }
    return ret
  }
  encode(provider, data, ...args) {
    provider = this.getProvider(provider)
    return provider.encode(data, ...args)
  }
  decode(provider, data, ...args) {
    provider = this.getProvider(provider)
    return provider.decode(data, ...args)
  }
}
module.exports = Crypto