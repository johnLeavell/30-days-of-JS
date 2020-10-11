Day 09: Higher Order Functions

    - functions which take other funcitons as a parameter or return a function as a value
    - the function passed as a parameter is called back

Callback

    - a function which can be passed as a parameter to other functions

    EXAMPLE:
    
    // a callback function, the function could be any name
    const callback = (n) => {
    return n ** 2
    }
    ​
    // function take other function as a callback
    function cube(callback, n) {
    return callback(n) * n
    }
    ​
    console.log(cube(callback, 3))

Returning Function

    - Higher order functions return a function as a value

    // Higher order function returning an other function
    const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
        return 2 * n + 3 * m + t
        }
        return doWhatEver
    }
    ​
    return doSomething
    }
    console.log(higherOrder(2)(3)(10))


    - Let us see were we use call back functions.For instance the forEach method uses call back.

    const numbers = [1, 2, 3, 4]
    ​
    const sumArray = arr => {
    let sum = 0
    const callBack = function(element) {
        sum += element
    }
    numbers.forEach(callback)
    return sum

    }
    console.log(sumArray(numbers))
    15
    
    - The above example can be simplified as follows:

    const numbers = [1, 2, 3, 4]
    ​
    const sumArray = arr => {
    let sum = 0
    numbers.forEach(function(element) {
        sum += element
    })
    return sum

    }
    console.log(sumArray(numbers))
    15


    - Setting time
    
    In JavaScript we can execute some activity on certain interval of time or we can schedule(wait) for sometime to execute some activities.

    - setInterval
    - setTimeout
    
    
    - setInterval
    In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

    // syntax
    function callBack() {
    // code goes here
    }
    
    setInterval(callback, duration)
    function sayHello() {
    console.log('Hello')
    }
    
    setInterval(sayHello, 2000) // it prints hello in every 2 seconds
    
    - setTimeout
    In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback wait for that amount of time.

    // syntax
    function callback() {
    // code goes here
    }
    setTimeout(callback, duration) // duration in milliseconds
    function sayHello() {
    console.log('Hello')
    }
    setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.



- Functional Programming 

    - builtin methods take a callback funciton:
        - forEach, map, filter, reduce, find, every, some, and sort



- forEach()
    - iterate an array of elements
    - only with arrays
    - takes a callback function with elements, index parameter and array itself
    - index and array optional

    EXAMPLE:   
    
    arr.forEach(function(element, index, arr) {
        console.log(index, element, arr)
    })

    // arrow function

    arr.foreach((element, index, arr) => {
        console.log(index, element, arr)
    })

    // arrow function and explicit return

    arr.forEach((element, index, arr) => console.log(index, element, arr))



    let sum = 0;
    const numbers = [1,2,3,4,5];
    numbers.forEach(num => console.log(num)))

    console.log(sum)
    1
    2
    3
    4
    5
    let sum = 0;
    const numbers = [1,2,3,4,5];
    numbers.forEach(num => sum += num))

    console.log(sum)
    15
    const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
    countries.forEach((element) => console.log(element.toUpperCase()))
    FINLAND
    DENMARK
    SWEDEN
    NORWAY
    ICELAND
    map
    map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

    const modifiedArray = arr.map(function (element, index, arr) {
    return element
    })
    /*Arrow function and explicit return
    const modifiedArray = arr.map((element,index) => element);
    */
    //Example
    const numbers = [1, 2, 3, 4, 5]
    const numbersSquare = numbers.map((num) => num * num)

    console.log(numbersSquare)
    [1, 4, 9, 16, 25]
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const namesToUpperCase = names.map((name) => name.toUpperCase())
    console.log(namesToUpperCase)
    ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']
    const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    ]
    const countriesToUpperCase = countries.map((country) => country.toUpperCase())
    console.log(countriesToUpperCase)

    /*
    // Arrow function
    const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
    })
    //Explicit return arrow function
    const countriesToUpperCase = countries.map(country => country.toUpperCase());
    */
    ['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']
    const countriesFirstThreeLetters = countries.map((country) =>
    country.toUpperCase().slice(0, 3)
    )
    ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]
    filter
    Filter: Filter out items which full fill filtering conditions and return a new array.

    //Filter countries containing land
    const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
    )
    console.log(countriesContainingLand)
    ['Finland', 'Ireland']
    const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
    console.log(countriesEndsByia)
    ['Albania', 'Bolivia','Ethiopia']
    const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
    )
    console.log(countriesHaveFiveLetters)
    ['Japan', 'Kenya']
    const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
    ]

    const scoresGreaterEight = scores.filter((score) => score.score > 80)
    console.log(scoresGreaterEight)
    [{name: 'Asabeneh', score: 95}, {name: 'Martha', score: 85},{name: 'John', score: 100}]
    reduce
    reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

    arr.reduce((acc, cur) => {
    // some operations goes here before returning a value
    return 
    }, initialValue)
    const numbers = [1, 2, 3, 4, 5]
    const sum = numbers.reduce((acc, cur) => acc + cur, 0)

    console.log(sum)
    15
    every
    every: Check if all the elements are similar in one aspect. It returns boolean

    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const areAllStr = names.every((name) => typeof name === 'string')

    console.log(arrAllStr)
    true
    const bools = [true, true, true, true]
    const areAllTrue = bools.every((b) => {
    return b === true
    })

    console.log(areAllTrue) //true
    true
    find
    find: Return the first element which satisfies the condition

    const ages = [24, 22, 25, 32, 35, 18]
    const age = ages.find((age) => age < 20)

    console.log(age)
    18
    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const result = names.find((name) => name.length > 7)
    console.log(result)
    Asabeneh
    const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
    ]

    const score = scores.find((user) => {
    return user.score > 80
    })
    console.log(score)
    { name: "Asabeneh", score: 95 }
    findIndex
    findIndex: Return the position of the first element which satisfies the condition

    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const ages = [24, 22, 25, 32, 35, 18]

    const result = names.findIndex((name) => name.length > 7)
    console.log(result) // 0

    const age = ages.findIndex((age) => age < 20)
    console.log(age) // 5
    some
    some: Check if some of the elements are similar in one aspect. It returns boolean

    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    const bools = [true, true, true, true]

    const areSomeTrue = bools.some((b) => {
    return b === true
    })

    console.log(areSomeTrue) //true
    const areAllStr = names.some((name) => typeof name === 'number')
    console.log(areAllStr) // false
    sort
    sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

    Sorting string values
    const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
    console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
    //Now the original products array  is also sorted
    Sorting Numeric values
    As you can see in the example below, 100 came first after sorted in ascending order. Sort converts items to string , since '100' and other numbers compared, 1 which the beginning of the string '100' became the smallest. To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

    const numbers = [9.81, 3.14, 100, 37]
    // Using sort method to sort number items provide a wrong result. see below
    console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
    numbers.sort(function (a, b) {
    return a - b
    })

    console.log(numbers) // [3.14, 9.81, 37, 100]

    numbers.sort(function (a, b) {
    return b - a
    })
    console.log(numbers) //[100, 37, 9.81, 3.14]
    Sorting Object Arrays
    When ever we sort objects in an array. We use the object key to compare. Lets see the example below.

    objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
    })

    // or

    objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
    })

    const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyo', age: 100 },
    { name: 'Elias', age: 22 },
    ]
    users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
    })
    console.log(users) // sorted ascending
    //[{…}, {…}, {…}, {…}]