const calculator = require('./calculator');

test('add 1 + 3 is 4', () =>{
    expect(calculator.add(1,3)).toBe(4)
})

test('add 1 and -3 is -2',() => {
    expect(calculator.add(1,-3)).toBe(-2)
})

test('add .5 and .2 is 7',() => {
    expect(calculator.add(.5,.2)).toBe(.7)
})

test('subtract 3 - 1 is 2',() => {
    expect(calculator.subtract(3,1)).toBe(2)
})

test('subtract 1 - -3 is 4',() => {
    expect(calculator.subtract(1,-3)).toBe(4)
})

test('subtract .5 - .2 is .3',() => {
    expect(calculator.subtract(.5,.2)).toBe(.3)
})

test('multiply 2 and 3 is 6',() => {
    expect(calculator.multiply(2,3)).toBe(6)
})

test('multiply 2 and -3 is -6',() => {
    expect(calculator.multiply(2,-3)).toBe(-6)
})

test('multiply .5 and .2 is .1',() => {
    expect(calculator.multiply(.5,.2)).toBe(.1)
})

test('divide 4 and 2 is 2', () => {
    expect(calculator.divide(4,2)).toBe(2)
})

test('divide 1 and -3 is .33...', () => {
    expect(calculator.divide(1,-3)).toBe(-.3333333333333333)
})

test('divide .5 and .2 is 2.5',() => {
    expect(calculator.divide(.5,.2)).toBe(2.5)
})

test('divide 3 and 0 is ERROR',() => {
    expect(calculator.divide(3,0)).toBe('ERROR')
})