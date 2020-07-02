import React from 'react';
import Social from './Social';
import Quote from './Quote';
import newQuote from '../redux/actions/newQuote';
import { connect } from 'react-redux';
import ReactFCCtest from 'react-fcctest';

const QUOTEAPI = './quote-json.json';

class RandomQuoteGenerator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: []
		}
	}
	componentDidMount() {
		fetch(QUOTEAPI).then(
			res => res.json()
		).then( data => {
			this.setState({quotes: data});
			this.props.dispatch(newQuote(data))});	
	}

	render() {
		const quote = this.props.quote.quote;
		const author = this.props.quote.author;
		const color = this.props.quote.color;
		document.body.style.backgroundColor = color;

		return (
			<React.Fragment>
				<section id="quote-box">
					<Quote quote={quote} author={author} color={color} />
					<Social type={"Twitter"} quote={quote} author={author} color={color} />
					<Social type={"Tumblr"} quote={quote} author={author}  color={color}/>
					<button id="new-quote" onClick={() => this.props.dispatch(newQuote(this.state.quotes))} className="quote-button" style={{background: color}}>
						New quote
					</button>
				</section>
				<ReactFCCtest />	
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	const {quote} = state;
    return { quote };
}

export default connect(mapStateToProps)(RandomQuoteGenerator)