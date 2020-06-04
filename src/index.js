import React from 'react';
import ReactDOM from 'react-dom';
import ReactFCCtest from 'react-fcctest';
import './index.css';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
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

const colors = [
		"#B233FF",
		"#FF33E6",
		"#FF3380",
		"#FF4C33",
		"#FFB233",
		"#E6FF33"
]

class Social extends React.Component {

	render() {
		let cta;
		let faIcon;
		let identifier;

		switch(this.props.type) {
			case "Twitter":
				cta = "https://twitter.com/intent/tweet?hashtags=quotes&text="+this.props.quote+" - "+this.props.author;
				faIcon = faTwitter;
				identifier = "tweet-quote";
				break;

			case "Tumblr":
				cta = "https://www.tumblr.com/widgets/share/tool?posttype=quote&caption="+this.props.author+"&content="+this.props.quote;
				faIcon = faTumblr;
				identifier = "tumblr-quote";
				break;

			default:
				cta = "#";
				faIcon = faQuestion;
				identifier = "unknown-quote";
				break;
		}

		return (
			<a href={cta} id={identifier} style={{background: this.props.color}} className="border-radius-5">
				<FontAwesomeIcon icon={faIcon} className ="icon-style" />
			</a>
		);
	}
}

class Quote extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div id="text"><span className="quote" style={{color: this.props.color}}><FontAwesomeIcon icon={faQuoteLeft} /> {this.props.quote}</span></div>
				<div id="author" style={{color: this.props.color}}>- {this.props.author}</div>
			</React.Fragment>
			);
	}
}

class RandomQuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.getRandomQuote = this.getRandomQuote.bind(this);	
		this.state = {
			quote: "",
			author: "",
			color: ""
		}
	}

	componentDidMount() {
		this.getRandomQuote();
	}

	getRandomQuote() {
		var randomIndex = getRandomInt(quotes.length);
		const color = colors[randomIndex];
		document.body.style.backgroundColor = color;

		this.setState({
			quote: quotes[randomIndex].quote,
			author: quotes[randomIndex].author,
			color
		});
	}

	render() {
		return (
			<div id="quote-box" className="border-radius-5">
				<Quote quote={this.state.quote} author={this.state.author} color={this.state.color} />
				<div id="buttonRow">
					<div id="social">
						<div><Social type={"Twitter"} quote={this.state.quote} author={this.state.author} color={this.state.color} /></div>
						<div><Social type={"Tumblr"} quote={this.state.quote} author={this.state.author} color={this.state.color} /></div>
					</div>
					<div id="new">
						<div><button id="new-quote" onClick={this.getRandomQuote} style={{background: this.state.color}}  className="border-radius-5">New quote</button></div>
					</div>
				</div>
				<ReactFCCtest />
			</div>
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
