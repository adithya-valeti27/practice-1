const sum = require('./sum')

test("whether um of 10 and 20 is 30",()=>{
    expect(sum(10,20)).toBe(30)
})