/*global compile*/

describe("compiler", () => {
  it("entry is required", () => {
    let noOptions = {}

    expect(() => compile(noOptions)).toThrow(/misses the property 'entry'/)
  })

  it("reports error when entry not found", done => {
    compile({entry: "test"}).then(done.fail, err => {
      expect(err).not.toBeUndefined()
      done()
    })
  })

  it("packages empty entry", done => {
    compile({entry: "./empty.js"}).catch(done.fail).then(files => {
      expect(files).toEqual(["main"])
      expect(files.main).toMatch(/__webpack_require__/m)
      done()
    })
  })

  it("bundles dependencies", done => {
    compile({entry: "./deps.js"}).catch(done.fail).then(files => {
      expect(files.main).toMatch(/jQuery/m)
      done()
    })
  })
})
