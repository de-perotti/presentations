import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './presentation';
import preparePresentation from "./preparePresentation";

const getRoot = () => document.getElementById('root');
const renderToRoot = (app: JSX.Element) => ReactDOM.render(app, getRoot());

(async function initPresentation() {
  await preparePresentation();
  renderToRoot(<Presentation/>);
})();
