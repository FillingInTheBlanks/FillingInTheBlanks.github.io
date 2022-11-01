chrome.runtime.onInstalled.addListener(function (context) {
  if ("install" === context.reason)
    chrome.tabs.create({url: chrome.runtime.getURL("game.html")});
});

chrome.action.onClicked.addListener(function () {
  chrome.tabs.create({url: chrome.runtime.getURL("game.html")});
});
