// Exercises Level 1:

// Get user input using prompt ("enter your age")
// const getAge = () => {
//     let age = prompt('What is your age?')

//     if(age >= 18){
//         console.log('You are old enough to drive')
//     } else {
//         console.log(`You need to wait some years`)
//     }
// }

const getAges = () => {
    let myAge = parseInt(prompt('Player One What is you age'));
    let yourAge = parseInt(prompt('Player Two What is you age'));
    
    if(myAge < yourAge)
      {
      console.log(`Youre ${yourAge - myAge} years older than me!`)
      } else {
      (myAge > yourAge)
      {
      console.log(`Youre ${myAge - yourAge} years younger than me!`)
      }
    }
}