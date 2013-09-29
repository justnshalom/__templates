// public

var App = App || {};

(function($, window, document, undefined) {

    'use strict';

    App.Module = {

        init: function() {
            alert('initlialised');
        }
    };

    $($.proxy(App.Module.init, App.Module));

})(jQuery, window, document);

