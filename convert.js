var converter = require('office-converter')();
  converter.generatePdf('input/DSK.docx', function(err, result) {
    
  if (err) {
    console.log ('error :'+err);
}
  // Process result if no error
    if (result.status === 0) {
      console.log('Output File located at ' + result.outputFile);
    }
  });
  /*converter.generateHtml('input/DSK.docx', function(err, result) {
    // Process result if no error
    if (result.status === 0) {
      console.log('Output File located at ' + result.outputFile);
    }
  });*/
