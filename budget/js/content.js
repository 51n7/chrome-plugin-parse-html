chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.text === "report_back") {
    sendResponse(document.documentElement.outerHTML);
  }
});
