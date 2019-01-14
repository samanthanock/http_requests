var https = require('https');

function getAndPrintHTML() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html',
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var dataString = '';

    response.on('data', function(data) {
      dataString = data.toString();
      console.log(dataString);

      response.on('end', function() {
        console.log('end');
        console.log(dataString);
      });
    });
  });
}
