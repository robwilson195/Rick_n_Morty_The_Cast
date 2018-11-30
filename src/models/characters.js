const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Characters = function () {
  this.characterData = [];
};

Characters.prototype.bindEvents = function () {
  this.getData();
};

Characters.prototype.getData = function () {
  for (let i = 1; i <= 25; i++) {
    const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
    const request = new Request(url);
    request.get()
    .then((pageCharacters) => {
      this.characterData.push([pageCharacters.results]);
      if (i === 25) {
        this.publishCharacters(0);
      }
    })
    .catch((error) => {
      PubSub.publish('Characters:error', err);
    });
  }
};

Characters.prototype.publishCharacters = function (pageIndex) {
  PubSub.publish('Characters:character-data-ready', this.characterData[pageIndex]);
}

module.exports = Characters;
