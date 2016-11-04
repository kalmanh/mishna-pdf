var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-Italic.ttf'
    }
};

// Overall PDF template
var docDefinition = {
    content: [
    {
      table: {
        headerRows: 1,
        widths: [ 15, '*', 'auto', '*' ],

        body: [
          [ "", { text: 'Hebrew', style: 'tableHeader' }, { text: 'English', style: 'tableHeader' }, { text: 'Mishnayos Quota', style: 'tableHeader' } ]
        ]
      }
    }
  ],
  styles: {
    tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
    }
  }
};



exports.generatePdf = function(schedule, pathToWrite){
  // Mishnah table body
  var tableBody = docDefinition.content[0].table.body;
  schedule.forEach(function (day) {
      tableBody.push(["", day.hebrew, day.english, day.pretty]);
  });

  var PdfPrinter = require('pdfmake/src/printer');
  var fs = require('fs');
  var printer = new PdfPrinter(fonts);

  var pdfDoc = printer.createPdfKitDocument(docDefinition);
  var writeStream = fs.createWriteStream(pathToWrite);
  pdfDoc.pipe(writeStream);
  pdfDoc.end();

  writeStream.on('finish', function () {
    var open = require('open');
    open(pathToWrite);
  });
};