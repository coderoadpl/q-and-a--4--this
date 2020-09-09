console.log('Hello world!')

// this wll not work
// this = 'ala ma kota'

// this points always to context === object
console.log(this)

// class Greeter {
//   constructor(name){
//     this.name = name
//   }

//   sayHello(){
//     console.log('Hello ' + this.name + '!' )
//   }
// }

function Greeter(name) {
  this.name = name
}
Greeter.prototype.sayHello = function () {
  console.log('Hello ' + this.name + '!')
}

const greeter1 = new Greeter('Ola')
const greeter2 = new Greeter('Ala')
const greeter3 = new Greeter('Ela')

greeter1.sayHello()
greeter2.sayHello()
greeter3.sayHello()

var sayHello = greeter1.sayHello
window.sayHello()
sayHello()