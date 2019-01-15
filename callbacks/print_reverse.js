var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/print_reverse.html',
};

function printReverse(html) {
  var reverseArray = html
    .split('')
    .reverse()
    .join('');
  console.log(reverseArray);
}

getHTML(requestOptions, printReverse);

console.log(printReverse(html));
