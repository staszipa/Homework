function pow(x, y) {
    var a = 1;

    for (let i = 0; i <y; i++) {
        a *= x;
    }

    return a;
}

console.log(pow(5, 3));