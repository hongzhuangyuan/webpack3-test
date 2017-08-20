describe("jest", ()=>{
  
  it("async test having a failing function", done=>{
    try{
      expect(typeof done.fail).toBe("function")
    }finally{
      done()
    }
  })

});
