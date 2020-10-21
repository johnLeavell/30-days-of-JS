Day 15: Classes

    - JS is an object oriented programming language
    - Every thing in JS is an object, with its properties and methods
    - We create class to create an object
    - A class is like an object constructor or "blueprint" for crating objects.
    - We instantiate a class to crate an object.  

- Defining a class

    // syntax

        class Person {
            //code goes here
        }
    // person class gets created but is empty


- Class Instantiation

    - Instantiation class means creating an object fro a class.


    // person class gets created but is empty

        class Person {
            // code goes here
        }

        const person = new Person()
        console.log(person)  // Person{}

- Class Constructor

    - a builtin function which allows us to create a blueprint for our object.

    EXAMPLE:

        class Person {
            constructor(firstName, lastName){
                console.log(this)
                this.firstName = firstName
                this.lastName = lastName
            }
        }

        const person = new Person('John', 'Leavell')
         console.log(person) // Person {}
                                    firstName: "John"
                                    lastName: "Leavell"
                                    __proto__: Object

- Default values with constructor

    - the constructor function properties may have a default value like regular function

    class Person {
        constructor(
            firstName = 'John',
            lastName = 'Leavell',
            age = 40,
            country = 'United States of America",
            city = 'Chicago'
        ) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.coutry = country
            this.city = city
        }
    }

    const person1 = new Person() // it will take the default values
    const person2 = new Person('bob', 'jones', 44, 'united states of america', 'nashville')

- Class Methods

    - the constructor inside the class is a builtin function which allows to create a bluepirnt for the object
    - Methods are JS functions inside the class

            class Person {
            constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city
        }
            getFullName() {
                const fullName = this.firstName + ' ' + this.lastName
                return fullName
            }
        }

        const person1 = new Person ('Jon', 'eave', 44, 'usa', 'home')
        console.log(perosn1.getFullName())

- Properties with initial value

    - starting a game initial score is 0

    EXAMPLE:

        class Person {
        constructor(firstName, lastName, age, country, city) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.country = country
            this.city = city
            this.score = 0
            this.skills = []
        }
        getFullName() {
            const fullName = this.firstName + ' ' + this.lastName
            return fullName
        }
        }

        const person1 = new Person ('Jon', 'eave', 44, 'usa', 'home')

        console.log(perosn1.score)  // 0
        console.log(perosn2.skills) // []