/*
var images = document.getElementsByTagName('img');

for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://i.pinimg.com/280x280_RS/cf/d5/97/cfd59773f905e50f08240a3b5250570b.jpg';
}
*/

// var iframe = document.getElementsByTagName("iframe");

var iframe = document.getElementsByName("linea")[0].contentDocument;
var head = iframe.getElementsByTagName('head');
var body = iframe.getElementsByTagName('body')[0];

var css = '<style>.body_verde {background-color: blue;}</style>';

console.log('gabriel', body);

// console.log("Gabriel", body.style);

// body.style.backgroundColor = 'blue';