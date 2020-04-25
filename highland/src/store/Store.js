var redux = require('redux');

const noteInitialState = {
  categoryId : ''
}
//function push idForOrderPage into arrayIdForOrderPage
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "GET_CATEGORY_ID":
            return { ...state, categoryId: action.categoryId }
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function () {
//     console.log(store.getState());

// })
export default store;