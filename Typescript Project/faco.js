var fibonacci = function (n, num1, num2, depth) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 1; }
    if (depth === void 0) { depth = 0; }
    if (n == depth)
        return num2;
    return fibonacci(n, num2, num1 + num2, depth + 1);
};
console.log(fibonacci(10));
