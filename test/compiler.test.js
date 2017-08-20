import webpack from "webpack"


describe("compiler", ()=>{
  
  it("entry is required", ()=>{
    var empty = {}
    
    expect(()=> webpack(empty)).toThrow(/misses the property 'entry'/)
  })

  it("compile asynchronizing", ()=>{
    var result = webpack({entry: 'test'}).run(()=>{/*noop*/})

    expect(result).toBeUndefined() 
  })

  it("reports error when entry not found", (done)=>{
    webpack({entry: 'test'}).run(err => {
      expect(err).not.toBeUndefined()
      done()
    }) 
  })
})

