/**
 * Direction:
 * Remove duplicated data from array
 *
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  var x,
    len = data.length,
    out = [],
    obj = {};

  for (x = 0; x < len; x++) {
    obj[data[x]] = 0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}

result = result(data);

console.log(result);
