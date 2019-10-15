import React from 'react';
import ReactDOM from 'react-dom';
import './Mycss.scss';
import * as serviceWorker from './serviceWorker';
import Chatbox from './ChatBox';

ReactDOM.render(<Chatbox/> , document.getElementById('root'));


serviceWorker.unregister();
