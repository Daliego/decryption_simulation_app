export function generateRandomValue() {
  // get random value from rando function
  //Divide it to get into a range of values from ASCII table (32-127)
  // Math.floor(Math.random() * (max - min) ) + min;
  const value = Math.floor(Math.random() * (127 - 32)) + 32;

  const ascII = value.toString().charAt();

  return ascII;

  // return an ASCII table value
}
