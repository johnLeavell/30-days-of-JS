Day 14: Error Handling


    JavaScript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

    JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

    try {
        // code that may throw an error
        } catch (err) {
        // code to be executed if an error occurs
        } finally {
        // code to be executed regardless of an error occurs or not
        }
        try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

        catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

        finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.

        Example:

        try {
        let lastName = 'Yetayeh'
        let fullName = fistName + ' ' + lastName
        } catch (err) {
        console.log(err)
        }
        ReferenceError: fistName is not defined
            at <anonymous>:4:20
        try {
        let lastName = 'Yetayeh'
        let fullName = fistName + ' ' + lastName
        } catch (err) {
        console.error(err) // we can use console.log() or console.error()
        } finally {
        console.log('In any case I will be executed')
        }
        ReferenceError: fistName is not defined
            at <anonymous>:4:20
        In any case it  will be executed


- Error Types

    ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
    let firstName = 'Asabeneh'
    let fullName = firstName + ' ' + lastName

    console.log(fullName)
    Uncaught ReferenceError: lastName is not defined
        at <anonymous>:2:35
    SyntaxError: A syntax error has occurred
    let square = 2 x 2
    console.log(square)

    console.log('Hello, world")
    Uncaught SyntaxError: Unexpected identifier
    TypeError: A type error has occurred
    let num = 10
    console.log(num.toLowerCase())
    Uncaught TypeError: num.toLowerCase is not a function
        at <anonymous>:2:17
    These are some of the common error you may face when you write a code. Understanding errors can help you to know what mistakes you made and it will help you to debug your code fast.