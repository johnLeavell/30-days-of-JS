Day 12: Regular Expressions

    - A RegExp is a small programming language that helps to find patter in data
    - RegExp can be used to chedk if some pattern exists in a different data type
    - Using RegExp in JS either use RegExp constructor or delcare RegExp pattern using two forward
    // forward slashes followed by a flag

RegExp parameters

    - RegExp takes two parameters. One required search pattern and an optional flag

Pattern

    - a pattern could be text or any form of pattern which some sort of similarity

Flags

    - flags are optional parameters in a RegExp which determine the type of searching
        EXAMPLES:

            g: is a global flag which means looking for a pettern in the whole text
            i: case insensitive flag ( searches for both lowercase and uppercase )
            m: multiline

- Creating a pattern with RegExp Constructor

    - Declaring a RegExp without global flage and case insesitve flag

        EXAMPLE: 

        // without flag

        let pattern = 'love';
        let regEx = new RegExp(pattern)

    - Declaring RegExp with global flage and case insensitive flag

        EXAMPLE:

        let pattern = 'love';
        let flag = 'gi'
        let regEx = new RegExp(pattern, flag)

    - Declaring a RegExp pattern using RegExp object.  Writing a ppattern and flag inside the RegExp consturctor 

        EXAMPLE:

        let regExp = new RegExp('love', 'gi')

- Creating a pattern without RegExp Constructor

    - Declaring a RegExp with global flag and case insenestive flag.
    -----The below two lines are the same ------
    let regEx = /love/gi
    let regEx = new RegExp('love', 'gi') 


- RegExp Object Methods

    - Testing for a match
        test(): test for a match in a string. it returns true or false

        EXAMPLE:

        const str = 'I love JavaScript'
        const pattern = /love/
        const result = pattern.test(str)
        console.log(result)
        true
    
    - Array containing all of the match
        match(): returns an array containing all of the matches, including capturing groups, or null if no match is found
        - if we do not use a global flag match(): retunrs an array containng the pattern, index, input and group
    
        const str = 'I love JavaScript'
        const pattern = /love/
        const result = str.match(pattern)
        console.log(result)
        ["love", index: 2, input: "I love JavaScript", groups: undefined]
        

        const str = 'I love JavaScript'
        const pattern = /love/g
        const result = str.match(pattern)
        console.log(result)
        ["love"]

    - search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
        
        EXAMPLE:
        const str = 'I love JavaScript'
        const pattern = /love/g
        const result = str.search(pattern)
        console.log(result)
        2

        