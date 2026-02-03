function checkProbabilityTheory(count) {
    let numbers = [];
    let evenCount = 0;
    let oddCount = 0;


    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * 901) + 100;
        numbers[i] = number;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercent = 0;
    let oddPercent = 0;

    for (let i = 0; i < 1; i++) {
        evenPercent = (evenCount * 100) / count;
        oddPercent = (oddCount * 100) / count;
    }

    return {
        generatedNumbers: numbers,
        total: count,
        even: evenCount,
        odd: oddCount,
        evenPercent: evenPercent.toFixed(2) + '%',
        oddPercent: oddPercent.toFixed(2) + '%'
    };
}

let result = checkProbabilityTheory(Math.floor(Math.random() * 50));
console.log(result);

process.stdin.read();