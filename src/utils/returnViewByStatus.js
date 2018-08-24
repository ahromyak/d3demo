const returnViewByStatus = (key) => {
    switch(key) {
        case "incomplete": {
            return 'INTRO'
        }
        // case "incomplete": {
        // 	return 'FORMSVIEW'
        // }
        case "pending": {
            return 'PENDING'
        }
        case "grace": {
            return 'GRACE'
        }
        case "eligible": {
            return 'ELIGIBLE'
        }
        case "ineligible": {
            return 'INELIGIBLE'
        }
        default: {
            return 'INTRO'
        }
    }
}

export default returnViewByStatus;