var nameSpace = {};

nameSpace.someClass = function (arg1, arg2) {
    var _privateProp = "foo"

    function _privateMethod () {

    }

    // return public methods
    return {
        publicProperty: "bar"
        , publicMethod: function () {

        }
    };
};


var obj = new nameSpace.someClass('arg1', 'arg2');
