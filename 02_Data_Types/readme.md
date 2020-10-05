DAY 02: Data Types

Data tyupes can be divided into two:
  - Primitive 
    - immutable(non-modifiable) data types.  
    - Once a primitive data type is created we cannot modify it.
      ex: let word = 'JavaScript'
      If we try to modify the sting stored in the variable word, JavaScript should raise an error, but it does not, it does not save mutate the variable either.
    
    Primitive
  - Numbers: integers, floats
  - Strings: single quote, double quote, backtick quote
  - Booleans
  - Null
  - Undefined - a declared variable without a value



- Non-primiitve (object references) - are modifiable or mutable.  

Non-primitive
  - Objects
  - Functions
  - Arrays


*************************************************************************************************************

Numbers
  - Numbers are integers and decimal values which can do all the arithmetic operations.

  Math object - provides a lot of methods to wok with numbers.
  const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

*************************************************************************************************************

Strings 


Template Literals 
  - To create template stings, we use two back-ticks ``.  
  - We can inject data as expressions inside a template string.  
  - To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.

Example:1
  - `String literal text`
  - `String literal text ${expression}`

Example:2

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)


*************************************************************************************************************

Sting Methods
 - Everyting in JavaScirpt is an object.
 - A stirng is a primitiive data type that means we can not modify it once it is created
 - The sring object has many sting methods.
 - There are differetn sting methods that can help us to work with strings

  - length
    ex: let js = 'JavaScript'
      console.log(js.lenght) //10
  
  - Accessing characeters in a string by using its index
  
  ex:
  let string = 'JavaScript'
  let firstLetter = string[0]

  console.log(firstLetter)    // J

  - toUpperCase()
  - toLowerCase()

  - substr() - takes two arguments, the starting index and the number of characters to slice.
    
    ex:
    let string = 'JavaScript'
    console.log(string.substr(4,6))    // Script
  
  - split() - splits a string at a specificed place.
    
    ex:
    let string = '30 Days Of JavaScript'
    console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
    console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
