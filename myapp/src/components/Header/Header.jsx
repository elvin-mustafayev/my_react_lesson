import React from 'react'
import './Header.scss'
import { useContext } from 'react';
import { myCounterContext } from '../Context/CounterContext';
function Header(props) {

const { count} = useContext(myCounterContext);


    return (
      <div className="header-cover">
        <h1>Header</h1>
        <h2>{count}</h2>
      </div>
    );
}
export default Header;