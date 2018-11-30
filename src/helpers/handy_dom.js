const HandyDom = function () {
}

HandyDom.prototype.createElement = function (elementType, key, value) {
  const element = document.createElement(elementType);
  element[key] = value;
};
