const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

const factorial2 = number => number > 1 ? number * factorial2(number - 1) : 1;
console.log(factorial2(5));