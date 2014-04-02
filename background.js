chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file:"styles.css"});
  chrome.tabs.executeScript(null, {file: "zombify.js"});
});

var sounds = {
  1  : new Audio('sounds/firstblood.wav'),
  2  : new Audio('sounds/doublekill.wav'),
  5  : new Audio('sounds/killingspree.wav'),
  10 : new Audio('sounds/rampage.wav'),
  15 : new Audio('sounds/dominating.wav'),
  20 : new Audio('sounds/unstoppable.wav'),
  25 : new Audio('sounds/godlike.wav')
};

chrome.extension.onMessage.addListener(function(message){
  chrome.browserAction.setBadgeText({text: message.counter.toString()});
  if (sounds[message.counter] !== undefined) {
    sounds[message.counter].play()
  }
});
