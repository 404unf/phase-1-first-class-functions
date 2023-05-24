
function receivesAFunction(cb) {
    return cb();
}


function returnsANamedFunction() {
    const kale = () => console.log('Kale is savage!')
    return kale
}

function returnsAnAnonymousFunction() {
    return () => console.log('Kelly is a savage!')
}