const capitalize = require('./capitalize');

test('{empty} string should return {empty}', () => {
    expect(capitalize('')).toBe('');
});

test('jest should return Jest',() => {
    expect(capitalize('jest')).toBe('Jest');
});

test('Jest should return Jest', () =>{
    expect(capitalize('Jest')).toBe('Jest');
});
