var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/print_lowercase.html',
};

function printUpperCase(html) {
  var arrayPrint = html.toLowerCase();
  console.log(arrayPrint);
}

getHTML(requestOptions, printUpperCase);

console.log(printUpperCase(html));
