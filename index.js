'use strict';

var random = require('random-int');
var bowser = require('bowser');
var randomF = require('random-float');
var SimplexNoise = require('simplex-noise');

var simplex = new SimplexNoise();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image1 = document.getElementById('image');
image1.src = './assets/flowers.png';
var image2 = document.getElementById('image2');
image2.src = './assets/flowers-05.png';

var isMobileOrTablet = bowser.mobile || bowser.tablet;

var images = [image1, image2];

var image = new Image();

var redPixels = new Image();
var redPixels2 = new Image();
var greenPixels = new Image();
var veryGreenPixels = new Image();
var yellowPixels = new Image();
var darkPixels = new Image();
var bluePixels = new Image();

var text = new Image();
var mouseX = 0;
var mouseY = 0;
text.src = './assets/text.png';

var spin = document.getElementById('spin');
spin.style.opacity = 0.0;

var w = window.innerWidth > window.innerHeight ? window.innerWidth / 2.2 : window.innerWidth / 1.02;
var start = false;
var time = 0;
var paused = true;
var melting = false;
var currentImageIndex = 0;
var meltSpeed = 13;
var maxProgress = 130;

var clicks = 0;

canvas.style['margin-top'] = (window.innerHeight / 2) - (w / 2) - (window.innerHeight / 21) + 'px';

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
  var data7 = new Uint8ClampedArray(imageData.data);

  var redImageData = ctx.createImageData(imageData);
  redImageData.data.set(data1);

  var redImageData2 = ctx.createImageData(imageData);
  redImageData2.data.set(data5);

  var blueImageData2 = ctx.createImageData(imageData);
  redImageData2.data.set(data7);

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

    var isRed = between(r, 190, 255) && between(g, 0, 130) && randomF(0, 10) > 9.4;

    if (!isRed) {
      redImageData.data[i] = 0;
      redImageData.data[i + 1] = 0;
      redImageData.data[i + 2] = 0;
      redImageData.data[i + 3] = 0;
    }

    var isRed2 = between(r, 200, 255) && between(g, 0, 130) && randomF(0, 10) > 5;

    if (!isRed2) {
      redImageData2.data[i] = 0;
      redImageData2.data[i + 1] = 0;
      redImageData2.data[i + 2] = 0;
      redImageData2.data[i + 3] = 0;

    } else {

      if (randomF(0, 10) > 2) {
        blueImageData2.data[i] = random(0, 50);
        blueImageData2.data[i + 1] = random(0, 50);
        blueImageData2.data[i + 2] = random(150, 150);
        blueImageData2.data[i + 3] = 40;
      } else {
        blueImageData2.data[i] = 0;
        blueImageData2.data[i + 1] = 0;
        blueImageData2.data[i + 2] = 0;
        blueImageData2.data[i + 3] = 0;
      }

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

    var isYellow = between(g, 220, 230) && between(b, 220, 230) && randomF(0, 20) > 10;
    if (!isYellow) {
      yellowImageData.data[i] = 0;
      yellowImageData.data[i + 1] = 0;
      yellowImageData.data[i + 2] = 0;
      yellowImageData.data[i + 3] = 0;
    }

    var isDark = between(r, 0, 13) && between(g, 0, 13) && between(b, 0, 13) && randomF(0, 10) > 1;
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
  ctx.putImageData(blueImageData2, 0, 0);
  bluePixels.src = canvas.toDataURL('image/png');

  ctx.clearRect(0, 0, w, w);
  ctx.drawImage(image, 0, 0, w, w);
}

image.onload = function () {
  ctx.drawImage(image, 0, 0, w, w);
  drawText();
  initialiseChannels();
  ctx.drawImage(image, 0, 0, w, w);
  render();
};

var src = images[currentImageIndex].src;
image.src = src;

var startTime = Date.now();

if (isMobileOrTablet) {
  spin.style.display = 'block';
  canvas.style['margin-top'] = (window.innerHeight / 2) - (w / 2) - (window.innerHeight / 18) + 'px';
}

function selectNextImage(images) {
  var index = currentImageIndex === 0 ? 1 : 0;
  currentImageIndex = index;
  return images[index];
}

canvas.addEventListener('click', function () {
  clicks++;
  time = 0;

  startTime = Date.now();

  if (melting) {
    paused = true;
    start = false;
  } else {
    paused = false;
    start = true;
  }

  if (isMobileOrTablet && !melting && (clicks % 3) === 0) {
    spin.style.opacity = 1.0;
    setTimeout(function () {
      image = selectNextImage(images);
      ctx.drawImage(image, 0, 0, w, w);
      drawText();
      setTimeout(initialiseChannels, 20);
      ctx.drawImage(image, 0, 0, w, w);
      spin.style.opacity = 0.0;
    }, 50);

  } else if (!melting && (clicks % 3) === 0) {
    image = selectNextImage(images);
    ctx.drawImage(image, 0, 0, w, w);
    drawText();
    initialiseChannels();
    ctx.drawImage(image, 0, 0, w, w);
  }
});

canvas.addEventListener('mousemove', function (e) {
  mouseX = e.clientX - e.target.offsetLeft + 1;
  mouseY = e.clientY - e.target.offsetLeft + 1;
});

canvas.addEventListener('touchmove', function (e) {
  mouseX = e.touches[0].clientX - e.target.offsetLeft - 1;
});

function drawText() {
  var unit = w / 20;
  var textSize = unit * 6;
  var x = unit * 7;
  var y = unit * 7 - 17;
  if (start && melting) {
    x += randomF(-1, 1) - (mouseX / 300) + 2;
    y += randomF(-1, 1);
    ctx.globalAlpha = randomF(0.3, 0.8);
  } else {
    ctx.globalAlpha = 1;
  }
  ctx.drawImage(text, x, y, textSize, textSize);
}

function screenshot(canvas) {
  var link = document.getElementById('screen');
  var img = canvas.toDataURL('image/jpeg');
  link.href = img;
  link.target = "_blank";
  link.download = "Ehsan Ziya - FLOWERS.jpg";
  link.click();
}

function melt(p, n) {
  ctx.globalAlpha = randomF(0.0, 0.1);
  ctx.drawImage(greenPixels, 0 + randomF(-1.5, 1.5) + (mouseX / (w / randomF(0, 3))), (p / 7) + n, w, w);

  ctx.globalAlpha = randomF(0.0, 0.1);
  ctx.drawImage(veryGreenPixels, 0 + randomF(-5, 5) + (mouseX / (w / randomF(0, 4))), (p / 9) + n, w, w);

  ctx.globalAlpha = randomF(0.0, 0.3);
  ctx.drawImage(yellowPixels, n + randomF(-1, 1) + (mouseX / (w / randomF(1, 3))), (p / 2), w, w);

  ctx.globalAlpha = randomF(0.0, 0.2);
  ctx.drawImage(yellowPixels, 0, 0, w, w);

  ctx.globalAlpha = randomF(0.2, 0.6);
  ctx.drawImage(redPixels, randomF(-1, 1) + (mouseX / (w / randomF(2, 5))), p + randomF(0, 1), w, w);

  ctx.globalAlpha = randomF(0.5, 0.6);
  ctx.drawImage(redPixels2, 0, p / 5, w, w);

  ctx.globalAlpha = randomF(0.2, 0.3);
  ctx.drawImage(darkPixels, n + randomF(-1, 1) + (mouseX / (w / randomF(2, 8))), p, w, w);

  ctx.globalAlpha = (p / 120) / 5;
  ctx.drawImage(bluePixels, 0, (p / 3) + n + randomF(0, 10), w, w);
}

document.getElementById('save').addEventListener('click', function () {
  screenshot(canvas);
});

function render() {
  var p = ((Date.now() - startTime) / 1000) * meltSpeed;

  if (!paused && start) {
    time++;
  }

  var progress = time / 20;
  var n = simplex.noise2D(progress, random.y);
  if (p < maxProgress && !paused && start && (clicks % 3) !== 0) {
    melting = true;
    melt(p, n);
  } else {
    melting = false;
    if (clicks !== 0 && !paused && (clicks % 3) !== 0) {
      clicks = 2;
    }
  }

  drawText();
  requestAnimationFrame(render);
}
