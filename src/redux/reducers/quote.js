const quotes = [
	{ 
		quote: "Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die." ,
		author: "Captain Kirk",
		color: "#B233FF"
	 },
	{ 
		quote: "Change is the essential process of all existence." ,
		author: "Spock",
		color: "#462255"
	 },
	{ 
		quote: "With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably." ,
		author: "Jean-Luc Picard",
		color: "#FF3380"
	 },
	{ 
		quote: "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true." ,
		author: "Spock",
		color: "#FF4C33"
	 },
	{ 
		quote: "Live now; make now always the most precious time. Now will never come again." ,
		author: "Jean-Luc Picard",
		color: "#FFB233"
	 },	 	
	 { 
		quote: "Compassion: that's the one things no machine ever had. Maybe it's the one thing that keeps men ahead of them." ,
		author: "Dr. McCoy",
		color: "#313B72"
	 },	  	 	 
];

const initialState = {
    quote: "Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die." ,
    author: "Captain Kirk",
    color: "#B233FF"
};

const quoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEW_QUOTE':
            var randomIndex = getRandomInt(quotes.length);
            return quotes[randomIndex]; 
                
        default: 
            return state;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default quoteReducer;