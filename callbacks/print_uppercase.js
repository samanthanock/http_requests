var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/print_uppercase.html',
};

function printUpperCase(html) {
  var arrayUpper = html.toUpperCase();
  console.log(arrayUpper);
}

getHTML(requestOptions, printUpperCase);

console.log(printUpperCase(html));
