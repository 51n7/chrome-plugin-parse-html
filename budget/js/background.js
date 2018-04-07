
// A function to use as callback
function getDomAndCreateTab(domContent) {
  
  // create a new tab with an html page that resides in extension domain:
  chrome.tabs.create({
    'url': chrome.extension.getURL("index.html"), 
    'active': true
  },
  function(tab){
    var selfTabId = tab.id;
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if (changeInfo.status == "complete" && tabId == selfTabId){
        // send the data to the page's script:
        var tabs = chrome.extension.getViews({type: "tab"});
        tabs[0].doSomething(domContent);
      }
    });
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, getDomAndCreateTab);

});
