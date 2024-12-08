const namesList = require('./obj')

test("test whether there is a name with adithya ",()=>{
    const personsName = namesList.map((persons)=>persons.name)
    expect(personsName).toContain("Adithya")
})