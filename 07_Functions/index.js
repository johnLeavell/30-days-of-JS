// create a function that will calculate a users age
const calcAge = (birthYear) => {
    let age = new Date().getFullYear() - birthYear  
    return age
  }
  
  calcAge(1980)

  // declasr a function fullName and print out your name    
  const getFullName = (firstName, lastName) => {
      let fullName = firstName +  lastName
      return `My name is ${fullName}`
  }

  // declar a function addNumvers and it takes two parameters and returns sum

  const addNumbers = (num1, num2) => {
      let sum = num1 + num2;
      return sum
  }


  const perimeterOfRectangle = (length, width) => {
      let area = length * width
      return area
  }