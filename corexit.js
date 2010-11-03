//DEPRECATED

function corexit(response) {
    var text = response.text;

    if (text.length > 0) {
        var panel = document.getElementById("_corexitOverlay");
        var content = document.getElementById("_corexitOverlayContent");

        var src = chrome.extension.getURL('corexit.html');
        
        content.innerHTML = '<iframe frameborder="0" marginwidth="2" marginheight="2" scrolling="auto" align="middle" width="100%" height="100%" src="' + src +'"></iframe>';
        panel.style.display = '';    // set visible
    }
}

chrome.extension.sendRequest({'command' : 'getText'}, corexit);