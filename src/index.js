import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import {Helmet} from "react-helmet";
import RandomQuoteGenerator from './components/RandomQuoteGenerator';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Helmet>
			<meta charSet="utf-8" />
			<title>ReactJS - Random Quote Generator</title>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
		</Helmet>
  		<RandomQuoteGenerator />
	</Provider>,
  	document.getElementById('root')
);
