<<<<<<< HEAD
=======
import store from './store.js'
import item from "./item.js";
>>>>>>> 4bda50ae9a4d99101964dbe2eb51e54c823585e1
import shoppingList from './shopping-list.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);