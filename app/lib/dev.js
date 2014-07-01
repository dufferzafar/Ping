// To use, require('./js/dev')(window) from your entry js file, to pass the window along.

//////////////////////////////////////////////////////////////// reload

var net = require('net');
var client = net.connect(9292);

client.on('data', function(data) {
    if (data.toString() === 'reload') window.location.reload(true);
});


//////////////////////////////////////////////////////////////// shortcuts

// Mousetrap is used to bind keyboard shortcuts (http://craig.is/killing/mice).

module.exports = function (window) {
    var gui = window.require('nw.gui');
    var win = gui.Window.get();

    window.Mousetrap.bind('ctrl+shift+i', function (e) {
        win.showDevTools();
    });

    window.Mousetrap.bind('ctrl+r', function (e) {
        window.location.reload(true);
    });

    window.Mousetrap.bind('ctrl+w', function (e) {
        gui.App.quit();
    });
};
