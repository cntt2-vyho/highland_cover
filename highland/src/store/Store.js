var redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editItem: {},
    size: {}
}
//function push idForOrderPage into arrayIdForOrderPage
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit };

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editItem }

        case "GET_SIZE":
            return { ...state, size: action.size }

        default:
            return state
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function () {
//     console.log(store.getState());

// })
export default store;