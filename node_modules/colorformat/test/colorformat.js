var expect = require('chai').expect;
var colorformat = require('../index');
var rgbToHex = colorformat.rgbToHex;
var hexToRgb = colorformat.hexToRgb;

describe('#rgbToHex', function(){
  it('converts any RGB color to HEX', function(){
    expect(rgbToHex(238, 66, 102)).to.eql('#ee4266');
  });

  it('converts edge colors correctly', function(){
    expect(rgbToHex(255, 255, 255)).to.eql('#ffffff');
    expect(rgbToHex(0, 0, 0)).to.eql('#000000');
  });

  it('works with string inputs', function(){
    expect(rgbToHex('238', '66', '102')).to.eql('#ee4266');
  });

  describe('when an argument is out of 0-255 range', function(){
    it('throws an Error', function() {
      expect(rgbToHex.bind(null, 0, 0, 256)).to.throw(Error);
    });
  });
});

describe('#hexToRgb', function(){
  it('converts any HEX color to RGB', function(){
    expect(hexToRgb('#ee4266')).to.eql([238, 66, 102]);
  });

  it('converts edge colors correctly', function(){
    expect(hexToRgb('#ffffff')).to.eql([255, 255, 255]);
    expect(hexToRgb('#000000')).to.eql([0, 0, 0]);
  });

  it('works for HEX triplets', function(){
    expect(hexToRgb('#09c')).to.eql(hexToRgb('#0099cc'));
  });

  it('works for HEX without preceding #', function(){
    expect(hexToRgb('ee4266')).to.eql([238, 66, 102]);
    expect(hexToRgb('fff')).to.eql([255, 255, 255]);
  });

  describe('when styling option is true', function(){
    it('returns the RGB in a css string format', function() {
      expect(hexToRgb('#ee4266', { styling: true })).to.eql('rgb(238, 66, 102)');
    });
  });

  describe('when input is not a string', function(){
    it('throws a TypeError', function() {
      expect(hexToRgb.bind(null, 343535)).to.throw(TypeError);
    });
  });

  describe('when length of string input is not 3 or 6 (# aside)', function(){
    it('throws a TypeError', function() {
      expect(hexToRgb.bind(null, '#ee42666')).to.throw(TypeError);
    });
  });
});
