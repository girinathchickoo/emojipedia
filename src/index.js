import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import emojipedia from "./profiledata";
import App from "./App";
import "./App.css";





ReactDOM.render( 
	<div >
	<h1 className="heading">emojipedia</h1>
	<div className="App">
	{emojipedia.map(function(e){return <App 
		key={e.id}
		emoji={e.emoji}
		name={e.name}
		meaning={e.meaning}
   />})}</div>
	</div>,document.getElementById("root"));
	


