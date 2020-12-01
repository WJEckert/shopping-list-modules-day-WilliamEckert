 import item from "./item.js";

const store = {
    items: [
        
      ],
      hideCheckedItems: false
    }
function findById(id){
    store.items.find(function(id){
        return item.id = id;
    })
}


 export default store


 
    