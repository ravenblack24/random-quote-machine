import React from 'react';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Social extends React.Component {

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