export fn fib(n: i32) i32 {
    if (n == 0 or n == 1) {
        return n;
    }

    var iter: i32 = 1;
    var prev: i32 = 0;
    var result: i32 = 1;

    while (iter < n) : (iter += 1) {
        var temp = result;
        result += prev;
        prev = temp;
    }

    return result;
}
