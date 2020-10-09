Day O7: Functions

    - A ruseable block of code or programming statements designed to perform a certain task.
    
    - Declared by a function key word followed by a name, followed by a parentheses()
        - A parentheses() can take a parameter

    - If a function takes a parameter it will be called with an argument

    - A function can also take a default paramater

    A Function can be declared or created in a couple of ways:
        
        - Declaration
        - Expression
        - Anonymous
        - Arrow


Function Declaration

    - function functionName(){
        //code goes here
    };

    functionName() // calling function by its name and with parentheses

Function without a parameter and return

    - Function can be declared without a parameter

    Example:
    funcrtion square(){
        let num = 2;
        let sq = num * num
        console.log(sq)
    }

    square() // 4


Function returning value

    const printFullName = () => {
        let firstName = 'John';
        let lastName = 'Jones';
        let space = ' '
        let fullName = firstName + space + lastName
        return fullName
    }

    console.log(printFullName())


Function with a parameter

    const functionName = parm1 => {
        //code goes here
    }

    const areaOfCircle = r => {
        let area = Math.PI * r * r
        return area
    }


Function with TWO parameters

    - const functionName = (parm1, parm2) => {
        // code goes here
    }

    - const sumOfTwoNumbers = (numOne, numTwo) => {
        let sum = numOne + numTwo;
        return sum;
    }

    - function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
    }
    
    console.log(printFullName('Asabeneh', 'Yetayeh'))


Function with MANY parameters

    - function functionName(parm1, parm2, parm3,...){
    //code goes here
    }

    functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


    // this function takes array as a parameter and sum up the numbers in the array
    function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
    }


    const numbers = [1, 2, 3, 4, 5];
        //calling a function
    console.log(sumArrayValues(numbers));


        const areaOfCircle = (radius) => {
        let area = Math.PI * radius * radius;
        return area;
        }
    console.log(areaOfCircle(10))


Function with unlimited number of parameters

    - Writing a function which can take unlimited number of arguments


    Unlimited number of parameters in regular function
        
        - EXAMPLE
            // function declaration
​
            function sumAllNums() {
            let sum = 0
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i]
            }
            return sum
            }

            console.log(sumAllNums(1, 2, 3, 4)) // 10
            console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
            console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

    Unlimited number of parameters in Arrow Function

        - EXAMPLE 
         ​
            const sumAllNums = (...args) => {
            let sum = 0
            for (const element of args) {
                sum += element
            }
            return sum
            }

            console.log(sumAllNums(1, 2, 3, 4)) // 10
            console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
            console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


Anonymous Function

    - Anonymous funcitn or without a name

        EXAMPLE
            const anonymousFun = function() {
            console.log(
                'I am an anonymous function and my value is stored in anonymousFun'
                )
            }

Expression Function
    - After we creatre a function without a neame and e assign it to a variable
    - To return a vlue from the function we should call the variable

        - EXAMPLE

            const square = function(n) {
                return n * n
            }
            console.log(square(2)) // 4


Self invoking functions

    - anonymous functions which do not need to be callew dto return a value

        - EXAMPLE

            (function(n) {
            console.log(n * n)
            })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

            let squaredNum = (function(n) {
            return n * n
            })(10)

            console.log(squaredNum)

Arrow function

    - an alternative to write a function

    // This is how we write normal or declaration function
    // Let us change this declaration function to an arrow function
        
        function square(n) {
        return n * n
        }

        console.log(square(2)) // 4

        const square = n => {
        return n * n
        }

        console.log(square(2))  // -> 4

        // if we have only one line in the code block, it can be written as follows, explicit return
        const square = n => n * n  // -> 4
        const changeToUpperCase = arr => {
        const newArr = []
        for (const element of arr) {
            newArr.push(element.toUpperCase())
        }
        return newArr
        }

        const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
        console.log(changeToUpperCase(countries))

        // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
        const printFullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`
        }

        console.log(printFullName('Asabeneh', 'Yetayeh'))
        The above function has only the return statement, therefore, we can explicitly return it as follows.

        const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

        console.log(printFullName('Asabeneh', 'Yetayeh'))

Function with default parameters

    - Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

    // syntax
    // Declaring a function
    function functionName(param = value) {
    //codes
    }

    // Calling function
    functionName()
    functionName(arg)
    Example:

    function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
    }

    console.log(greetings())
    console.log(greetings('Asabeneh'))
    function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
    }

    console.log(generateFullName())
    console.log(generateFullName('David', 'Smith'))
    function calculateAge(birthYear, currentYear = 2019) {
    let age = currentYear - birthYear
    return age
    }

    console.log('Age: ', calculateAge(1819))
    function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
    }

    console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
    console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
    Let us see how we write the above functions with arrow functions

    // syntax
    // Declaring a function
    const functionName = (param = value) => {
    //codes
    }

    // Calling function
    functionName()
    functionName(arg)
    Example:

    const greetings = (name = 'Peter') => {
    let message = name + ', welcome to 30 Days Of JavaScript!'
    return message
    }

    console.log(greetings())
    console.log(greetings('Asabeneh'))
    const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
    }

    console.log(generateFullName())
    console.log(generateFullName('David', 'Smith'))
    const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
    console.log('Age: ', calculateAge(1819))
    const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
    
    console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
    console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon