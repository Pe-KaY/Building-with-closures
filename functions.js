// 1.Object Methods and this:

const person = {
  name: "Pee kay",
  age: 77,
  greet() {
    console.log(`Hello,
my name is ${this.name} and I'm ${this.age} years old.`)
  },
}

// the this will be tested on the secondPerson because person contains the greet method. Therefore no need to bind this to Person
const secondPerson = {
  name: "Abena",
  age: 40,
}

person.greet.call(secondPerson)
person.greet.apply(secondPerson)
person.greet.bind(secondPerson)()

// Private Data with Closures and this

const createCounter = () => {
  // count is a private variable
  let count = 0

  // the returned object gains closure over the count variable
  return {
    increment() {
      count++
      console.log(count)
    },
    getCount() {
      console.log(count)
    },
  }
}

const counter = createCounter()
// using this this.count will not work because count is a private variable not a method
// and also createCounter is a function and not an object literal

// increases count
counter.increment()
counter.increment()
// shows the current value of count
counter.getCount()

//
