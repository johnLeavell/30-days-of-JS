Day 08: Objects

    - starts with Scope

Scope
    
    - Variables can be declared globally or locally or window scope.
    - Amything declared without let, var or const is scoped at window level

Window Scope

    - Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

    //scope.js
    a = 'JavaScript' // is a window scope this found anywhere
    b = 10 // this is a window scope variable
    function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
    }
    console.log(a, b) // accessible

Global Scope
    
    - A globally scope declared variable can be accessed everywhere in the same file.  

    //scope.js
    let a = 'JavaScript' // is a global scope it will be found anywhere in this file
    let b = 10 // is a global scope it will be found anywhere in this file
    function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    if (true) {
        let a = 'Python'
        let b = 100
        console.log(a, b) // Python 100
    }
    console.log(a, b)
    }
    letsLearnScope()
    console.log(a, b) // JavaScript 10, accessible

Local Scope

    - variable can be accessed only in certain block of code

    //scope.js
    let a = 'JavaScript' // is a global scope it will be found anywhere in this file
    let b = 10 // is a global scope it will be found anywhere in this file
    function letsLearnScope() {
    console.log(a, b) // JavaScript 10, accessible
    let c = 30
    if (true) {
        // we can access from the function and outside the function but 
        // variables declared inside the if will not be accessed outside the if block
        let a = 'Python'
        let b = 20
        let d = 40
        console.log(a, b, c) // Python 20 30
    }
    // we can not access c because c's scope is only the if block
    console.log(a, b) // JavaScript 10
    }
    letsLearnScope()
    console.log(a, b) // JavaScript 10, accessible
    


*************************************************************************************

Object

    - everything can be an object
    - key value pair

Creating an empty object

    - const person = {}


Creating an object with values

    - const rectangle = {
        length: 20,
        width: 20
    }


Getting values from an object

    - using . dot notation followed by the key name
    - using square bracket and a quote

    EXAMPLE:

    const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545'
    }

    // accessing values using .
    console.log(person.firstName)
    console.log(person.lastName)
    console.log(person.age)
    console.log(person.location)

    // value can be accessed using square bracket and key name
    console.log(person['firstName'])
    console.log(person['lastName'])
    console.log(person['age'])
    console.log(person['age'])
    console.log(person['location'])

    // for instance to access the phone number we only use the square bracket method
    console.log(person['phone number'])

Creating object methods

    const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
    }

    console.log(person.getFullName())
    // Asabeneh Yetayeh


Setting new key for an object

    - an object is a mutable data structure
    - object modification possible after the object is created


    EXAMPLE:

        const person = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        age: 250,
        country: 'Finland',
        city: 'Helsinki',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Node',
            'MongoDB',
            'Python',
            'D3.js'
        ],
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`
        }
        }
        person.nationality = 'Ethiopian'
        person.country = 'Finland'
        person.title = 'teacher'
        person.skills.push('Meteor')
        person.skills.push('SasS')
        person.isMarried = true

        person.getPersonInfo = function() {
        let skillsWithoutLastSkill = this.skills
            .splice(0, this.skills.length - 1)
            .join(', ')
        let lastSkill = this.skills.splice(this.skills.length - 1)[0]

        let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
        let fullName = this.getFullName()
        let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
        return statement
        }
        console.log(person)
        console.log(person.getPersonInfo())
        Asabeneh Yetayeh is a teacher.
        He lives in Finland.
        He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.


Object Methods

    - There are different methods to manipulate an object. Let us see some of the available methods.

    Object.assign: To copy an object without modifying the original object

    const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki'
    },
    getPersonInfo: function() {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
    }

    //Object methods: Object.assign, Object.keys, Object.values, Object.entries
    //hasOwnProperty

    const copyPerson = Object.assign({}, person)
    console.log(copyPerson)
    Getting object keys using Object.keys()
    Object.keys: To get the keys or properties of an object as an array

    const keys = Object.keys(copyPerson)
    console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']
    const address = Object.keys(copyPerson.address)
    console.log(address) //['street', 'pobox', 'city']
    Getting object values using Object.values()
    Object.values:To get values of an object as an array

    const values = Object.values(copyPerson)
    console.log(values)
    Getting object keys and values using Object.entries()
    Object.entries:To get the keys and values in an array

    const entries = Object.entries(copyPerson)
    console.log(entries)
    Checking properties using hasOwnProperty()
    hasOwnProperty: To check if a specific key or property exist in an object

    console.log(copyPerson.hasOwnProperty('name'))
    console.log(copyPerson.hasOwnProperty('score'))