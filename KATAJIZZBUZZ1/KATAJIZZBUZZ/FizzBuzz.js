const FizzBuzz = (number) => {
    if (number % 3 === 0 ) {
        return 'Fizz'
    }
    if (number % 5 === 0){
        return 'Buzz'
    }
}

module.exports = FizzBuzz
