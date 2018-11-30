const CharacterListView = require('./views/character_list_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {

  const pageSelectView = new pageSelectView;
  pageSelectView.bindEvents();

  const characterListView = new CharacterListView;
  characterListView.bindEvents();

  const characters = new Characters;
  characters.bindEvents();


});
