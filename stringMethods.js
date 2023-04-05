const stringMethods = {
  stringLength: (string) => string.length,

  stringAuthentification(string) {
    if (string.length > 0 && string.length < 11) {
      return this.stringLength(string);
    }
    throw new Error('string is not valid. Please enter a valid string');
  },

  reverseString(string) {
    const arr = string.toLowerCase();
    const arr2 = [...arr].reverse().join('');
    return arr2;
  },
};

module.exports = stringMethods;
// console.log(stringMethods.reverseString('Basil'));
