const INITIAL_STATE = {
    eligibilityStatus: 'incomplete',
    switchtype: 'INTRO'
}


const switchview = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SWITCH_VIEW':
            return {
                ...state,
                switchtype: action.payload,
            }
        default:
            return state
    }
}

export default switchview