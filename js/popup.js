document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {


chrome.tabs.getAllInWindow(null, function(tabs){
    for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i]);
    // chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });                         
    }
});




/*
        chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.url);
    });
  });
});
*/


       /* chrome.tabs.getAllInWindow(chrome.windows.WINDOW_ID_CURRENT, function(tabs) {
            for (var i = 0; i < tabs.length; ++i) {
                console.log(tabs[i].url);
            }
        });*/
    }, false);
}, false);