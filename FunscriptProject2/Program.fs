module Program

open System.IO
open FunScript

let jqWrap = sprintf "$(function() { %s(); });" // if using jQuery
let wrap =  sprintf "(function() { %s(); })();"   

// project path                       
let path = @"C:\Users\Zaid\Documents\Visual Studio 2015\Projects\FunscriptProject2\FunscriptProject2\"                                 // compilation path

// a list of the javascript files that will be generated in the form [(expr1,name1); ... ; (expr_n, name_n)]
[(<@ Main.main @>, "main")]
|> Seq.map (fun (expr,file) -> Compiler.compile expr, file)
|> Seq.map (fun (source,file) -> wrap source, file) 
|> Seq.iter (fun (source,file) -> File.WriteAllText(path + file + ".js",source))