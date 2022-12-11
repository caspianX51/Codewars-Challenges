/**
 * Converts an array of binary numbers to an integer.
 *
 * @param {Array} arr - The array of binary numbers to convert.
 * @returns {Number} The integer value equivalent to the input binary numbers.
 */
const binaryArrayToNumber = (arr) => {
  // Initialize two empty strings to store the intermediate and final binary values.
  let prebinary = "";
  let binary = "";

  // Iterate over the elements in the input array.
  for (let i = 0; i < arr.length; i++) {
    // Convert the current element to a string.
    prebinary = arr[i].toString();
    // Concatenate the string to the final binary string.
    binary += prebinary;
  }

  // Convert the final binary string to an integer.
  let integer = parseInt(binary, 2);

  // Return the integer value.
  return integer;
};
