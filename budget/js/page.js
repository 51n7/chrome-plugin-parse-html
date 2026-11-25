let alreadyRun = false;

function doSomething(data) {
  if (alreadyRun) {
    return;
  }

  document.body.innerHTML = data;
  console.log(data);
  alreadyRun = true;
}

chrome.storage.session.get("domContent").then((result) => {
  if (result.domContent) {
    doSomething(result.domContent);
    chrome.storage.session.remove("domContent");
  }
});
