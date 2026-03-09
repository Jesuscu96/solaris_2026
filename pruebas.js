function smallestCommons(arr) {
    
    const [min, max] = [...arr].sort((a,b) => a - b);

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    const lcm = (a, b) => (a * b) / gcd(a, b);

    const range = Array.from(
        {length: max - min + 1},
        (_,i) => min + i
    );

    return range.reduce((acc, val) => lcm(acc, val));
}

console.log(smallestCommons([1,5])); 