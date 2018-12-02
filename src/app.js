const CharacterListView = require('./views/character_list_view.js');
const PageSelectView = require('./views/page_select_view.js');
const Characters = require('./models/characters.js');

document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector('.main-select');
  const pageSelectView = new PageSelectView(selectElement);
  pageSelectView.bindEvents();

  const characterWrapperElement = document.querySelector('.characters-wrapper')
  const characterListView = new CharacterListView(characterWrapperElement);
  characterListView.bindEvents();

  const characters = new Characters;
  characters.bindEvents();


});
