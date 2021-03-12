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
