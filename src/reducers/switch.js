const switchview = (state = [], action) => {
    switch (action.type) {
        case 'SWITCH_VIEW':
            return [
                ...state,
                {
                    switchtype: action.payload,
                }
            ]
        default:
            return state
    }
}

export default switchview