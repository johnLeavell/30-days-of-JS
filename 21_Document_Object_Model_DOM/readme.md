Day 21: The DOM

    - Getting Element

        - getElementsByTagName(): takes a name as a string parameter and this method returns an HTMLCollection object.
        - An HTMLCollection is an array like object of HTML elements. 
        - The length property provides the size of the collection. 
        - Whenever we use this method we access the individual elements using index or after loop through each individual items. 
        - An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.
        
        - getElementsByClassName(): returns an HTMLCollection object. 
        - An HTMLCollection is an array like list of HTML elements. 
        - The length property provides the size of the collection. It is possible to loop through all the HTMLCollection elements.