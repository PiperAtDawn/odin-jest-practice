import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray
} from './functions'

// captialize
describe('capitalize', function() {
  it('Capitalizes sentence', () => {
    expect(capitalize(
      'Capitalizes sentence'
    )).toEqual('CAPITALIZES SENTENCE');
  });
});

// reverseString
describe('reverseString', function() {
  it('Reverses a string', () => {
    expect(reverseString(
      'Reverses a string'
    )).toEqual('gnirts a sesreveR');
  });
});

// calculator
describe('calculator', function() {
  it('Adds two numbers', () => {
    expect(calculator.add(1, 2))
      .toEqual(3);
  });
  it('Subtracts number 2 from number 1', () => {
    expect(calculator.subtract(5, 2))
      .toEqual(3);
  });
  it('Multiplies two numbers', () => {
    expect(calculator.multiply(2, 5)).
      toEqual(10);
  });
  it('Divides number 1 by number 2', () => {
    expect(calculator.divide(9, 3)).
      toEqual(3);
  });
});

// caesarCipher
describe('caesarCipher', function() {
  it('Encodes "Word" with shift 1 as "Xpse"', () => {
    expect(caesarCipher.encode('Word', 1)).
      toEqual('Xpse');
  });
  it('Encodes "Word" with shift -1 as "Vnqc"', () => {
    expect(caesarCipher.encode('Word', -1)).
      toEqual('Vnqc');
  });
  it('Encodes "This is a sentence!" correctly', () => {
    expect(caesarCipher.encode('This is a sentence!', 1)).
      toEqual('Uijt jt b tfoufodf!');
  });
});

// analyzeArray
describe('analyzeArray', function() {
  it('Finds the average value of an array', () => {
    expect(analyzeArray([1, 2, 3]).average).
      toEqual(2);
  });
  it('Finds the min value of an array', () => {
    expect(analyzeArray([1, 2, 3]).min).
      toEqual(1);
  });
  it('Finds the max value of an array', () => {
    expect(analyzeArray([1, 2, 3]).max).
      toEqual(3);
  });
  it('Finds the length of an array', () => {
    expect(analyzeArray([1, 2, 3]).length).
      toEqual(3);
  });
  it('Returns an object', () => {
    expect(analyzeArray([1, 2, 3])).
      toEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
      });
  });
});