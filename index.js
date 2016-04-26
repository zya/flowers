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

var redPixels = new Image();
var greenPixels = new Image();
var yellowPixels = new Image();

var w = window.innerWidth > window.innerHeight ? window.innerWidth / 2.8 : window.innerWidth / 1.3;
var h = w;

canvas.style['margin-top'] = (window.innerHeight / 2) - (w / 2) - (50) + 'px';

canvas.width = w;
canvas.height = w;
var t = 0;
var randoms = [];

var start = false;
var time = 0;

function pickPoints(number) {
  var randoms = [];
  for (var i = 0; i < number; i++) {
    var x = random(0, w);
    var y = random(0, h);
    var sizeX = 1;
    var sizeY = 1;
    var targetX = x;
    var length = randomF(w / 5, w / 4);
    var targetY = y + length;
    var data = ctx.getImageData(x, y, sizeX, sizeY);
    var targetData = ctx.getImageData(targetX, targetY, sizeX, sizeY);
    var r = {
      startX: x,
      startY: y,
      targetX: targetX,
      targetY: targetY,
      distanceY: targetY - y,
      x: x,
      y: y,
      data: data,
      tatgetData: targetData,
      colour: {
        r: data.data[0],
        g: data.data[1],
        b: data.data[2]
      },
      targetColour: {
        r: targetData.data[0],
        g: targetData.data[1],
        b: targetData.data[2]
      },
      time: 0,
      speed: randomF(0.05, 0.09),
      length: length,
      size: randomF(0.5, w / 150)
    };
    randoms.push(r);
  }
  return randoms;
}

image.onload = function() {
  ctx.drawImage(image, 0, 0, w, w);

  var imageData = ctx.getImageData(0, 0, w, w);
  var data1 = new Uint8ClampedArray(imageData.data);
  var data2 = new Uint8ClampedArray(imageData.data);
  var data3 = new Uint8ClampedArray(imageData.data);
  var redImageData = ctx.createImageData(imageData);
  redImageData.data.set(data1);

  var greenImageData = ctx.createImageData(imageData);
  greenImageData.data.set(data2);

  var yellowImageData = ctx.createImageData(imageData);
  yellowImageData.data.set(data3);

  for (var i = 0; i < redImageData.data.length; i += 4) {
    var isRed = redImageData.data[i] > 212 && redImageData.data[i + 2] < 140;
    if (!isRed) {
      redImageData.data[i] = 0;
      redImageData.data[i + 1] = 0;
      redImageData.data[i + 2] = 0;
      redImageData.data[i + 3] = 0;
    }

    var isGreen = greenImageData.data[i + 1] > 190 && greenImageData.data[i + 2] > 150;
    if (!isGreen) {
      greenImageData.data[i] = 0;
      greenImageData.data[i + 1] = 0;
      greenImageData.data[i + 2] = 0;
      greenImageData.data[i + 3] = 0;
    }

    var isYellow = greenImageData.data[i] < 10 && greenImageData.data[i + 1] < 10 && greenImageData.data[i + 2] < 10;
    if (!isYellow) {
      yellowImageData.data[i] = 0;
      yellowImageData.data[i + 1] = 0;
      yellowImageData.data[i + 2] = 0;
      yellowImageData.data[i + 3] = 0;
    }
  }

  randoms = pickPoints(300);

  ctx.putImageData(redImageData, 0, 0);
  // redPixels.imageData.set(redImageData);
  redPixels.src = canvas.toDataURL('image/png');
  // ctx.drawImage(redPixels, 0, 0, w, w);
  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(greenImageData, 0, 0);
  // redPixels.imageData.set(redImageData);
  greenPixels.src = canvas.toDataURL('image/png');
  // ctx.drawImage(greenPixels, 0, 0, w, w);

  ctx.clearRect(0, 0, w, w);
  ctx.putImageData(yellowImageData, 0, 0);
  // redPixels.imageData.set(redImageData);
  yellowPixels.src = canvas.toDataURL('image/png');

  render();
};

canvas.addEventListener('click', function() {
  ctx.globalAlpha = 1;
  ctx.drawImage(image, 0, 0, w, w);
  time = 0;
  start = start ? false : true;
  randoms = pickPoints(300);
  render();
});


function render(timestamp) {
  if (time === 0) {
    ctx.drawImage(image, 0, 0, w, w);
  }

  if (start) {
    time++;
  }
  var progress = time / 50;
  var n = simplex.noise2D(random.x, random.y);

  if (progress < 40) {
    ctx.globalAlpha = 0.5;
    ctx.drawImage(redPixels, 0, progress, w, w);
    ctx.drawImage(greenPixels, 0, progress * -1, w, w);
    // ctx.globalAlpha = 0.1;
    // ctx.drawImage(yellowPixels, n, progress * 0.9, w, w);
  }

  if (start) {
    randoms.forEach(function(random) {
      random.y += random.speed;
      random.length -= random.speed;
      var noise = simplex.noise2D(random.x, random.y) / 4;
      random.x += noise;
      if (random.y < h && random.length > 0) {
        var alpha = (random.distanceY - random.length) / random.distanceY;
        var c1 = random.colour;
        var c2 = random.targetColour;
        var r = Math.round(lerp(c1.r, c2.r, alpha));
        var g = Math.round(lerp(c1.g, c2.g, alpha));
        var b = Math.round(lerp(c1.b, c2.b, alpha));
        ctx.fillStyle = colorformat.rgbToHex(r, g, b);
        ctx.globalAlpha = randomF(0.1, 0.2);
        ctx.fillRect(random.x + noise, random.y, random.size + noise + randomF(-1, 1), randomF(1, 1.5) + noise);
      }
    });
  }

  ctx.font = '25px Helvetica';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.globalAlpha = 1.0;
  ctx.fillText('FLOWERS', w / 2, w / 2);
  requestAnimationFrame(render);
}