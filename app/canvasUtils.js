define(function () {
  var canvas = document.getElementById('sunburstCanvas');
  var context = canvas.getContext('2d');

  var conf = {};
  var thickness = 50;

  /**
  * Assume that the input is >= 0 and <= 360, and convert this angle to a radian angle.
  * @param  {Float} angle the degree angle
  */
  var toRadian = function(angle) {
    var toRad = Math.PI / 180;
    /*
    *  -90 because the 0 is the same 0 as the trigonometric circle but we want it to be on top (90)
    *  and arc of circle are drown clockwise
    */
    return angle * toRad - 90 * toRad;
  }

  /**
  * Create a number of colors to be used by the sunburst arcs. Only called once at the loading of this module.
  * @param  {Float} frequency1 I don't remember
  * @param  {Float} frequency2 I don't remember
  * @param  {Float} frequency3 I don't remember
  * @param  {Float} phase1     I don't remember
  * @param  {Float} phase2     I don't remember
  * @param  {Float} phase3     I don't remember
  * @param  {Float} center     the center of the luminance I think
  * @param  {Float} width      the width of the luminance I think
  * @param  {Float} len        the number of colors to be generated
  * @return {Array}            the arary containing the colors
  */
  var makeColorGradient = function(frequency1, frequency2, frequency3, phase1, phase2, phase3, center, width, len) {
    if (center == undefined)   center = 128;
    if (width == undefined)    width = 127;
    if (len == undefined)      len = 50;
    var colors = [];

    for (var i = 0; i < len; ++i) {
      var red = Math.sin(frequency1*i + phase1) * width + center;
      var grn = Math.sin(frequency2*i + phase2) * width + center;
      var blu = Math.sin(frequency3*i + phase3) * width + center;
      colors[i] = {"r":red, "g": grn, "b": blu};
    }

    return colors;
  }


  /**
  * Converts an RGB color value to HSL. Conversion formula
  * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
  * Assumes r, g, and b are contained in the set [0, 255] and
  * returns h, s, and l in the set [0, 1].
  *
  * @param   Number  r       The red color value
  * @param   Number  g       The green color value
  * @param   Number  b       The blue color value
  * @return  Array           The HSL representation
  */
  function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }

      h /= 6;
    }

    return [ h, s, l ];
  }

  /**
  * After intense testing I came up with those param.
  * @type {[type]}
  */
  var colors = makeColorGradient(.015,.015,.015,0,2,4, 170, 85, 360);

  return {
    setConf: function (conf) {
      thickness = conf.getThickness;
    },
    drawArc: function (radius, beginAngle, endAngle, color, composition) {
      context.globalCompositeOperation = composition || 'source-over';
      context.beginPath();
      context.arc(canvas.width / 2, canvas.height / 2, radius, toRadian(beginAngle), toRadian(endAngle), false);
      context.lineWidth = thickness;
      context.strokeStyle = color;
      context.stroke();
      context.closePath();
    },
    getColor: function (angleBegin, depth) {
      var index = Math.floor((angleBegin)%360); //Math.floor(angleBegin * (colors.length - 1)/ 360);
      var c = rgbToHsl(colors[index].r, colors[index].g, colors[index].b);
      c[2] = (0.8 + (depth-1)/15)/2;
      return "hsl("+(c[0]*360)+", "+(c[1]*100)+"%, "+(c[2]*100)+"%)";
    },
    getContext: function() {
      return context;
    },
    toRadian: function(angle) {
      return toRadian(angle);
    },
    clearSunburst: function() {
      context.clearRect(0,0,1500,700);
    }

  };
});
