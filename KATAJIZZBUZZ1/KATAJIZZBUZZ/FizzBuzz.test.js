const FizzBuzz = require("./FizzBuzz")

test ('if number is dividible by 3 it returns Fizz',() => {
    //GIVEN: number divisible by 3
    let number = 3; 
    //WHEN:execute function
    let result = FizzBuzz(3)
    //THEN: return "fizz"
    expect(result).toBe("Fizz");
    })

test ('if number is divisible by 5 it returns Buzz', () => {
    let number = 5;
    let result = FizzBuzz(5)
    expect(result).toBe('Buzz');
})