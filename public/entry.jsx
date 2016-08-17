
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Article from './article.jsx'

ReactDOM.render(
  <Article/>,

  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();

}
