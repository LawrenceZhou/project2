"use strict";

function cs142MakeMultiFilter(oArray) {
  var originalArray = oArray;
  var currentArray = originalArray.concat();

  var filterer = function filterer(filter, callback) {
    if (typeof(filter) !== 'function') {
      return currentArray;
    }else {
      for (var i = 0; i < currentArray.length; i++) {
        //Fiter 
        if (!filter(currentArray[i])) {
          currentArray.splice(i, 1);
        }
      }
      if (typeof(callback) === 'function') {
        //Call the callback function, and change the reference of this
        callback.call(originalArray, currentArray);
      }
      
      return filterer;
    }
  };
  return filterer;
}

