const removeCharacters = (string, characters) => {
  const stringWithoutCharacters = characters.reduce((str, char) => {
    return str.split(char).join('');
  }, string);
  return stringWithoutCharacters;
};

module.exports = (email) => {
  const emailWithoutCharacters = removeCharacters(email, ['@', '.']);

  return emailWithoutCharacters;
};
