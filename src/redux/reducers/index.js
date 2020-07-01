import {combineReducers}  from "redux";
import quotesReducer from './quotes';
import quoteReducer from './quote';

const rootReducer = combineReducers({
    quote: quoteReducer,
    quotes: quotesReducer
});

export default rootReducer;
