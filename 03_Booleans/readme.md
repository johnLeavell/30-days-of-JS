03 Booleans

    - Boolean represents one of two values: true or false.
    - Boolean value is either true or false.
    - Any comparisions return a boolean value which is either true or false

    Examples:
        let isLightOn = true
        let isRaining = false
        let isHungry = false
        let isMarried = true
        let truValue = 4 > 3    // true
        let falseValue = 4 < 3  // false

Truthy values:
    - All numbers(positive and negative) are truthy except zero
    - All strings are truthy
    - The boolean true

Falsy values:
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - the boolean false
    - '', "", ``, empty string

Assignment Operators

Operator        Example             Same as         Description

    =             x = y              x = y           y is stored in x
    
    +=            x += y             x = x + y       x + y result is stored in x

    -=            x -= y             x = x - y       x - y result is stored in x

    *=

    /=

    %=          

    **=          x** = y            x = x**y        x **y result is stored in x


Comparision operators

        operator            name                            example
        ==              equal in value only                 x == y
        ===             equal in value and data type        x === y
        !=                  not equal                       x != y
        >                   greater than
        <                   less than
        >=                  greater than or equal to
        <=                  less than or equal to 

Logical Operators

    - && and
    - || or
    - ! negation (true to false and false to true)

    // && ampersand operator example

        const check = 4 > 3 && 10 > 5         // true && true -> true
        const check = 4 > 3 && 10 < 5         // true && false -> false
        const check = 4 < 3 && 10 < 5         // false && false -> false

        // || pipe or operator, example

        const check = 4 > 3 || 10 > 5         // true  || true -> true
        const check = 4 > 3 || 10 < 5         // true  || false -> true
        const check = 4 < 3 || 10 < 5         // false || false -> false

        //! Negation examples

        let check = 4 > 3                     // true
        let check = !(4 > 3)                  //  false
        let isLightOn = true
        let isLightOff = !isLightOn           // false
        let isMarried = !false                // true

Increment Operator
    - increment operator to increse a value stored in a variable.
    - the increment could be pre or post increment.

    learn to use the post-increment operator
    example:

    let count = 0
    console.log(count++) // 0
    console.log(count) // 1

Decrement Operator
    - decrease a value stored in a variable
    - decrement could be pre or post decrement

    same as increment: use post



Ternary operators
    -  Allows to write a condition
    Example:

    let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
You need a rain coat.
No need for a rain coat.


Window methods
    
    - alert()
        - displays an alert box with a specified message and an ok button

    - prompt('required text', optional text)
        - displays a prompt box with an input on your browser to take input values and the input data can be stored in a variable.
        - takes two arguments, the second is optonal

    - confirm()
        - displasy a dialog box with a specified messge, along with an ok and cancel button
        - a confirm box is often used to ask permission from a user to execute somthing
        - takes a string an argument
        - clicking the ok yields true value
        - clinking cancel button yeilds false value
        EX:
            const agree = confirm('Are you sure you like to delete? ')
            console.log(agree) // result will be true or false based on what you click on the dialog box

Date Object
    - current time adn date is created using date object
    
    Methods                 Description                             Examples
    
    getFullYear()           year as four digits (yyyy)              2020
    getMonth()              month as a number (0 - 11)              0
    getDate()               day as a number (1-31)                  3
    getHours()              hour (0-23)                             23
    getMinutes()            minute (0-59)                           44
    getSeconts()            second (0-59)                           42
    getMilliseconds()       milliseconds (0-999)                    444
    getTime()               time (milliseconds since january 1, 1970) 
    getDay()                weekday as a number (0-6)


creating a time object
    const now = new Date()
    console.log(now)

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56