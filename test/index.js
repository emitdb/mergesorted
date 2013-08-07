var mergesorted = require('../'),
  assert = require('assert');

assert.deepEqual(mergesorted([], []), []);
assert.deepEqual(mergesorted([1], []), []);
assert.deepEqual(mergesorted([], [1]), []);
assert.deepEqual(mergesorted([1, 2, 3], []), []);
assert.deepEqual(mergesorted([], [1, 2, 3]), []);
assert.deepEqual(mergesorted([1], [1]), [1]);
assert.deepEqual(mergesorted([1, 2, 3], [3, 4]), [3]);
assert.deepEqual(mergesorted([3, 4], [1, 2, 3]), [3]);
assert.deepEqual(mergesorted([1, 2, 3], [2, 3, 4]), [2, 3]);
assert.deepEqual(mergesorted([2, 3, 4], [1, 2, 3]), [2, 3]);

console.log('ok');
