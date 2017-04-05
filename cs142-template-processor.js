"use strict";

function Cs142TemplateProcessor(temp) {
  this.template = temp;
}

Cs142TemplateProcessor.prototype.fillIn = function(dic) {
  var parseArray = this.template.match(/\{{2}[\S]*\}{2}/g);

  for(var i = 0; i < parseArray.length; i++) {
    //Take out the two bracelets before and the two following to get
    //the key. 
    var key = parseArray[i].slice(2, -2);
    if (dic.hasOwnProperty(key)) {
      this.template = this.template.replace(parseArray[i], dic[key]);
    }else {
      //We assume that every property is between two space, or at least
      //there is one space in front of it(which means the property is at
      //the end of the string or followed by a comma. So we replace the 
      //space before the property and the property with an empty string. 
      this.template = this.template.replace(" " + parseArray[i], "");
    }
  }

 return this.template;
};



