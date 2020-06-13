import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from './components/header';
import Browse from './containers/browse';
import Cart from './containers/cart';
import Detail from './containers/detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div className="layout-column flex">
				<Header/>
	        	<Switch>
	        		<Route path="/cart" component={Cart} />
	        		<Route path="/detail/:id" component={Detail} />
	        		<Route path="/browse" component={Browse}/>
	        		<Redirect from="/" to="/browse"/>
	        	</Switch>
	        </div>
	    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
