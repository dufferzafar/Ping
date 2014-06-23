# Ping

All your social media notifications in one place.

### Build 

1. Install Node.js
2. `npm install`
3. `gulp build`
4. `gulp run`

### Status

The application just exists in our minds for now. 

It will be made using node webkit, but before we can start working on the app itself, we first need to create a way of displaying beautiful notifications just like Chrome. 

### Prior art

There is already a [chrome extension](https://chrome.google.com/webstore/detail/chime/lkdfkbkkfdhhfnhgbphecddnpfnoedke) that does what we're trying to achieve. The only problem is, it needs chrome to be running. Apart from adding new social accounts, the extension could also use some UI redesign.

Also worth seeing is the Growl app which is available for all three common platforms: [Windows](http://www.growlforwindows.com/gfw), [Mac](http://growl.info/), [Linux](http://mattn.github.io/growl-for-linux/).

I once tried using Growl but couldn't get it to work properly.

### The plan

As most of the core work has already been done in Chime, our first focus will be to create a basic notification system. The aim will be to make it look as good as Chrome's notifs, but I'll even be happy with something like [humane.js](http://wavded.github.io/humane-js/)

Once we have the notifications going, we'll start by adding Facebook support, if we can do that the rest of the will come easily too (or so I hope.)

We'll try to keep the design modular so that anyone can add a new source of notification easily.

### Sources

* Facebook
* Twitter

* Slack
* Quora
* Reddit
* Goodreads
* Last.fm (?)

* GMail
* Outlook

* Github
* Stack Overflow

### Features

*These points will later be converted to issues for some discussion.*

The chrome extension (chime) only clears a notification when you manually click - "Mark as read" or click on the link. But our app should have something like 'seen' - it should be able to detect when the user has viewed the notifications and should clear the counter.

We could change the trayicon of the application to a number that displays the unread notif count.
