import React ,{createContext,useState,useContext} from 'react'
import App from '../../App';
import Users from '../../pages/Users/Users';


 export const myCounterContext=createContext();

 const CounterContext = ({children}) =>{
    const [count,setCount] =useState(0);

    const increment =()=>{
      setCount(count + 1);
    }
     const decrement = () => {
       setCount(count -1);
     };

    return(
        <myCounterContext.Provider value={{count,setCount,increment,decrement}}>

          {children}

        </myCounterContext.Provider>
    )
}


export default  CounterContext ;