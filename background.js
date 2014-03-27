chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file:"styles.css"});
  chrome.tabs.executeScript(null, {file: "zombify.js"});
});
