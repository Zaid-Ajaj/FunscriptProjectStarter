[<FunScript.JS>]
module Main

open FunScript
open FunScript.TypeScript

let endOfEvent = new obj()

let mutable n = 1

let say msg =  Globals.window.alert msg

let factorial n = Seq.fold (*) 1 [1..n]

let sigma f xs = Seq.map f xs |> Seq.fold (+) 0

let create = Globals.document.createElement
let get = Globals.document.getElementById

let content = get "content"

let (-<) (parent: Node) children = Seq.iter (parent.appendChild >> ignore) children

let showFactorial() =
    let div = create "div" 
    div.textContent <- sprintf "factorial(%d) = %d" n (factorial n)
    content -< [div]
    n <- n + 1
    endOfEvent

let main() = 
    content.addEventListener_click (fun _ -> showFactorial())
    say "Main method"
    say <| sprintf "sum of [1..10] = %A" (sigma (fun x -> x) [1..10])