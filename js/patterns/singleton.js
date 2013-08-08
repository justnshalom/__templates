var namespace = {};

// auto invoke to create a single instance

namespace.SomeClass = (function () {
    var _privateProp = "foo";

    function _privateMethod () {

    }

    return {
        publicProperty: 'bar'
        , publicMethod: function () {

        }
    }
}());
