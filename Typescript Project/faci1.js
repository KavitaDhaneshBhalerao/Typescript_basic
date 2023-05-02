var fibonacci = function (n, num1, num2, depth) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 1; }
    if (depth === void 0) { depth = 0; }
    while (n == depth)
        return num2;
    {
        var Counter = 0;
        console.log(fibonacci(n, num2, num1 + num2, depth + 1));
        //Counter=Counter+1;
        Counter++;
    }
    ;
};
