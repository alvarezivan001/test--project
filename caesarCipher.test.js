const caesarCipher = require('./caesarCipher');

test('cat is dbu',() => {
    expect(caesarCipher('cat')).toBe('dbu')
})

test('zebra is afcsb',() => {
    expect(caesarCipher('zebra')).toBe('afcsb')
})

test('Hello is Ifmmp',() => {
    expect(caesarCipher('Hello')).toBe('Ifmmp')
})

test('I am here is J bn ifsf',() => {
    expect(caesarCipher('I am here')).toBe('J bn ifsf')
})

test('Who? is Xip?',() => {
    expect(caesarCipher('Who?')).toBe('Xip?')
})
