# Social Notif

All your social media notifications in one place.

### Status

The application just exists in our minds for now. 

It will be made using node webkit, but before we can start working on the app itself, we first need to create a way of displaying beautiful notifications just like Chrome. 

### Prior art

There is already a [chrome extension](https://chrome.google.com/webstore/detail/chime/lkdfkbkkfdhhfnhgbphecddnpfnoedke) that does what we're trying to achieve. The only problem is, it needs chrome to be running. Apart from adding new social accounts, the extension could also use some UI redesign.

Also worth seeing is the Growl app which is available for all three common platforms: [Windows](http://www.growlforwindows.com/gfw), [Mac](http://growl.info/), [Linux](http://mattn.github.io/growl-for-linux/).

I once tried using Growl but couldn't get it to work properly.

### Architecture

We'll try to keep the design modular so that anyone can add a new source of notification easily.

### Sources

* Facebook
* Twitter

* Quora
* Reddit
* Goodreads
* Last.fm (?)

* GMail
* Outlook

* Github
* Stack Overflow
