const quoteReducer = (state = {}, action) => {
    switch(action.type) {
        case 'NEW_QUOTE':
			var randomIndex = getRandomInt(action.quotes.length);
			const chosenQuote = action.quotes[randomIndex];
            return chosenQuote; 
                
        default: 
            return state;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default quoteReducer;