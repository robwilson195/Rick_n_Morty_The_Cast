const HandyDom = {
  createElement: function (elementType, key, value) {
    const element = document.createElement(elementType);
    element[key] = value;
    return element;
  }
}


module.exports = HandyDom;
