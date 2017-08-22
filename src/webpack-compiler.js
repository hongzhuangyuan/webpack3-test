import webpack from "webpack"
import MemoryFS from "memory-fs"
import * as $ from "jquery" 
import path from "path"

class Compiler{
  constructor(){
    this.compile = (options) => {
      var fs = new MemoryFS()
      var output = {filename: '[name]', path: path.join(__dirname, 'dist')}
      var compiler = webpack($.extend({context: this._context},  options, {output: output}))
      compiler.outputFileSystem = fs

      return new Promise((resolve, reject)=>{
        compiler.run((err, stats) => {
          try{
            if(err || stats.hasErrors()) throw err || stats.toJson().errors
            resolve(list(fs, output.path)) 
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

function list(fs, dir){
  let files = fs.readdirSync(dir) || []
  files.forEach(file => {
    Object.defineProperty(files, file, {
      get(){
        return fs.readFileSync(path.join(dir, file), "UTF-8")
      }
    })
  })
  return files
}

module.exports = new Compiler() 
