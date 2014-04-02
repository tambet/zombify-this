chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file:"styles.css"});
  chrome.tabs.executeScript(null, {file: "zombify.js"});
});

var achievments  = {
  1  : {message: 'First blood!',   sound: new Audio('sounds/firstblood.wav')},
  2  : {message: 'Double kill!',   sound: new Audio('sounds/doublekill.wav')},
  5  : {message: 'Killing Spree!', sound: new Audio('sounds/killingspree.wav')},
  10 : {message: 'Rampage!',       sound: new Audio('sounds/rampage.wav')},
  15 : {message: 'Dominating!',    sound: new Audio('sounds/dominating.wav')},
  20 : {message: 'Unstoppable!',   sound: new Audio('sounds/unstoppable.wav')},
  25 : {message: 'Godlike!',       sound: new Audio('sounds/godlike.wav')},
  40 : {message: 'Holy shit!',     sound: new Audio('sounds/holyshit.wav')}
};

chrome.extension.onMessage.addListener(function (req, sender, respond) {
  chrome.browserAction.setBadgeText({text: req.score.toString()});
  var achievment = achievments[req.score];
  if (req.score > 40) {
    achievment = achievments[40]
  }
  if (achievment) {
    achievment.sound.cloneNode().play();
  }
  respond({message: achievment ? achievment.message : undefined});
});
