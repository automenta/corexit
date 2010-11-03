//DEPRECATED

function corexit(response) {
    var text = response.text;

    if (text.length > 0) {
        var panel = document.getElementById("_corexitPanel");
        var content = document.getElementById("_corexitContent");
        //var data = document.getElementById("_corexitData");

        var prev = document.getElementById("_corexitPrev");
        var next = document.getElementById("_corexitNext");

        var firstSlide = text;
        
        content.innerHTML = firstSlide;
        prev.innerHTML = '<a href="#" onClick="alert(\'clicked\');">&lt;--</a>'; // alert(document.getElementById(\"_corexitFrame\").innerText);
        next.innerHTML = '<a href="#">--&gt;</a>';

        panel.style.display = '';    // set visible
    }
}

chrome.extension.sendRequest({'command' : 'getText'}, corexit);