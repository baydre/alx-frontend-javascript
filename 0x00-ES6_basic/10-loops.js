/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
