var gui = require('nw.gui');

// ------------------------------------------------------------------ Traymenu

var tray = new gui.Tray({tooltip: 'Ping', icon: 'img/mainw.png'});

var menu = new gui.Menu();
menu.append(new gui.MenuItem({type: 'checkbox', label: 'Show notifications'}));

// Bind the menu to tray
tray.menu = menu;

//3.or pass in an anonymous function
setTimeout(showPopup, 5000);

// ------------------------------------------------------------------ Popup

//a function named foo
function showPopup () {
    var popup = gui.Window.get(
        window.open('popup.html', {
            width: 50,
            height: 25
        })
    );
    popup.moveTo(786, 500);
    popup.resizeTo(75, 25);
}

// And listen to new window's focus event
// popup.on('focus', function() {
//   console.log('New window is focused');
//});
