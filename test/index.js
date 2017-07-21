const expect = require('chai').expect
const libcrypto = require('../index')
const crypto = (new libcrypto.Crypto())

var test_strings = []
test_strings.push({
  raw: 'aaBBccDDeeFFggHHiiJJkkLLmmNNooPPqqRRssTTuuVVwwXXyyZZ',
  rot13: 'nnOOppQQrrSSttUUvvWWxxYYzzAAbbCCddEEffGGhhIIjjKKllMM',
  rot17: 'rrSSttUUvvWWxxYYzzAAbbCCddEEffGGhhIIjjKKllMMnnOOppQQ',
  base64: 'YWFCQmNjRERlZUZGZ2dISGlpSkpra0xMbW1OTm9vUFBxcVJSc3NUVHV1VlZ3d1hYeXlaWg=='
})
test_strings.push({
  raw: 'K2Ey4UeQ8ITvBjvQUfH5',
  rot13: 'X2Rl4HrD8VGiOwiDHsU5',
  rot17: 'B2Vp4LvH8ZKmSamHLwY5',
  base64: 'SzJFeTRVZVE4SVR2Qmp2UVVmSDU='
})
describe('Base64', () => {
  let base64
  it('should find the provider', () => {
    base64 = crypto.getProvider('base64')
    expect(base64.name).to.equal('Base64')
  })
  it('should encode properly', () => {
    expect(base64.encode(test_strings[0].raw)).to.equal(test_strings[0].base64)
    expect(base64.encode(test_strings[1].raw)).to.equal(test_strings[1].base64)
  })
  it('should decode properly', () => {
    expect(base64.decode(test_strings[0].base64)).to.equal(test_strings[0].raw)
    expect(base64.decode(test_strings[1].base64)).to.equal(test_strings[1].raw)
  })
})
describe('ROT', () => {
  let rot
  it('should find the provider', () => {
    rot = crypto.getProvider('rot')
    expect(rot.name).to.equal('ROT')
  })
  it('should encode properly', () => {
    expect(rot.encode(test_strings[0].raw, 13)).to.equal(test_strings[0].rot13)
    expect(rot.encode(test_strings[0].raw, 17)).to.equal(test_strings[0].rot17)
    expect(rot.encode(test_strings[1].raw, 13)).to.equal(test_strings[1].rot13)
    expect(rot.encode(test_strings[1].raw, 17)).to.equal(test_strings[1].rot17)
  })
  it('should decode properly', () => {
    expect(rot.decode(test_strings[0].rot13, 13)).to.equal(test_strings[0].raw)
    expect(rot.decode(test_strings[0].rot17, 17)).to.equal(test_strings[0].raw)
    expect(rot.decode(test_strings[1].rot13, 13)).to.equal(test_strings[1].raw)
    expect(rot.decode(test_strings[1].rot17, 17)).to.equal(test_strings[1].raw)
  })
})