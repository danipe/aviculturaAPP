cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.paypal.cordova.mobilesdk.PayPalMobile",
        "file": "plugins/com.paypal.cordova.mobilesdk/www/cdv-plugin-paypal-mobile-sdk.js",
        "pluginId": "com.paypal.cordova.mobilesdk",
        "clobbers": [
            "PayPalMobile"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-x-socialsharing.SocialSharing",
        "file": "plugins/cordova-plugin-x-socialsharing/www/SocialSharing.js",
        "pluginId": "cordova-plugin-x-socialsharing",
        "clobbers": [
            "window.plugins.socialsharing"
        ]
    },
    {
        "id": "ionic-plugin-keyboard.keyboard",
        "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
        "pluginId": "ionic-plugin-keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ],
        "runs": true
    },
    {
        "id": "onesignal-cordova-plugin.OneSignal",
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "id": "card.io.cordova.mobilesdk.CardIO",
        "file": "plugins/card.io.cordova.mobilesdk/www/cdv-plugin-card-io.js",
        "pluginId": "card.io.cordova.mobilesdk",
        "clobbers": [
            "CardIO"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.paypal.cordova.mobilesdk": "3.3.1",
    "cordova-plugin-console": "1.0.5",
    "cordova-plugin-device": "1.1.4",
    "cordova-plugin-inappbrowser": "1.6.1",
    "cordova-plugin-splashscreen": "4.0.1",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-x-socialsharing": "5.1.3",
    "ionic-plugin-keyboard": "2.2.1",
    "onesignal-cordova-plugin": "2.0.10",
    "cordova-plugin-facebook4": "1.7.4",
    "card.io.cordova.mobilesdk": "2.1.0"
};
// BOTTOM OF METADATA
});