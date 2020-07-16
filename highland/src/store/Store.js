var redux = require('redux');
var _ = require('lodash');
const noteInitialState = {
    addItem: {},
    editItem: {},

    modalData: {},
    index: '',
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "GET_ADD_DATA":
            return { ...state, addItem: action.addItem }

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editItem }

        case "TURN_OFF_ALL":
            return { ...state, editItem: {}, addItem: {}, size: {}, key: '', isIced: false, status: '' }

        case "GET_KEY":
            return { ...state, index: action.index }

        case "GET_MODAL_DATA":
            return { ...state, modalData: action.modalData }

        default:
            return state
    }
}
var store = redux.createStore(allReducer);
// store.subscribe(function () {
//     console.log(store.getState());

// })
export default store;