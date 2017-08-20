import webpack from "webpack"
import MemoryFS from "memory-fs"
import $ from "jquery"
import path from "path"

var settings ={context: path.join(__dirname, "data")}

function compile(options){
  var fs = new MemoryFS()
  var compiler = webpack($.extend({}, settings, options, {output: {filename: 'bundle.js'}}))
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

export default compile
