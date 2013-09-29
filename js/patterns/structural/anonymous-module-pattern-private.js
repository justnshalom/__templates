// private

var App = App || {};

(function($, window, document, undefined) {

    'use strict';

    App.Module = (function() {

        function _init() {
            alert('initlialised');
        }

        return {
            init: _init
        }

    })();

    $($.proxy(App.Module.init, App.Module));

})(jQuery, window, document);

