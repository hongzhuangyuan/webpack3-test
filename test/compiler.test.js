describe("compiler", () => {

  it("entry is required", () => {
    var noOptions = {}
    
    expect(()=> compile(noOptions)).toThrow(/misses the property 'entry'/)
  })

  it("reports error when entry not found", done =>{
    compile({entry: 'test'}).then(done.fail, err => {
      expect(err).not.toBeUndefined()
      done()
    }) 
  })

  it("packages empty entry", done =>{
    compile({entry: './empty.js'}).catch(done.fail).then(result =>{
      expect(result).toMatch(/__webpack_require__/m)
      done()
    })
  })

  it("bundles dependencies", done =>{
    compile({entry: './deps.js'}).catch(done.fail).then(result =>{
      expect(result).toMatch(/jQuery/m)
      done()
    })
  })

})

