var random = require('random-int');
var randomF = require('random-float');
var SimplexNoise = require('simplex-noise');
var lerp = require('lerp');
var colorformat = require('colorformat');
var _ = require('lodash');

var simplex = new SimplexNoise();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = document.getElementById('image');
image.src = '2-3.jpg';

var redPixels = new Image();
var greenPixels = new Image();
var yellowPixels = new Image();
var darkPixels = new Image();
var text = new Image();
text.src = 'text.png';

var w = window.innerWidth > window.innerHeight ? window.innerWidth / 2.2 : window.innerWidth / 1.1;
var h = w;
var t = 0;
var start = false;
var time = 0;

canvas.style['margin-top'] = (window.innerHeight / 2) - (w / 2) - (window.innerHeight / 29) + 'px';

canvas.width = w;
canvas.height = w;

function between(x, min, max) {
  return x >= min && x <= max;
}

function initialiseChannels() {
  var imageData = ctx.getImageData(0, 0, w, w);
  var data1 = new Uint8ClampedArray(imageData.data);
  var data2 = new Uint8ClampedArray(imageData.data);
  var data3 = new Uint8ClampedArray(imageData.data);
  var data4 = new Uint8ClampedArray(imageData.data);

  var redImageData = ctx.createImageData(imageData);
  redImageData.data.set(data1);

  var greenImageData = ctx.createImageData(imageData);
  greenImageData.data.set(data2);

  var yellowImageData = ctx.createImageData(imageData);
  yellowImageData.data.set(data3);

  var darkImageData = ctx.createImageData(imageData);
  darkImageData.data.set(data4);

  for (var i = 0; i < redImageData.data.length; i += 4) {
    var r = imageData.data[i];
    var g = imageData.data[i + 1];
    var b = imageData.data[i + 2];
    var a = imageData.data[i + 3];

    var isRed = between(r, 190, 255) && between(g, 0, 130) && randomF(0, 10) > 9.5;
    if (!isRed) {
      redImageData.data[i] = 0;
      redImageData.data[i + 1] = 0;
      redImageData.data[i + 2] = 0;
      redImageData.data[i + 3] = 0;
    }

    var isGreen = between(g, 120, 255) && between(b, 110, 255) && randomF(0, 10) > 3;
    if (!isGreen) {
      greenImageData.data[i] = 0;
      greenImageData.data[i + 1] = 0;
      greenImageData.data[i + 2] = 0;
      greenImageData.data[i + 3] = 0;
    }

    var isYellow = between(g, 220, 230) && between(b, 220, 230) && randomF(0, 20) > 19;
    if (!isYellow) {
      yellowImageData.data[i] = 0;
      yellowImageData.data[i + 1] = 0;
      yellowImageData.data[i + 2] = 0;
      yellowImageData.data[i + 3] = 0;
    }

    var isDark = between(r, 0, 13) && between(g, 0, 13) && between(b, 0, 13) && randomF(0, 10) > 5;
    if (!isDark) {
      darkImageData.data[i] = 0;
      darkImageData.data[i + 1] = 0;
      darkImageData.data[i + 2] = 0;
      darkImageData.data[i + 3] = 0;
    }
  }

  ctx.putImageData(redImageData, 0, 0);
  redPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(greenImageData, 0, 0);
  greenPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(yellowImageData, 0, 0);
  yellowPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(darkImageData, 0, 0);
  darkPixels.src = canvas.toDataURL('image/png');
}

image.onload = function() {
  ctx.drawImage(image, 0, 0, w, w);
  initialiseChannels();
  render();
};

var startTime = Date.now();

canvas.addEventListener('click', function() {
  ctx.globalAlpha = 1;
  ctx.drawImage(image, 0, 0, w, w);

  time = 0;
  start = start ? false : true;

  if (!start) initialiseChannels();
  startTime = Date.now();
});

function render(timestamp) {
  var p = ((Date.now() - startTime) / 1000) * 10;
  if (time === 0) {
    ctx.drawImage(image, 0, 0, w, w);
  }

  if (start) {
    time++;
  }
  var progress = time / 20;
  var n = simplex.noise2D(progress, random.y);

  if (p < 150 && start) {
    ctx.globalAlpha = randomF(0, 0.4);
    ctx.drawImage(greenPixels, 0, (p / 3), w, w);
    ctx.globalAlpha = randomF(0, 0.2);
    ctx.drawImage(yellowPixels, n + randomF(-1, 1), (p / 2), w, w);
    ctx.globalAlpha = randomF(0, 0.9);
    ctx.drawImage(redPixels, n + randomF(-1, 1), p + randomF(0, 1), w, w);
    ctx.globalAlpha = randomF(0, 0.9);
    ctx.drawImage(darkPixels, n + randomF(-1, 1), p, w, w);
  } else {
    start = false;
  }

  ctx.globalAlpha = 1.0;

  var unit = w / 20;
  var textSize = unit * 8;
  var x = unit * 6;
  var y = unit * 6 - 20;
  if (start) {
    x += randomF(-1, 1);
    y += randomF(-1, 1);
    ctx.globalAlpha = randomF(0.3, 0.8);
  }
  ctx.textBaseline = 'middle';
  // ctx.fillText('FLOWERS', x, y);
  ctx.drawImage(text, x, y, textSize, textSize);
  requestAnimationFrame(render);
}