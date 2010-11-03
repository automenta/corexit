// Catch mouse down and up events
document.addEventListener("mouseup", _corexitOnMouseUp, false);
document.addEventListener("mousedown", _corexitOnMouseDown, false);

function addOverlay() {

    var d = document.createElement('div');
    d.setAttribute("id", "overlayWrapper");

    d.innerHTML =
        '<div id="_corexitOverlay" ' +
        'style="position:fixed;top:5%;left:5%;text-align:left;z-index:99999999;width:90%;height:90%;display:none;overflow:none;color:black;background-color:white; border: 4px solid black">' +
        '  <div id="_corexitTop" style="font-size:20px">'+
        '    <div style="text-align: right">' +
        '      <a href="#" style="" onClick="document.getElementById(\'_corexitOverlay\').style.display=\'none\';">X</a>' +
        '    </div>' +
        '  </div>' +
        '  <div id="_corexitOverlayContent">' +
        '  </div>' +
        '</div>';

    document.body.appendChild(d);

}

addOverlay();