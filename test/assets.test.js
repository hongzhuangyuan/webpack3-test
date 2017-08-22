describe("assert", ()=> {
  
  it("inline mode", done =>{

    compile({entry: './inline.js'}).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      expect(files.main).toEqual(expect.stringContaining("./main.css"))
      expect(files.main).toEqual(expect.stringContaining("color: red;"))
      done()
    })

  })

  it("css will be bundled", done => { 
    let module  = {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }

    compile({entry: './css.js', module: module }).catch(done.fail).then(files => {
      expect(files).toHaveLength(1)
      expect(files.main).toEqual(expect.stringContaining("./main.css"))
      expect(files.main).toEqual(expect.stringContaining("color: red;"))
      done()
    })
  })
})
