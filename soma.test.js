function soma(a, b) {
    return a+b
}

test('should first', () => { 
    expect(soma(1,2)).toBe(3)
})