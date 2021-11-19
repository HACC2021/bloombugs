cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-meteor-webapp.WebAppLocalServer",
      "file": "plugins/cordova-plugin-meteor-webapp/www/webapp_local_server.js",
      "pluginId": "cordova-plugin-meteor-webapp",
      "merges": [
        "WebAppLocalServer"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-meteor-webapp": "1.6.5",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-splashscreen": "6.0.0"
  };
});