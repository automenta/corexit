
document.body.innerHTML =
    '<div id="_corexitOverlay"' +
    'style="position:fixed;top:5%;left:5%;text-align:left;z-index:99999999;width:90%;height:90%;display:none;background-color: gray;border:black 1px solid;color:white;font-family:Arial,Sans;overflow:none">' +
    '  <div id="_corexitTop" style="font-size:20px">'+
    '    <div style="text-align: right">' +
    '      <a href="#" style="color:white;" onClick="document.getElementById(\'_corexitOverlay\').style.display=\'none\';">X</a>' +
    '    </div>' +
    '  </div>' +
    '  <div id="_corexitOverlayContent">' +
    '  </div>' +
    '</div>' +
    document.body.innerHTML;


// Catch mouse down and up events
document.addEventListener("mouseup", onMouseUp, false);
document.addEventListener("mousedown", onMouseDown, false);
