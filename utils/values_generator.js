export function generateRandomValues(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateRandomCharacters() {
  // get random value from rando function
  //Divide it to get into a range of values from ASCII table (32-127)
  // Math.floor(Math.random() * (max - min) ) + min;
  const value = generateRandomValues(32, 127);

  const ascII = String.fromCharCode(value);

  return ascII;
}
