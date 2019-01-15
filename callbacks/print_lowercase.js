var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/print_lowercase.html',
};

function printLowerCase(html) {
  var arrayPrint = html.toLowerCase();
  console.log(arrayPrint);
}

getHTML(requestOptions, printLowerCase);

console.log(printUpperCase(html));
