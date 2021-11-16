/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */

function result(numbers) {
  var n = numbers.length;
  var total = (n * (n + 1)) / 2;
  for (let i = 0; i < n; i++) {
    total -= numbers[i];
  }
  return total;
}
var numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(result(numbers));
