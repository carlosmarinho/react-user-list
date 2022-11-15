function fib(n) {
  if (n < 2)
    return n;

  return fib(n - 1) + fib(n - 2)
}

console.log("fib de 4: ", fib(4));
