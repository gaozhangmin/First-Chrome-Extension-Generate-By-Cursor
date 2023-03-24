// Listen for a click on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// Listen for messages from content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "alt_txt" ) {
      var altText = request.data
      console.log('Alt text copied to clipboard:', altText);
      sendResponse({message: "Say hi to you from background"});
    }
  }
);