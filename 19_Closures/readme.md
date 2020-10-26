Day 19: Closures


    - Closures: writing a function inside an outer function. If the inner function access the variables of the outer function then its called closure.

        EX:

        const outerFunction = () => {
            let count = 0;
            const innerFunction() {
                count ++
                return count
            }
            return innerFunction
        }

        const innerFunction = outerFunction()

        console.log(innerFunc()) // 1
        console.log(innerFunc()) // 2
        console.log(innerFunc()) // 3


        EX 2:

        function outerFunction() {
            let count = 0;
            function plusOne() {
                count++
                return count
            }
            
            function minusOne() {
                count--
                return count
            }
            
            return {
            plusOne:plusOne(),
            minusOne:minusOne()
            }
    }
    const innerFuncs = outerFunction()

    console.log(innerFuncs.plusOne) // 1
    console.log(innerFuncs.minusOne) // 1
