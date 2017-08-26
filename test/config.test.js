/*global compile*/
describe("configuration", () => {
  let common = {entry: "./deps.js"}

  it("extends config by Webpack Merge", done => {
    const merge = require("webpack-merge")
    let development = merge(common, {devtool: "inline-source-map"})

    compile(development).catch(done.fail).then(files => {
      expect(files.main).not.toMatch(/sourceMappingURL/gm)
      done()
    })
  })
})
