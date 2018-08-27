const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    if (action.type="ADD_PERSON") {
        return {
            ...state,
            persons: state.persons.concat({id: new Date(), name: action.name})
        }
    }
    return state;
}

export default reducer;