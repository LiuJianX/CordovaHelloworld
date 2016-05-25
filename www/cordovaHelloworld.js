/**
 * cordova plugin
 * Copyright (c) ljx
 *
 */
 (function(cordova){
    var CordovaHelloworld = function() {

    };  

    CordovaHelloworld.prototype.startConlose = function (success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'CordovaHelloworld', 'startConlose', []);
    };


    CordovaHelloworld.prototype.startActivity = function (params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'CordovaHelloworld', 'startActivity', [params]);
    };
 
    window.cordovaHelloworld = new CordovaHelloworld();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.cordovaHelloworld = window.cordovaHelloworld;
})(window.PhoneGap || window.Cordova || window.cordova);
