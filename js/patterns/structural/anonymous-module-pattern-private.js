// private

// 1.
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



// 2.

var App2 = App2 || {};

(function($, window, document, undefined) {

    'use strict';

    App2.Module = (function() {

        function _init() {
            alert('initlialised');
        }

        return _init();

    })();

})(jQuery, window, document);