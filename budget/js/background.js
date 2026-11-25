chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) {
    return;
  }

  try {
    const domContent = await chrome.tabs.sendMessage(tab.id, {
      text: "report_back",
    });

    await chrome.storage.session.set({ domContent });

    await chrome.tabs.create({
      url: chrome.runtime.getURL("index.html"),
      active: true,
    });
  } catch (error) {
    console.error(
      "Could not read this page. Try a normal http(s) page where the content script can run.",
      error
    );
  }
});
