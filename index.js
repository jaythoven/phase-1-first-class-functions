function receivesAFunction(example) {
    return example();
}

function returnsANamedFunction() {
    return function aSecondFunction() {
        
    }
}

function returnsAnAnonymousFunction () {
    return function() {
    //    console.log('');
    }
}