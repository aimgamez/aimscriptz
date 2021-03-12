module.exports = {
    methodOne: function () {},
    methodTwo: function () {}
};

getPixelRatio : function getPixelRatio(context) {
  console.log('Determining pixel ratio.');

  // I'd rather not have a giant var declaration block,
  // so I'm storing the props in an array to dynamically
  // get the backing ratio.
  var backingStores = [
    'webkitBackingStorePixelRatio',
    'mozBackingStorePixelRatio',
    'msBackingStorePixelRatio',
    'oBackingStorePixelRatio',
    'backingStorePixelRatio'
  ];

  var deviceRatio = window.devicePixelRatio;

  // Iterate through our backing store props and determine the proper backing ratio.
  var backingRatio = backingStores.reduce(function(prev, curr) {
    return (context.hasOwnProperty(curr) ? context[curr] : 1);
  });

  // Return the proper pixel ratio by dividing the device ratio by the backing ratio
  return deviceRatio / backingRatio;
},

generateCanvas : function generateCanvas(w, h) {
  console.log('Generating canvas.');

  var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d');
  // Pass our canvas' context to our getPixelRatio method
  var ratio = this.getPixelRatio(context);

  // Set the canvas' width then downscale via CSS
  canvas.width = Math.round(w * ratio);
  canvas.height = Math.round(h * ratio);
  canvas.style.width = w +'px';
  canvas.style.height = h +'px';
  // Scale the context so we get accurate pixel density
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  return canvas;
}
