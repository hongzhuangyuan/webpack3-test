/*global compile*/

describe("assert", () => {

  it("inline mode", done => {

    compile({
      entry: "./inline.js"
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      expect(files.main).toEqual(expect.stringContaining("./main.css"))
      expect(files.main).toEqual(expect.stringContaining("color: red;"))
      done()
    })

  })

  it("css will be bundled", done => {
    let module = {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }

    compile({
      entry: "./css.js",
      module: module
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      expect(files.main).toEqual(expect.stringContaining("./main.css"))
      expect(files.main).toEqual(expect.stringContaining("color: red;"))
      done()
    })
  })

  it("encode image url & output the image to the dist directory", done => {

    compile({
      entry: "./img.js"
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(2)
      expect(files.main).toEqual(expect.stringContaining(files.find(it => it.endsWith(".png"))))
      done()
    })

  })

  it("css will use the encoded image url", done => {
    let module = {
      rules: [
        {
          test: /\.png$/i,
          use: ["file-loader"]
        }
      ]
    }

    compile({
      entry: "./background.js",
      module: module
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(2)
      expect(files.main).toEqual(expect.stringContaining(files.find(it => it.endsWith(".png"))))
      done()
    })

  })

  it("bundle json data", done => {

    compile({
      entry: "./json.js"
    }).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      expect(files.main).toEqual(expect.stringContaining("Kent"))
      expect(files.main).toEqual(expect.stringContaining("Martin"))
      done()
    })

  })

})
