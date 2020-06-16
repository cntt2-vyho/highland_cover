var redux = require('redux');
var _ = require('lodash');
const noteInitialState = {
    addItem: {},
    size: {},
    editItem: {},

    modalData: [],
    index: ''
}
//function push idForOrderPage into arrayIdForOrderPage
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {

        case "GET_ADD_DATA":
            return { ...state, addItem: action.addItem }

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editItem }

        case "GET_SIZE":
            return { ...state, size: action.size }

        case "TURN_OFF_ALL":
            return { ...state, editItem: {}, addItem: {}, size: {}, key: '' }

        case "GET_KEY":
            return { ...state, index: action.index }


        // case "GET_MODAL_DATA":
        //     const arr = JSON.parse(localStorage.getItem('data')) || [];
        //     var datas = [...arr];

        //     var flag = false;

        //     datas.map((value, key) => {

        //         if (_.isEqual(value, action.modalData)) {
        //             flag = true;
        //             datas[key].count += action.modalData.count;
        //         }
        //     });
        //     if (!flag)
        //         datas = [...arr, action.modalData]

        //     localStorage.setItem('data', JSON.stringify(datas));
        //     return { ...state, modalData: action.modalData }


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