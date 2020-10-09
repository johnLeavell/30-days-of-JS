// create an empty object called dog
const dog = {};


// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Fido";
dog.legs = 4;
dog.color = 'Brown';
dog.age = 11;
dog.bark = function(){
    return 'woof, woof'
}

// Get name, legs, color, age and bark value from the dog object

let dogName = dog.name