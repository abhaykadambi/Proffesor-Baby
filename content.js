chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if (tab.url == 'chrome://newtab/')
    { alert('bing bing') }
});