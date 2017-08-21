import path from "path"
import compiler from "./src/webpack-compiler"

global.compile = compiler.context(path.join(__dirname, "test/data/")).compile
