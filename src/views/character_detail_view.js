const HandyDom = require('../helpers/handy_dom.js');

const CharacterDetailView = function (parentElement, characterData) {
  this.parentElement = parentElement;
  this.characterData = characterData;
}

CharacterDetailView.prototype.render = function () {
  const characterDiv = document.createElement('div');
  characterDiv.classList.add('character-container');
  this.parentElement.appendChild(characterDiv);

  const image = HandyDom.createElement('img', 'src', this.characterData.image);
  characterDiv.appendChild(image);

  const characterDetailDiv = document.createElement('div');
  characterDetailDiv.classList.add('character-details');
  characterDiv.appendChild(characterDetailDiv);

  const name = HandyDom.createElement('h3', 'textContent', this.characterData.name)
  characterDetailDiv.appendChild(name);

  const species = HandyDom.createElement('p', 'textContent', `Species: ${this.characterData.species}`)
  characterDetailDiv.appendChild(species);

  const status = HandyDom.createElement('p', 'textContent', `Status: ${this.characterData.status}`)
  characterDetailDiv.appendChild(status);

};

module.exports = CharacterDetailView;

// HandyDom.prototype.createElement = function (elementType, key, value) {
//   const element = document.createElement(elementType);
//   element[key] = value;
