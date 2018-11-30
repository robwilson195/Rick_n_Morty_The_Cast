const PubSub = require('../helpers/pub_sub.js');

const CharacterListView = function (element) {
  this.element = element;
  this.pageCharacters = null;
}

CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:character-data-ready', (event) => {
    this.pageCharacters = event.detail;
    console.log(this.pageCharacters);
  });
};

module.exports = CharacterListView;
