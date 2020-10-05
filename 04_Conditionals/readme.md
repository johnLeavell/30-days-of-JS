Day 04: Conditionals

Conditionals 
    - statements are used for making decisions basded on different conditions
    - statements in JS are executed sequentially from top to bottom
    - if the processing logic require so, the sequentila flow of executin can be altered in two ways:
        - Conditional execution: a block of one or more statements will be executed if a certain expression is true
        - Repetive execution: a block of one or more statemetns will be repeitvely executed as long as a certain expression is true.

Conditions can be implemented using the following ways:

    - if
        // syntax
        if (condition) {
        //this part of code runs for truthy condition
        }
        
        Example:

        let num = 3;
        if(num > 0) {
            console.log(`${num} is a positive number`)
        }
        // 3 is a positive number

    - if else
        // syntax
        if (condition) {
        // this part of code runs for truthy condition
        } else {
        // this part of code runs for false condition
        }

        Example 1:
        let num = 3
        if (num > 0) {
        console.log(`${num} is a positive number`)
        } else {
        console.log(`${num} is a negative number`)
        }
        //  3 is a positive number

        num = -3
        if (num > 0) {
        console.log(`${num} is a positive number`)
        } else {
        console.log(`${num} is a negative number`)
        }
        //  -3 is a negative number

        Example 2:
        let isRaining = true
        if (isRaining) {
        console.log('You need a rain coat.')
        } else {
        console.log('No need for a rain coat.')
        }
        // You need a rain coat.

        isRaining = false
        if (isRaining) {
        console.log('You need a rain coat.')
        } else {
        console.log('No need for a rain coat.')
        }
        // No need for a rain coat.

    - if else if else - We use else if when we have multiple conditions.
        // syntax
        if (condition) {
            // code
        } else if (condition) {
        // code
        } else {
            //  code
        }

        Example 1:
        let a = 0
        if (a > 0) {
        console.log(`${a} is a positive number`)
        } else if (a < 0) {
        console.log(`${a} is a negative number`)
        } else if (a == 0) {
        console.log(`${a} is zero`)
        } else {
        console.log(`${a} is not a number`)
        }

        Example 2:
        let weather = 'sunny'
        if (weather === 'rainy') {
        console.log('You need a rain coat.')
        } else if (weather === 'cloudy') {
        console.log('It might be cold, you need a jacket.')
        } else if (weather === 'sunny') {
        console.log('Go out freely.')
        } else {
        console.log('No need for rain coat.')
        }

    - switch
        // syntax
        switch(caseValue){
        case 1:
        // code
            break
        case 2:
        // code
            break
        case 3:
        // code
            default:
        // code
        }

        Example:
        let weather = 'cloudy'
            switch (weather) {
            case 'rainy':
                console.log('You need a rain coat.')
                break
            case 'cloudy':
                console.log('It might be cold, you need a jacket.')
                break
            case 'sunny':
                console.log('Go out freely.')
                break
            default:
                console.log(' No need for rain coat.')
            }

            // Switch More Examples
            let dayUserInput = prompt('What day is today ?')
            let day = dayUserInput.toLowerCase()

            switch (day) {
            case 'monday':
                console.log('Today is Monday')
                break
            case 'tuesday':
                console.log('Today is Tuesday')
                break
            case 'wednesday':
                console.log('Today is Wednesday')
                break
            case 'thursday':
                console.log('Today is Thursday')
                break
            case 'friday':
                console.log('Today is Friday')
                break
            case 'saturday':
                console.log('Today is Saturday')
                break
            case 'sunday':
                console.log('Today is Sunday')
                break
            default:
                console.log('It is not a week day.')
            }


    Example 2:
    let num = prompt('Enter number');
        switch (true) {
        case num > 0:
            console.log('Number is positive');
            break;
        case num == 0:
            console.log('Numbers is zero');
            break;
        case num < 0:
            console.log('Number is negative');
            break;
        default:
            console.log('Entered value was not a number');
        }

    - ternary operator

        Example:
        let isRaining = true
        
        isRaining
        ? console.log('You need a rain coat.')
        : console.log('No need for a rain coat.')
