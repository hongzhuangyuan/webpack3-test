import webpack from "webpack"
import MemoryFS from "memory-fs"
import * as $ from "jquery" 
import path from "path"

class Compiler{
  constructor(){
    this.compile = (options) => {
      var fs = new MemoryFS()
      var compiler = webpack($.extend({context: this._context},  options, {output: {filename: 'bundle.js'}}))
      compiler.outputFileSystem = fs

      return new Promise((resolve, reject)=>{
        compiler.run((err, stats) => {
          try{
            if(err || stats.hasErrors()) throw err || stats.toJson().errors

            resolve(fs.readFileSync(path.join(__dirname, "..", "./bundle.js"),"UTF-8")) 
          }catch(ex){
            reject(ex)
          }
        })
      })
    }
  }

  context(_context){
    this._context = _context
    return this
  }

}

module.exports = new Compiler() 
