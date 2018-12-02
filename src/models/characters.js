const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Characters = function () {
  this.characterData = [];
};

Characters.prototype.bindEvents = function () {
  PubSub.subscribe('PageSelectView:page-chosen', (event) => {
    const pageChosen = event.detail;
    this.publishCharacters(pageChosen-1);
  })
  this.getData();
};

Characters.prototype.getData = function () {
  for (let i = 1; i <= 25; i++) {
    const url = `https://rickandmortyapi.com/api/character/?page=${i}`;
    const request = new Request(url);
    request.get()
    .then((pageCharacters) => {
      // console.log(pageCharacters);
      this.characterData.push(pageCharacters.results );
      if (i === 25) {
        console.log(this.characterData);
        this.publishCharacters(0);
      } else {
        return;
      }
    })
    .catch((error) => {
      PubSub.publish('Characters:error', error);
    });
  }
};

Characters.prototype.publishCharacters = function (pageIndex) {
  PubSub.publish('Characters:character-data-ready', this.characterData[pageIndex]);
}

module.exports = Characters;
