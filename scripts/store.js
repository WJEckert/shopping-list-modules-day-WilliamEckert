 import item from "./item.js";

const store = {
    items: [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
      ],
      hideCheckedItems: false
    }
function findById(id){
    store.items.find(function(id){
        return item.id = id;
    })
}


 export default store


 
    