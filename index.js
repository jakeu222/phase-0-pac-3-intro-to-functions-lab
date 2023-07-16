/*
function doNothing() {
    console.log("Hello, world!");
}
doNothing()
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!")
}
sayHelloToGuadalupe()
function sayHelloToLiz() {
    console.log("Hello, Liz!")
}
sayHelloToLiz()
function sayHelloToSamip() {
    console.log("Hello, Samip!")
}
sayHelloToSamip()
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function doSomething(thing) {
    console.log(thing)
}
doSomething("anything!")

function sayHelloTo(firstName) {
    console.log(`"Hello, ${firstName}!`)
}
sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1)

console.log(firstName)


function say(greeting, firstName) {
    console.log("firstName: ", firstName)
    console.log("greeting: ", greeting)
    console.log(`${greeting}, ${firstName}!`)
}
say("Julio", "hello")


function add(x, y) {
   x + y
}
console.log(add(1, 2)) 


function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`
}
console.log(say("hello, liz"))


function add(x, y) {
    return x + y
}
console.log(add(1, 2)) 

function say(greeting, firstName) {
    console.log("I was called!")
    return `${greeting}, ${firstName}!`

}
console.log(say("Howdy", "partner"))
*/
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    console.log(string)
    console.log(string.toLowerCase())
    console.log(string === string.toLowerCase())
    if (string === string.toLowerCase()) return "I can't hear you!"
    console.log(string)
    console.log(string.toUpperCase())
    console.log(string === string.toUpperCase())
    if (string === string.toUpperCase()) return "YES INDEED!"
    if (string === "Let's have dinner together!") return "I would love to!"

}


