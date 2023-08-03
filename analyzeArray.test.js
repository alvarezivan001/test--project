const analyzeArray = require('./analyzeArray');

test('[5,3,1] is {avg:4.5, min:1, max:5, length:3}', () => {
    expect(analyzeArray([5,3,1])).toEqual({
        avg: 3,
        min: 1,
        max: 5,
        length: 3,
    })
})

test('[-5,3,-1,4] is {avg:.5, min:-5, max:3, length:4}', () => {
    expect(analyzeArray([-5,3,-1,4])).toEqual({
        avg: .25,
        min: -5,
        max: 4,
        length: 4,
    })
})
