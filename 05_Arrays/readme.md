Arrays 

    - can store multiple alues
    - each value in an array has an index
    - each index has a reference in memory address
    - each value can be accessed by using their indexes
    - index starts at 0
    - index of the last element is less by one from the length of the array 


How to create an EMPTY array

    - const arr = Array()
    - let arr = new Array()
    - const arr = [] ** MOST COMMON WAY **


How to create an array with VALUES

    - const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
    - const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
    - const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
    - const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
    - const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
    - const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

    // Print the array and its length

    console.log('Numbers:', numbers)
    console.log('Number of numbers:', numbers.length)

    console.log('Fruits:', fruits)
    console.log('Number of fruits:', fruits.length)

Array can have items of different data types

    const arr = [
        'Asabeneh',
        250,
        true,
        { country: 'Finland', city: 'Helsinki' },
        { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
    ] // arr containing different data types

    console.log(arr)


Creating an array using split()

    let js = 'JavaScript'
    const charsInJavaScript = js.split('')

    console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

    let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    const companies = companiesString.split(',')

    console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
    let txt =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    const words = txt.split(' ')

    console.log(words)
    // the text has special characters think how you can just get only the words
    // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]



Modifying array element
    
    - An array is mutable(modifable)

    Example:
    const numbers = [1, 2, 3, 4, 5]
    numbers[0] = 10      // changing 1 at index 0 to 10
    numbers[1] = 20      // changing  2 at index 1 to 20

    console.log(numbers) // [10, 20, 3, 4, 5]


Methods to manipulate array

    - There are many different methods to manipulate an array.  These are some of the avaiable methods to deal with arrays:
        - Array
        - length
        - concat
        - indexOf
        - slice
        - splice
        - join
        - toString
        - includes
        - lastIndexOf
        - isArray
        - fill
        - push
        - pop
        - shift
        - unshift

Array constructor

    - Array: to crate an array.

    const arr = Array() // creates an empty array

    const fourEmptyValues = Array(8) // creates an array with 8 empty values


Crating static values with fill

    - Fill all the array elements with a static value

    Example:
    const arr = Array() // creates an an empty array
    console.log(arr)

    const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
    console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

Concatenating array using concat

    - To concatenate two arrays

    Example:

    const firstList = [1, 2, 3]
    const secondList = [4, 5, 6]
    const thirdList = firstList.concat(secondList)

    console.log(thirdList) // [1, 2, 3, 4, 5, 6]

Getting array length()
    
    - To konw the size of an array

    Example:

    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.length()) // 5



Getting index of an element in an Array

    - indexOf: to theck if an item exist in an array. 
    - if it exists it returns the index else it returns -1

    Example:
    
    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.indexOf(5)) // -> 4
    console.log(numbers.indexOf(0)) // -> -1
    console.log(numbers.indexOf(1)) // -> 0
    console.log(numbers.indexOf(6)) // -> -1

    Check an element if it exist in an array

    Check items in a list
    
    Example:

    // let us check if a banana exist in the array

    const fruits = ['banana', 'orange', 'mango', 'lemon']
    let index = fruits.indexOf('banana')  // 0

    if(index != -1){
    console.log('This fruit does exist in the array')  
    } else {
        console.log('This fruit does not exist in the array')
    }
    // This fruit does exist in the array

    // we can use also ternary here
    index != -1 ? console.log('This fruit does exist in the array'): console.log('This fruit does not exist in the array')

    // let us check if a avocado exist in the array
    let indexOfAvocado = fruits.indexOf('avocado')  // -1, if the element not found index is -1
    if(indexOfAvocado!= -1){
    console.log('This fruit does exist in the array')  
    } else {
        console.log('This fruit does not exist in the array')
    }
    // This fruit does not exist in the array



Getting last index of an element in array

    - lastIndexOf: gives the position of the last item in the array

    Example:
    const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

    console.log(numbers.lastIndexOf(2)) // 7
    console.log(numbers.lastIndexOf(0)) // -1
    console.log(numbers.lastIndexOf(1)) //  6
    console.log(numbers.lastIndexOf(4)) //  3
    console.log(numbers.lastIndexOf(6)) // -1

    - includes: check if an item exist in an array.  If it exist, it returns the true else it returns false

    Example:
    const numbers = [1, 2, 3, 4, 5]

    console.log(numbers.includes(5)) // true
    console.log(numbers.includes(0)) // false
    console.log(numbers.includes(1)) // true
    console.log(numbers.includes(6)) // false

    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ] // List of web technologies

    console.log(webTechs.includes('Node'))  // true
    console.log(webTechs.includes('C'))     // false

Checking Array

    - .isArray: to check if the data type is an array

    Example:
    
    const numbers = [1, 2, 3, 4, 5]
    console.log(Array.isArray(numbers)) // true

    const number = 100
    console.log(Array.isArray(number)) // false


Converting an array into a string

    - toString() converts array to a string

    Example:

    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.toString()) // 1,2,3,4,5

    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
    console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

Joining Array Elements

    - join(): is used to join the elements of the array, the argument passed in the join method will be joined in the array and return as a string.
    - by default, it joins with a comma, but we can pass different string parameter which can be joined between the items

    Example:

    const numbers = [1, 2, 3, 4, 5]
    console.log(numbers.join()) // 1,2,3,4,5

    const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

    console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
    console.log(names.join('')) //AsabenehMathiasEliasBrook
    console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
    console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
    console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ] // List of web technologies

    console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
    console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

Slice array elements

    - Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

    Example:

    const numbers = [1,2,3,4,5]

    console.log(numbers.slice()) // -> it copies all  item
    console.log(numbers.slice(0)) // -> it copies all  item
    console.log(numbers.slice(0, numbers.length)) // it copies all  item
    console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position


Splice method in array

    - Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

    Example:

  const numbers = [1, 2, 3, 4, 5]

  console.log(numbers.splice())     // -> remove all items
  const numbers = [1, 2, 3, 4, 5]
  console.log(numbers.splice(0,1))    // remove the first item
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items


Adding item to an array using push
    
    - Push: adding item in the end. To add item to the end of an existing array we use the push method.

    Example:
    // syntax
    const arr  = ['item1', 'item2','item3']
    arr.push('new item')

    console.log(arr)
    // ['item1', 'item2','item3','new item']
    const numbers = [1, 2, 3, 4, 5]
    numbers.push(6)

    console.log(numbers) // -> [1,2,3,4,5,6]

    numbers.pop() // -> remove one item from the end
    console.log(numbers) // -> [1,2,3,4,5]
    let fruits = ['banana', 'orange', 'mango', 'lemon']
    fruits.push('apple')

    console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

    fruits.push('lime')
    console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']


Removing the end element using pop
    
    - pop: Removing item in the end.

    const numbers = [1, 2, 3, 4, 5]
    numbers.pop() // -> remove one item from the end

    console.log(numbers) // -> [1,2,3,4]


Removing an element from the beginning
    
    - shift: Removing one array element in the beginning of the array.

    const numbers = [1, 2, 3, 4, 5]
    numbers.shift() // -> remove one item from the beginning

    console.log(numbers) // -> [2,3,4,5]

Add an element from the beginning
    
    - unshift: Adding array element in the beginning of the array.

    const numbers = [1, 2, 3, 4, 5]
    numbers.unshift(0) // -> add one item from the beginning

    console.log(numbers) // -> [0,1,2,3,4,5]

Reversing array order

    - reverse: reverse the order of an array.

    const numbers = [1, 2, 3, 4, 5]
    numbers.reverse() // -> reverse array order

    console.log(numbers) // [5, 4, 3, 2, 1]

    numbers.reverse()
    console.log(numbers) // [1, 2, 3, 4, 5]


Sorting elements in array

    - sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.

    const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
    ]

Array of arrays

    - Array can store different data types including an array itself. Let us create an array of arrays

    const firstNums = [1, 2, 3]
    const secondNums = [1, 4, 9]

    const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
    console.log(arrayOfArray[0]) // [1, 2, 3]

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = [frontEnd, backEnd]
    console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
    console.log(fullStack.length)  // 2
    console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
    console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]

    webTechs.sort()
    console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

    webTechs.reverse() // after sorting we can reverse it
    console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]