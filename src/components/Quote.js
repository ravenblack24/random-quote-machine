import React from 'react';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Quote extends React.Component {
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