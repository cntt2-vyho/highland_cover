
const noteInitialState = {
    addItem: {},
    editItem: {},

    modalData: {},
    index: '',
    currentUser: {},
    isShow: false
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
        case 'LOGIN_USER':
            return { ...state, currentUser: action.payload }

            case "OPEN":
                return {...state, isShow: true};

                case "CLOSE":
                return {...state, isShow: false};

        default:
            return state
    }
}
export default allReducer;