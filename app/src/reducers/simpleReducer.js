const initialState = {
    APP: "HRMS",
    result: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            console.log(action.payload);
            return {
                ...state,
                result: action.payload
            }
        default:
            return state
    }
}