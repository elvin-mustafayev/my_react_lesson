import React from 'react'
import './About.scss'
import {useGlobalContext}  from '../../components/Context/CounterContext';
function About() {
 const { count, increment, decrement } = useGlobalContext();

    return(
        <div>About

           <h2>{count}</h2>


          
        </div>
    )
}
export default About;