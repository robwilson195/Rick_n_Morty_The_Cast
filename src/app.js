const CharacterListView = require('./views/character_list_view.js');
const PageSelectView = require('./views/page_select_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {

  const element = document.querySelector('.main-select');
  const pageSelectView = new PageSelectView(element);
  pageSelectView.bindEvents();

  const characterListView = new CharacterListView;
  characterListView.bindEvents();

  const characters = new Characters;
  characters.bindEvents();


});
