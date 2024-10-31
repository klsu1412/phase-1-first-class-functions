function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function foo() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}