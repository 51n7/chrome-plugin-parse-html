var alreadyRun = false;

function doSomething(data){
  if (!alreadyRun) {
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, "text/html");
    var body = document.querySelector('body');
    
    body.innerHTML = data;
    console.log(data);
    
    // needed because opening eg. DevTools to inspect the page will trigger
    // both the "complete" state and the tabId conditions in background.js:
    alreadyRun = true;
  }
}


