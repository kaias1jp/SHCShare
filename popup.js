var DataTitle = "";
var DataURL = "";
var Server = "";

window.onload = function() {
	chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
		var tab = tabs[0];
		//tab.urlに開いているタブのURLが入っている
		DataTitle = tab.title;
		DataURL = tab.url;
//window.open('https://test.simplehtmlclient.app/toot?content='+tab.title+'\n'+tab.url, '_blank');
var svlist = document.getElementById('black')
		console.log(localStorage["server"])
		for (var i=0;i<5;i++) {
			console.log(svlist.options[i].value)
			if (svlist.options[i].value == localStorage["server"]) {
				svlist.selectedIndex = i
			}

}
	});
}


$("#red").on("click", () => {
Server= document.getElementById('black').value;
	localStorage["server"] = Server
window.open(Server+'/toot?content='+DataTitle+'\n'+DataURL, '_blank');
  //送れない！！
  // chrome.runtime.sendMessage({ color: "red" });

//  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//    chrome.tabs.sendMessage(tabs[0].id, {
//      color: "red"
//    });
//  });
});
