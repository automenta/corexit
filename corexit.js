
function corexit(text) {   
    var obj = document.getElementById("_corexitPanel");
    obj.innerText = text.text;    
}

chrome.extension.sendRequest({'command' : 'getText'}, corexit);