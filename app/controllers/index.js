var jsPDF = require('jspdf').jsPDF;

var doc = new jsPDF();

doc.text(20, 20, 'Hello world!');
doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
doc.addPage();
doc.text(20, 20, 'Do you like that?');

var file = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, 'test.pdf');
file.write(doc.output());
var pdfview = Ti.UI.createWebView({width:'100%',height:'100%',data:file});
//var win = Ti.UI.createWindow();
$.index.add(pdfview);
//$.index.open({modal:true});



function doClick(e) {
    alert($.label.text);
}



$.index.open();
