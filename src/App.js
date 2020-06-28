import React from 'react';
import './App.css';
import DriftPage from './components/DriftPage';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
    const menu_list = [{link: '/', title: 'Главная'},
        {link: '/drift', title: 'Дрифт-такси'},
        {link: '/timeattack', title: 'Time Attack'},
        {link: '/forza', title: 'Forza Karting'}];
    return (
        <Router>
            <div>
                <Menu menu={menu_list}/>
                <div className="page">
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/drift" component={DriftPage}/>
                    <Route path="/timeattack" component={TimeAttackPage}/>
                    <Route path="/forza" component={ForzaPage}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
