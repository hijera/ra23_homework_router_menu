import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

Menu.propTypes = {

};

function Menu(props) {
    return (<nav className="menu">
        {props.menu.map(item=><NavLink to={item.link} exact className={'menu__item'} activeClassName={'menu__item-active'} >{item.title}</NavLink>)}
    </nav>)
}

export default Menu;