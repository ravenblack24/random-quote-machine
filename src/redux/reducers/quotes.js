const initialState = {
    quotes: []
};

const quotesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_QUOTES':
            return {
                quotes: action.quotes
            }
        default: 
            return state;
    }
}

export default quotesReducer;