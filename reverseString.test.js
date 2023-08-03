const reverseString = require('./reverseString');

test('{empty} string will return{empty}', () => {
    expect(reverseString('')).toBe('');
});

test('jest should return tsej', () => {
    expect(reverseString('jest')).toBe('tsej');
});

test('"x is y" to be "y si x"', () => {
    expect(reverseString('x is y')).toBe('y si x');
})