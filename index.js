var random = require('random-int');
var randomF = require('random-float');
var SimplexNoise = require('simplex-noise');
var lerp = require('lerp');
var colorformat = require('colorformat');
var _ = require('lodash');

var simplex = new SimplexNoise();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image1 = document.getElementById('image');
image1.src = './assets/flowers.png';
var image2 = document.getElementById('image2');
image2.src = './assets/flowers-05.png';

var images = [image1, image2];

var image = new Image();

var redPixels = new Image();
var redPixels2 = new Image();
var greenPixels = new Image();
var veryGreenPixels = new Image();
var yellowPixels = new Image();
var darkPixels = new Image();
var text = new Image();
text.src = './assets/text.png';

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
  ctx.globalAlpha = 1;
  ctx.drawImage(image, 0, 0, w, w);

  var imageData = ctx.getImageData(0, 0, w, w);
  var data1 = new Uint8ClampedArray(imageData.data);
  var data2 = new Uint8ClampedArray(imageData.data);
  var data3 = new Uint8ClampedArray(imageData.data);
  var data4 = new Uint8ClampedArray(imageData.data);
  var data5 = new Uint8ClampedArray(imageData.data);
  var data6 = new Uint8ClampedArray(imageData.data);

  var redImageData = ctx.createImageData(imageData);
  redImageData.data.set(data1);

  var redImageData2 = ctx.createImageData(imageData);
  redImageData2.data.set(data5);

  var greenImageData = ctx.createImageData(imageData);
  greenImageData.data.set(data2);

  var veryGreenImageData = ctx.createImageData(imageData);
  veryGreenImageData.data.set(data6);

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

    var isRed2 = between(r, 200, 255) && between(g, 0, 130) && randomF(0, 10) > 6;

    if (!isRed2) {
      redImageData2.data[i] = 0;
      redImageData2.data[i + 1] = 0;
      redImageData2.data[i + 2] = 0;
      redImageData2.data[i + 3] = 0;
    }

    var isGreen = between(g, 120, 255) && between(b, 110, 230) && randomF(0, 10) > 3;
    if (!isGreen) {
      greenImageData.data[i] = 0;
      greenImageData.data[i + 1] = 0;
      greenImageData.data[i + 2] = 0;
      greenImageData.data[i + 3] = 0;
    }

    var isVeryGreen = between(g, 100, 255) && between(b, 0, 100) && between(r, 0, 100) && randomF(0, 10) > 9.9;
    if (!isVeryGreen) {
      veryGreenImageData.data[i] = 0;
      veryGreenImageData.data[i + 1] = 0;
      veryGreenImageData.data[i + 2] = 0;
      veryGreenImageData.data[i + 3] = 0;
    }

    var isYellow = between(g, 220, 230) && between(b, 220, 230) && randomF(0, 20) > 16;
    if (!isYellow) {
      yellowImageData.data[i] = 0;
      yellowImageData.data[i + 1] = 0;
      yellowImageData.data[i + 2] = 0;
      yellowImageData.data[i + 3] = 0;
    }

    var isDark = between(r, 0, 13) && between(g, 0, 13) && between(b, 0, 13) && randomF(0, 10) > 2;
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
  ctx.putImageData(redImageData2, 0, 0);
  redPixels2.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(greenImageData, 0, 0);
  greenPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(veryGreenImageData, 0, 0);
  veryGreenPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(yellowImageData, 0, 0);
  yellowPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(darkImageData, 0, 0);
  darkPixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.drawImage(image, 0, 0, w, w);
}

image.onload = function () {

  ctx.drawImage(image, 0, 0, w, w);
  initialiseChannels();
  ctx.drawImage(image, 0, 0, w, w);
  render();
};

var ran = random(0, 10);
var src = images[ran > 5 ? 0 : 1].src;
image.src = src;

var startTime = Date.now();

canvas.addEventListener('click', function () {
  time = 0;
  start = start ? false : true;
  var ran = random(0, 10);
  image = images[ran > 5 ? 0 : 1];
  if (!start) {
    ctx.drawImage(image, 0, 0, w, w);
    initialiseChannels();
    ctx.drawImage(image, 0, 0, w, w);
  }
  startTime = Date.now();
});

function render(timestamp) {
  var p = ((Date.now() - startTime) / 1000) * 10;

  if (start) {
    time++;
  }
  var progress = time / 20;
  var n = simplex.noise2D(progress, random.y);

  if (p < 150 && start) {
    ctx.globalAlpha = randomF(0.0, 0.1);
    ctx.drawImage(greenPixels, 0 + randomF(-1.5, 1.5), (p / 7) + n, w, w);
    ctx.globalAlpha = randomF(0.0, 0.1);
    ctx.drawImage(veryGreenPixels, 0 + randomF(-5, 5), (p / 9) + n, w, w);
    ctx.globalAlpha = randomF(0.0, 0.3);
    ctx.drawImage(yellowPixels, n + randomF(-1, 1), (p / 2), w, w);
    ctx.globalAlpha = randomF(0.0, 0.1);
    ctx.drawImage(yellowPixels, 0, 0, w, w);
    ctx.globalAlpha = randomF(0.1, 0.6);
    ctx.drawImage(redPixels, randomF(-1, 1), p + randomF(0, 1), w, w);
    ctx.globalAlpha = randomF(0.1, 0.5);
    ctx.drawImage(redPixels2, 0, p / 5, w, w);
    ctx.globalAlpha = randomF(0.2, 0.3);
    ctx.drawImage(darkPixels, n + randomF(-1, 1), p, w, w);
  } else {
    start = false;
  }

  var unit = w / 20;
  var textSize = unit * 6;
  var x = unit * 7;
  var y = unit * 7 - 17;
  if (start) {
    x += randomF(-1, 1);
    y += randomF(-1, 1);
    ctx.globalAlpha = randomF(0.3, 0.8);
  }
  ctx.drawImage(text, x, y, textSize, textSize);
  requestAnimationFrame(render);
}
