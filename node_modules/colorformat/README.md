# colorformat

A simple JavaScript library to convert color format from RGB to HEX and vice versa

## Installation

```
npm install colorformat
```

## Example use cases

Convert an RGB to HEX:

```javascript
cf = require('colorformat');

cf.rgbToHex(230, 241, 246); // => '#e6f1f6'

//  or with string input
cf.rgbToHex('230', '241', '246'); // => '#e6f1f6'
```

Convert a HEX to RGB:

```javascript
cf = require('colorformat');

cf.hexToRgb('#e6f1f6'); //=> [ 230, 241, 246 ]

// or if you want a string for styling
cf.hexToRgb('#e6f1f6', { styling: true }); //=> 'rgb(230, 241, 246)'

```

## The simplest browser use

Load the script `node_modules/colorformat/index.js` and then simply:
```javascript
ColorFormat.rgbToHex(230, 241, 246); // => '#e6f1f6'
```
**Note:** Supports [UMD](https://github.com/umdjs/umd) for easier browser use with the tools of your preference.

## How to run tests

```
npm test
```
