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

Getter

    - get method allows us to access values from the object
    - we write a get method using get followed by a function

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
    get getscore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    }

    const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
    const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

    console.log(person1.getScore) // We do not need parenthesis to call a getter method
    console.log(person2.getScore)

    console.log(person1.getSkills)
    console.log(person2.getSkills)
    0
    0
    []
    []


SETTER

    - Allows us to modify the value of certain properties
    - We write a setter method uisnd set followed by a function

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
  get getscore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
0
0
[]
[]
setter
The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.

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
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
        set setScore(score) {
            this.score += score
        }
        set setSkill(skill) {
            this.skills.push(skill)
        }
        }

        const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
        const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

        person1.setScore = 1
        person1.setSkill = 'HTML'
        person1.setSkill = 'CSS'
        person1.setSkill = 'JavaScript'

        person2.setScore = 1
        person2.setSkill = 'Planning'
        person2.setSkill = 'Managing'
        person2.setSkill = 'Organizing'

        console.log(person1.score)
        console.log(person2.score)

        console.log(person1.skills)
        console.log(person2.skills)
        1
        1
        ["HTML", "CSS", "JavaScript"]
        ["Planning", "Managing", "Organizing"]

Static Method

    - defines a static method for a class
    - static methods are not called instances of the calss
    - they are called on the class itself.
    - Often called utility functions,
    - Date.now() example of a static method

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
        get getScore() {
            return this.score
        }
        get getSkills() {
            return this.skills
        }
        set setScore(score) {
            this.score += score
        }
        set setSkill(skill) {
            this.skills.push(skill)
        }
        getPersonInfo() {
            let fullName = this.getFullName()
            let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
                ` and ${this.skills[this.skills.length - 1]}`

            let formattedSkills = skills ? `He knows ${skills}` : ''

            let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            return info
        }
        static favoriteSkill() {
            const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
            const index = Math.floor(Math.random() * skills.length)
            return skills[index]
        }
        static showDateTime() {
            let now = new Date()
            let year = now.getFullYear()
            let month = now.getMonth() + 1
            let date = now.getDate()
            let hours = now.getHours()
            let minutes = now.getMinutes()
            if (hours < 10) {
            hours = '0' + hours
            }
            if (minutes < 10) {
            minutes = '0' + minutes
            }

            let dateMonthYear = date + '.' + month + '.' + year
            let time = hours + ':' + minutes
            let fullTime = dateMonthYear + ' ' + time
            return fullTime
        }
        }

        console.log(Person.favoriteSkill())
        console.log(Person.showDateTime())
        Node
        15.1.2020 23:56

Inhertiance

    - using inheritance we can  access all the properties and the methods of the parent calss
    - This reducec repetition of code (dry)

    EXMAOLE:

        If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

        // syntax
        class ChildClassName extends {
        // code goes here
        }
        Let us create a Student child class from Person parent class.

        class Student extends Person {
        saySomething() {
            console.log('I am a child of the person class')
        }
        }

        const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
        console.log(s1)
        console.log(s1.saySomething())
        console.log(s1.getFullName())
        console.log(s1.getPersonInfo())
        Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
        I am a child of the person class
        Asabeneh Yetayeh
        Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
        Asabeneh Yetayeh is Finland. He lives Helsinki, 250.


Overridding methods

    - add additional properties to a child class. 
    - If we want to customize, the methods and if we want to add extra properties, we need to use the constructor function the child class too. 
    - Inside the constructor function we call the super() function to access all the properties from the parent class. 
    - The Person class didn't have gender but now let us give gender property for the child class, Student. 
    - If the same method name used in the child class, the parent method will be overridden.

    class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the person class')
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''
        let pronoun = this.gender == 'Male' ? 'He' : 'She'

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    }

    const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
    )
    const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
    s1.setScore = 1
    s1.setSkill = 'HTML'
    s1.setSkill = 'CSS'
    s1.setSkill = 'JavaScript'

    s2.setScore = 1
    s2.setSkill = 'Planning'
    s2.setSkill = 'Managing'
    s2.setSkill = 'Organizing'

    console.log(s1)

    console.log(s1.saySomething())
    console.log(s1.getFullName())
    console.log(s1.getPersonInfo())

    console.log(s2.saySomething())
    console.log(s2.getFullName())
    console.log(s2.getPersonInfo())
    Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
    Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
    I am a child of the person class
    Asabeneh Yetayeh
    Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
    Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
    I am a child of the person class
    Lidiya Tekle
    Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
    Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
    Now, the getPersonInfo method has been overridden and it identifies if the person is male or female.

🌕 You are excelling. Now, you knew class and you have the power to turn everything to an object. You made it to half way to your way to greatness. Now do some exercises for your brain and for your muscle.

Exercises
Exercises Level 1
Create an Animal class. The class will have name, age, color, legs properties and create different methods
Create a Dog and Cat child class from the Animal Class.
Exercises Level 2
Override the method you create in Animal class
Exercises Level 3
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.