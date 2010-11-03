
document.body.innerHTML =
    '<div id="_corexitData" style="display:none">' +
    '</div>' +
    '<div id="_corexitFrame" style="display:none">' +
    '   FRAME!' +
    '</div>' +
    '<div id="_corexitPanel"' +
    'style="position:fixed;top:5%;left:5%;text-align:left;z-index:99999999;width:90%;height:90%;display:none;background-color: gray;border:black 1px solid;color:white;font-family:Arial,Sans">' +
    '  <div id="_corexitTop" style="font-size:20px">'+
    '    <div style="text-align: right">' +
    '      <a href="#" style="color:white;" onClick="document.getElementById(\'_corexitPanel\').style.display=\'none\';">X</a>' +
    '    </div>' +
    '  </div>' +
    '  <div id="_corexitContent" style="height:90%;font-size:70px;overflow:auto">'+
    '  </div>' +
    '  <div id="_corexitControls" style="">' +
    '    <div id="_corexitPrev" style="float: left">' +
    '       [LEFT]' +
    '    </div>' +
    '    <div id="_corexitNext" style="float: right">' +
    '       [RIGHT]' +
    '    </div>' +
    '  </div>' +
    '</div>' +
    document.body.innerHTML;

