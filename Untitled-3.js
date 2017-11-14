var reverse = function(x) {
  const MAX_INTEGER = 2147483647;
  const MAX_NEG_INTEGER = -2147483648;
  let neg;
  if (x < 0) {
    neg = -1;
  } else {
    neg = 1;
  }
  x = Math.abs(x);
  x = x.toString().split('');
  x = x.reverse();
  console.log(x);
  x = parseInt(x.join(''))*neg;
  if (neg == 1 && x > MAX_INTEGER) {
    return 0;
  }
  if (neg == -1 && x < MAX_NEG_INTEGER) {
    return 0;
  }
  return x;
};

console.log(reverse(-214));