import Reverse from './reverse-string';

describe('ReverseString', () => {
  test('empty string', () => {
    const expected = '';
    const actual = Reverse('');
    expect(actual).toEqual(expected);
  });

  test('a word', () => {
    const expected = 'tobor';
    const actual = Reverse('robot');
    expect(actual).toEqual(expected);
  });

  test('a capitalized word', () => {
    const expected = 'nemaR';
    const actual = Reverse('Ramen');
    expect(actual).toEqual(expected);
  });

  test('a sentence with punctuation', () => {
    const expected = '!yrgnuh ma I';
    const actual = Reverse('I am hungry!');
    expect(actual).toEqual(expected);
  });

  test('a palindrome', () => {
    const expected = 'racecar';
    const actual = Reverse('racecar');
    expect(actual).toEqual(expected);
  });
});
