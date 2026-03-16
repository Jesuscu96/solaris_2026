function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];


  const filterNumbers = romanNumerals.filter(([v1, v2]) => v2 <= num);
  
  const sumNumbers = filterNumbers.reduce((acc, [v1, v2], index) => {
    /* if (v2 <= num) {
      acc = [...acc, [v1 += v1, v2 += v2]]
      if (acc[index][1] <= num) {
        acc = [...acc, [v1 += v1, v2 += v2]]
        if (acc[index + 1][1] <= num) {
          acc = [...acc, [v1 += v1, v2 += v2]]
          return acc;
        }
        return acc;
      }
      return acc;
    } */
    if (index == 0) {
      if (num <= (v2 * 3)) {
        return acc = [...acc, [v1 + v1 + v1, v2 * 3]]
      }
      else if (num <= (v2 * 2)) {
        return acc = [...acc, [v1 + v1, v2 * 2]]
      } else if (num <= v2) {
        return acc = [...acc, [v1, v2]]
      }

    }
    else {
      const sumAcc = acc.reduce((acc, [e1, e2])=> {acc + e2});
      if (num <= ((v2 * 3) + sumAcc)) {
        return acc = [...acc, [v1 + v1 + v1, v2 * 3]]
      }
      else if (num <= ((v2 * 2) + sumAcc)) {
        return acc = [...acc, [v1 + v1, v2 * 2]]
      } else if ((num <= v2) + sumAcc) {
        return acc = [...acc, [v1, v2]]
      }
    }


  }, [])
  console.table(sumNumbers);


}

convertToRoman(36);