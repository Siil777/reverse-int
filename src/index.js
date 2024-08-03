module.exports = function reverse (n) {
  let line = Math.abs(n).toString();
  let reversed = line.split('').reverse().join('');
  let positive = parseInt(reversed, 10);

  return positive;
}
