// public w prototype

var App = App || {};

(function($, window, document, undefined) {

    'use strict';

    App.Module = function() {
        var me = this;

        console.log(me);

        $($.proxy(me.init, me));
    };


    App.Module.prototype = {

        init: function() {
            alert('initialised');
        }

    };

})(jQuery, window, document);



// initialise
var car = new App.Module;