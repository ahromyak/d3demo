const returnViewByStatus = (key) => {
    switch(key) {
        case "incomplete": {
            return 'INTRO'
        }
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