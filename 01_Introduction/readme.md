Decided to try a 30 JavaScript challenge.  I don't feel I need to relearn everything but I defiently need to revisit some fundamentals with fresh eyes so I can fully understand this beautiful language.

I'm not totally sure where/how I found this 30 day challenge but I the individual (Asabeneh https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/readMe.md#introduction) has a github page that I will be following.

I plan on following as needed but I also plan on making sure to read each day and digest the parts that need help on.  

Day 0 - I decided to bypass all of the inital setup and start with adding JS to a Web Page

    JS can be added to a web page in 3 different ways:
    - Inline script
    - Internal script
    - External script
    - Multiple External scripts

Inline Script
<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Inline Script</title>
  </head>
  <body>
    <button onclick="alert('Welcome to 30DaysOfJavaScript!')">Click Me</button>
  </body>
</html>



Internal Script 
    - The internal script can be written in the head or the body, but it is perferred to be put in the body of the HTML document.

<!DOCTYPE html>
<html>
  <head>
    <title>30DaysOfScript:Internal Script</title>
    <script>
      console.log('Welcome to 30DaysOfJavaScript')
    </script>
  </head>
  <body></body>
</html>

External Script
    - The external script link can be on the header or the body, but it is perferred to put it in the body.  

    -- Create a file named introduction.js and add the following line of code
    
        - console.log('Welcome to 30DaysOfJavaScript')

    External scripts in the head:

    -   <!DOCTYPE html>
        <html>
        <head>
            <title>30DaysOfJavaScript:External script</title>
            <script src="introduction.js"></script>
        </head>
        <body></body>
        </html>

    External Scripts in the body:
    - 
        <!DOCTYPE html>
        <html>
        <head>
            <title>30DaysOfJavaScript:External script</title>
        </head>
        <body>
            //it could be in the header or in the body // Here is the recommended place
            to put the external script
            <script src="introduction.js"></script>
        </body>
        </html>







*************************************************************************************************************

Intro to Data Types

In JS and also other programming languages, ther are different kinds of data types.  The following are JS primitive data types:
    - String ('this is a string')
    - Number (integer)
    - Boolean (true/false)
    - undefined
    - null
    - symbol

    Numbers 
    - integers: negative, zero, and positive
    - float-point numbers: decimals

    Strings
    - A colleciton of one or more characers between two single quotes, double quotes, aor backticks

    Booleans
    - A boolean value is either True or Fals, any comparisons return a booelan value, which is either true or false

    Undefined
    - If a value is not assigned to a vairable the value is undefined.  In addition to that, if a function is not returing anything, it returns undefined

    Null
    - Null in JS means an empty value




*************************************************************************************************************

Checking Data Types

- To check the data type of a certain variable, we use the typeof operator

    console.log(typeof 'Asabeneh') // string
    console.log(typeof 5) // number
    console.log(typeof true) // boolean
    console.log(typeof null) // object type
    console.log(typeof undefined) // undefined



*************************************************************************************************************



