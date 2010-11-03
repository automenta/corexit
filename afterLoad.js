document.body.innerHTML =
    '<div id="_corexitPanel"' +
    'style="position:fixed;right:0;text-align:right;z-index:99999999;"></div>' +
    document.body.innerHTML;

mychromeclockDisp();

function mychromeclockDisp(){
    var now = new Date();
    var hh = now.getHours();
    var mm = now.getMinutes();
    var ss = now.getSeconds();
    var obj = document.getElementById("mychromeclock");
    if( hh < 10 ){ hh = "0" + hh; }
    if( mm < 10 ){ mm = "0" + mm; }
    obj.innerText = hh+":"+mm;
    setTimeout("mychromeclockDisp()", (60-ss)*1000);
}

