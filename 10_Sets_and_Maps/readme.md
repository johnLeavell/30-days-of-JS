Day 10: Sets and Maps


Set 
    - A set is a collection of elements
    - Set can only contain unique elements

    EXAMPLE:

    creating an empty set

    cosnt companines = new Set();
    console.log(companies) // {}


-Creating a set from an array

    const languages = ['English', Finniish', English', French, Spanish, 'English', French']

    cosnt setOfLanguages = new Set(languages)
    console.log(setOfLanguages)
    Set(4) {"English", "Finnish", "French", "Spanish"}


- Set is an iterable object and we can iterate throught each element

        const languages = [
        'English',
        'Finnish',
        'English',
        'French',
        'Spanish',
        'English',
        'French',
        ]

        const setOfLangauges = new Set(languages)

        for (const language of setOfLangauges) {
        console.log(language)
        }

- Adding an element to a set

    const companies = new Set() // creating an empty set

    companies.add('Google') // add element to the set
    companies.add('Facebook')
    companies.add('Oracle')
    companies.add('Microsoft')
    companies.add('Amazon')

    console.log(companies.size) // 5

    console.log(companies) // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

- We can also use loop to add element to a set.

    const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
    setOfCompanies = new Set()

    for (const company of companies) {
    setOfCompanies.add(company)
    }

    Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}
    
    
- Deleting an element a set
    - We can delete an element from a set using a delete method.

    console.log(companies.delete('Google'))
    console.log(companies.size) // 4 elements left in the set

- Checking an element in the set
    - The has method can help to know if a certain element exists in a set.

    console.log(companies.has('Apple')) // false
    console.log(companies.has('Facebook')) // true

Clearing the set
    - It removes all the elements from a set.

    companies.clear()

    console.log(companies)
    {}

    EXAMPLE:
    
    const languages = [
        'english',
        'finnish',
        'english',
        'french',
        'spanish',
        'english',
        'french'
    ]

    const langSet = new Set(languages)

    const conts = [];
    const counts = {};

    for (const l of langSet) {
        const filteredLang = languages.filter((lng) => lng === l)
        console.log(filteredLang) 
        counts.push({lang: l, count: filteredLang.length })
    }

    console.log(counts)

    ;[
  { lang: 'English', count: 3 },
  { lang: 'Finnish', count: 1 },
  { lang: 'French', count: 2 },
  { lang: 'Spanish', count: 1 },
    ]

    EXAMPLE: count unique item in an array

    const numbers = [5, 3, 2, 5, 9, 4, 5]
    const setOfNumbers = new Set(numbers)

    console.log(setOfNumbers) // Set(5) {5, 3, 2, 9, 4}


Union of sets 
    
    - To find a union to two sets can be achieved using spread operator.

    EXAMPLE:

    let a = [1, 2 , 3, 4, 5];
    let b = [3, 4, 5, 6];
    let c = [...a, ...b];

    let A = new Set(a);
    let B = new Set(b);
    let C = new Set(c);

    console.log(C); // Set(6) {1, 2, 3, 4, 5,6}

Intersection of sets

    - To find an intersection of two setc anc be achieved using filter

    EXAMPLE:

    let a = [1, 2, 3, 4, 5];
    let b = [3, 4, 5];

    let A = new Set(a);
    let B = new Set(b);

    let c = a.filter((num) => B.has(num))
    let C = new Set(c);

    console.log(C) // Set(3) {3, 4, 5}


Difference of Sets

    - To find the difference between two sets can be achieved using filter  
    let a = [1, 2, 3, 4, 5];
    let b = [3, 4, 5, 6];

    let A = new Set(a);
    let B = new Set(b);

    let c = a.filter((num) => !B.has(num))
    let C = new Set(c)

    console.log(C) // Set(2) {1, 2}



Map

    - Creating an empty Map

    const map = new Map()
    console.log(map)

    Map(0) {}


Creating a Map from an array

    countries = [
        ['Finland', 'Helsinki'],
        ['Sweden', 'Stockholm'],
        ['Norway', 'Oslo'],
    ]

    const map = new Map(countries)

    console.log(map) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}

    console.log(map.size) // 3


Adding values to the Map

    const countriesMap = new Map()

    console.log(countriesMap.size) // 0

    countriesMap.set('Finland', 'Helsinki')
    countriesMap.set('Sweden', 'Stockholm')
    countriesMap.set('Norway', 'Oslo')

    console.log(countriesMap)

    console.log(countriesMap.size) // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
    
    3

Getting a value from Map

    console.log(countriesMap.get('Finland')) // Helsinki


Checking key in Map

    - Check if a key exist in a map using has method
    - It returns true or false

    console.log(countriesMap.has('Finland')) // true


Getting all values from map using a loop

    for(const country of countriesMap) {
        console.log(country)
    }

    //  (2) ["Finland", "Helsinki"]
        (2) ["Sweden", "Stockholm"]
        (2) ["Norway", "Oslo"]

    for (const [country, city] of countriesMap){
    console.log(country, city)
    }
    Finland Helsinki
    Sweden Stockholm
    Norway Oslo


ESERCISES:
create an empty set
const schools = new Set()


create a set containing 0 - 10 using loop

const numbers = [
    1,
    2,
    3,
    4,
    5,
    2,
    3,
    4,
    5
]


const numbSetNew = new Set(numbers)
undefined
for (const number of numbSetNew) {
    console.log(number)
}



remove an element from a set
console.log(setOfNumbers.delete(5))



clear a set
setOfNumbers.clear()

create a set of 5 string elements from an array

create a map of countries and number of characters of a country



const a = {4, 5, 8, 9}
const b = {3, 4, 5, 7}
const countries = ['Finland', 'Sweden', 'Norway']
create an empty set
Create a set containing 0 to 10 using loop
Remove an element from a set
Clear a set
Create a set of 5 string elements from array
Create a map of countries and number of characters of a country