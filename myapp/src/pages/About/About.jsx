import React, { useContext } from 'react'
import './About.scss'
import {myCounterContext}  from '../../components/Context/CounterContext';
function About() {
 const { count, increment, decrement } = useContext(myCounterContext);

    return(
        <div>About

           <h2>{count}</h2>


          
        </div>
    )
}
export default About;