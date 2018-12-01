const PubSub = require('../helpers/pub_sub.js');

const PageSelectView = function (element) {
  this.element = element;
}

PageSelectView.prototype.bindEvents = function () {
  for (let i = 1; i <= 25; i++) {
    const option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    this.element.appendChild(option);
  }
  this.element.addEventListener('change', (event) => {
    const pageChosen = event.target.value;
    PubSub.publish('PageSelectView:page-chosen', pageChosen);
  })
};

module.exports = PageSelectView;
