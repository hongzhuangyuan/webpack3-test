/*global compile*/

describe("output", () => {

  it("uses hash names", done => {

    compile({
      entry: "./inline.js",
      output: {
        filename: "[hash].js"
      }
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      let main = files[0]
      expect(main).not.toEqual("main")
      expect(files[main]).toEqual(expect.stringContaining("./main.css"))
      expect(files[main]).toEqual(expect.stringContaining("color: red;"))
      done()
    })

  })

})
