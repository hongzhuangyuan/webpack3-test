/*global compile*/
import HtmlWebpackPlugin from "html-webpack-plugin"
describe("plugins", () => {

  it("webpack html plugin", done => {

    compile({
      entry: {
        inline: "./inline.js",
        deps: "./deps.js"
      },
      plugins: [new HtmlWebpackPlugin({
        title: "Html Plugin"
      })]
    }).catch(done.fail).then(files => {
      let index = files["index.html"]
      expect(files).toHaveLength(3)
      expect(index).toMatch(/Html Plugin/)
      expect(index).toMatch(/src="inline"/)
      expect(index).toMatch(/src="deps"/)
      done()
    })

  })

})
