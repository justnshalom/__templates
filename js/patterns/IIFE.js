// IIFE / API / public-private

var namespace = (function () {
    // defined within the local scope
    var privateMethod1 = function () { /* ... */ }
    var privateMethod2 = function () { /* ... */ }
    var privateProperty1 = 'foobar';
    return {
        // the object literal returned here can have as many
        // nested depths as you wish, however as mentioned,
        // this way of doing things works best for smaller,
        // limited-scope applications in my personal opinion
        publicMethod1: privateMethod1,
        //nested namespace with public properties
        properties:{
            publicProperty1: privateProperty1
        },
        //another tested namespace
        utils:{
            publicMethod2: privateMethod2
        }
            //...
    }
})();

// returns an object


// OR...
// alternate syntax

var module = (function () {
    var privateProp = 'foo';

    function privateFunction () {
        // ...
    }

    // public
    this.publicFunc = function () {
        // ...
    };

    // privileged
    this.privProp = privateProp;

    return this;
})();


// add additional modules


