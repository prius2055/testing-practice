const capitalizeString = (str) => {
  const slice = str.toString().slice(0, 1).toUpperCase() + str.toString().slice(1);
  return slice;
};

test('first character should be capitalize', () => {
  expect(capitalizeString('barnabas')).toBe('Barnabas');
});
