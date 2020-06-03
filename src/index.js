import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faTumblrSquare } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
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


class Social extends React.Component {

	render() {
		let cta;
		let faIcon;
		let identifier;

		switch(this.props.type) {
			case "Twitter":
				cta = "https://twitter.com/intent/tweet?hashtags=quotes&text="+this.props.quote+" - "+this.props.author;
				faIcon = faTwitterSquare;
				identifier = "tweet-quote";
				break;

			case "Tumblr":
				cta = "https://www.tumblr.com/widgets/share/tool?posttype=quote&caption="+this.props.author+"&content="+this.props.quote;
				faIcon = faTumblrSquare;
				identifier = "tumblr-quote";
				break;

			default:
				cta = "#";
				faIcon = faQuestion;
				identifier = "unknown-quote";
				break;
		}

		return (
			<a href={cta} id={identifier}>
				<FontAwesomeIcon icon={faIcon} />
			</a>
		);
	}
}

class Quote extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="text">{this.props.quote}</div>
				<div id="author">{this.props.author}</div>
			</React.Fragment>
			);
	}
}

class RandomQuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);	
		this.state = {
			quote: "",
			author: "",
		}
	}

	handleClick() {
		var randomIndex = getRandomInt(quotes.length);
		console.log(randomIndex);
		this.setState({
			quote: quotes[randomIndex].quote,
			author: quotes[randomIndex].author,
		});	
	}

	render() {
		return (
			<React.Fragment>
				<div id="quote-box">
					<Quote quote={this.state.quote} author={this.state.author} />
				</div>	
				<div>
					<div><Social type={"Twitter"} quote={this.state.quote} author={this.state.author} /></div>
					<div><Social type={"Tumblr"} quote={this.state.quote} author={this.state.author} /></div>
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
