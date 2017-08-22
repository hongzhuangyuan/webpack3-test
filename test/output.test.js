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

  it("packaging multiple modules into single module", done => {

    compile({ entry: ["./inline.js", "./deps.js"] }).catch(done.fail).then(files => {
      expect(files).toEqual(["main"])
      expect(files.main).toMatch(/jQuery/m)
      expect(files.main).toMatch(/color:\s*red/m)
      done()
    })

  })

})
