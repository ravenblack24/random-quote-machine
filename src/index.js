import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const quotes = [
	{ 
		quote: "Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die." ,
	  	author: "Captain Kirk",
	 },
	{ 
		quote: "Change is the essential process of all existence." ,
	  	author: "Spock",
	 },
	{ 
		quote: "With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably." ,
	  	author: "Jean-Luc Picard",
	 },
	{ 
		quote: "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true." ,
	  	author: "Spock",
	 },
	{ 
		quote: "Live now; make now always the most precious time. Now will never come again." ,
	  	author: "Jean-Luc Picard",
	 },	 	 	 	 
];


function Social(props) {
	return (
		<a href={props.href} id="tweet-quote">
			<FontAwesomeIcon icon={props.icon} />
		</a>
		);
}

class Quote extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="text">{quotes[this.props.index].quote}</div>
				<div id="author">{quotes[this.props.index].author}</div>
			</React.Fragment>
			);
	}
}

class RandomQuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);	
		this.state = {
			quoteId: 1,
		}
	}

	handleClick() {
		var randomIndex = getRandomInt(quotes.length);
		console.log(randomIndex);
		this.setState({
			quoteId: randomIndex,
		});	
	}

	render() {
		return (
			<React.Fragment>
				<div id="quote-box">
					<Quote index={this.state.quoteId}/>
				</div>	
				<div>
					<div><Social icon={faTwitterSquare} href="tbc" /></div>
					<div><Social icon={faTumblrSquare} href="tbc" /></div>
					<div><button id="new-quote" onClick={this.handleClick}>New quote</button></div>
				</div>
			</React.Fragment>
			);
	}

}

ReactDOM.render(
  <RandomQuoteGenerator />,
  document.getElementById('root')
);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
