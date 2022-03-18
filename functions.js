export const capitalize = (str) => str.toUpperCase();

export const reverseString = (str) => {
  const split = str.split('');
  const reverseArray = split.reverse();
  const result = reverseArray.join('');
  return result;
}

export const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

export const caesarCipher = (() => {
  const getAdjustedShift = (shift) => {
    if (shift >= -26 && shift <= 26) {
      return shift;
    } else {
      return shift % 26;
    }
  }

  const encode = (str, shift) => {
    let result = '';
    let c = '';

    const adjustedShift = getAdjustedShift(shift);
  
    for (let i = 0; i < str.length; i++) {
      c = str[i];
  
      if (c.match(/[a-z]/i)) {
        const code = str.charCodeAt(i);
  
        if (code >=65 && code <=90) {
          c = String.fromCharCode(
            ((code - 65 + shift) % 26) + 65
          );
        } else if (code >=97 && code <=122) {
          c = String.fromCharCode(
            ((code - 97 + shift) % 26) + 97
          );
        };
      }

      result += c;
    }
    return result;
  }
  return { encode }
})();

export const analyzeArray = (arr) => {
  const average = () => {
    return arr.reduce((prev, cur) => prev + cur) / arr.length;
  }

  const min = () => Math.min(...arr);

  const max = () => Math.max(...arr);

  const length = () => arr.length;

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length()
  }
}