console.log('Hello world!')

// this wll not work
// this = 'ala ma kota'

// this points always to context === object
console.log(this)

class Greeter {
  constructor(name){
    this.name = name
  }

  sayHello(){
    console.log('Hello ' + this.name + '!' )
  }
}

const greeter1 = new Greeter('Ola')
const greeter2 = new Greeter('Ala')
const greeter3 = new Greeter('Ela')

console.log(greeter1.sayHello())
console.log(greeter2.sayHello())
console.log(greeter3.sayHello())