var random = require('random-int');
var randomF = require('random-float');
var SimplexNoise = require('simplex-noise');
var lerp = require('lerp');
var colorformat = require('colorformat');

var simplex = new SimplexNoise();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var image = document.getElementById('image');

var w = window.innerWidth > window.innerHeight ? window.innerWidth / 2.8 : window.innerWidth / 1.3;
var h = w;

canvas.style['margin-top'] = (window.innerHeight / 2) - (w / 2) - (50) + 'px';

canvas.width = w;
canvas.height = w;
var t = 0;
var randoms = [];

function pickPoints(number) {
  var randoms = [];
  for (var i = 0; i < number; i++) {
    var x = random(0, w);
    var y = random(0, h);
    var sizeX = 1;
    var sizeY = 1;
    var targetX = x;
    var length = randomF(w / 5, w / 3);
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
      speed: randomF(0.09, 0.3),
      length: length,
      size: randomF(1, 6)
    };
    randoms.push(r);
  }
  return randoms;
}

image.onload = function() {
  ctx.drawImage(image, 0, 0, w, w);
  randoms = pickPoints(600);
};

canvas.addEventListener('click', function() {
  ctx.globalAlpha = 1;
  ctx.drawImage(image, 0, 0, w, w);
  randoms = pickPoints(600);
});

function render() {
  randoms.forEach(function(random) {
    random.y += random.speed;
    random.length -= random.speed;
    var noise = simplex.noise2D(random.x, random.y) / 4;
    // var noise = 0;
    random.x += noise;
    if (random.y < h && random.length > 0) {
      var alpha = (random.distanceY - random.length) / random.distanceY;
      var c1 = random.colour;
      var c2 = random.targetColour;
      var r = Math.round(lerp(c1.r, c2.r, alpha));
      var g = Math.round(lerp(c1.g, c2.g, alpha));
      var b = Math.round(lerp(c1.b, c2.b, alpha));
      ctx.fillStyle = colorformat.rgbToHex(r, g, b);
      ctx.globalAlpha = randomF(0.2, 0.5);
      ctx.fillRect(random.x + noise, random.y, random.size + noise + randomF(-5, 5), randomF(1, 2) + noise);
    }
  });

  requestAnimationFrame(render);
}

render();