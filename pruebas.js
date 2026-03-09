function smallestCommons(arr) {

    const arrSort = [...arr].sort((a, b) => a - b);
    const mcd = (a, b) => {
        if (b <= 0) return a;
        const division = a % b;
        return mcd(b, division);
    }

    const mcm = (a, b) => (a * b) / mcd(a, b);

    const numbersD = Array.from(
        { length: arrSort[0] - arrSort[1] + 1 },
        (_, i) => arrSort[0] + i
    );

    return numbersD.reduce((acc, val) => mcm(acc, val));
}

console.log(smallestCommons([1, 5])); 