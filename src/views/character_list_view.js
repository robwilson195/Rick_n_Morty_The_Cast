const HandyDom = require('../helpers/handy_dom.js');
const PubSub = require('../helpers/pub_sub.js');
const CharacterDetailView = require('./character_detail_view.js');

const CharacterListView = function (element) {
  this.element = element;
  this.pageCharacters = null;
}

CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:character-data-ready', (event) => {
    this.pageCharacters = event.detail;
    console.log(this.pageCharacters);
    this.render();
  });
};

CharacterListView.prototype.render = function () {
  this.element.innerHTML = '';
  this.pageCharacters.forEach((character) => {
    const characterView = new CharacterDetailView(this.element, character);
    characterView.render();
  })
};

module.exports = CharacterListView;
