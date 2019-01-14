var https = require('https');

function getHTML(options, callback) {
  https.get(options, function(response) {
    response.setEncoding('utf8');
    var dataString = '';

    response.on('data', function(data) {
      dataString = data.toString();
      console.log(dataString);

      response.on('end', function() {
        console.log('end');
        callback(dataString);
      });
    });
  });
}

function printHTML(html) {
  console.log(html);
  return getHTML(printHTML);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html',
};

console.log(getHTML(requestOptions));
