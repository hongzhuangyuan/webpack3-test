/*global compile*/
describe("development", () => {
  it("generate sourceMapURL for the module with .js extension", done => {
    compile({entry: "./deps.js", devtool: "inline-source-map", output: {filename: "[name].js"}})
      .catch(done.fail)
      .then(files => {
        expect(files["main.js"]).toMatch(/sourceMappingURL/gm)
        done()
      })
  })

  it("doesn't generate sourceMapURL for the module without .js | .css extension", done => {
    compile({entry: "./deps.js", devtool: "inline-source-map"}).catch(done.fail).then(files => {
      expect(files.main).not.toMatch(/sourceMappingURL/gm)
      done()
    })
  })
})
