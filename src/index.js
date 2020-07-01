import React from 'react';
import ReactDOM from 'react-dom';
import ReactFCCtest from 'react-fcctest';
import {Helmet} from "react-helmet";
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
			<a href={cta} className="quote-social" id={identifier} style={{backgroundColor: this.props.color}}>
				<FontAwesomeIcon icon={faIcon} style={{backgroundColor: this.props.color}}/>
			</a>
		);
	}
}

class Quote extends React.Component {
	render() {
		return (
			<blockquote className="quote-container" style={{color: this.props.color}}>
				<p className="quote" id="text">
					<FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
					{this.props.quote}</p>
				<footer class="author" id="author">
					- {this.props.author}
				</footer>
			</blockquote>
		);
	}
}

class RandomQuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.getRandomQuote = this.getRandomQuote.bind(this);	
		this.state = {
			quoteId: 0,
		}
	}

	componentDidMount() {
		this.getRandomQuote();
	}

	getRandomQuote() {
		var randomIndex = getRandomInt(quotes.length);
		this.setState({
			quoteId: randomIndex
		});
	}

	render() {
		const quote = quotes[this.state.quoteId].quote;
		const author = quotes[this.state.quoteId].author;
		const color = quotes[this.state.quoteId].color;
		document.body.style.backgroundColor = color;

		return (
			<React.Fragment>
				<Helmet>
					<meta charSet="utf-8" />
					<title>ReactJS - Random Quote Generator</title>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				</Helmet>
				<section id="quote-box">
					<Quote quote={quote} author={author} color={color} />
						<Social type={"Twitter"} quote={quote} author={author} color={color} />
						<Social type={"Tumblr"} quote={quote} author={author}  color={color}/>
						<button id="new-quote" onClick={this.getRandomQuote} className="quote-button" style={{background: color}}>
							New quote
						</button>
				</section>
				<ReactFCCtest />	
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