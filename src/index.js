import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import loadSchedules from './actions/schedulesActions';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const store = configureStore();
store.dispatch(loadSchedules());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
