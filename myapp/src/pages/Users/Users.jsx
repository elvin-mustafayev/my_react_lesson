import React ,{useState,useContext}from 'react'
import'./Users.scss'
import About from '../About/About';
import { myCounterContext} from '../../components/Context/CounterContext';

function Users() {
  
   const { count, increment, decrement } = useContext(myCounterContext);
  const[username,setUsername]=useState('');
  const [isActive,setActive] =useState(false);
  const changeUsername =(e)=>{
    setUsername(e.target.value);
    console.log(e.target.value);
  }

   const toggleActive =() =>{
    setActive(!isActive);
   }
   
    return (
      <div>
        <h1>{count}</h1>
        <h2>Users</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => changeUsername(e)}
        />

        <p>Username :{username}</p>
        <button type="button" onClick={toggleActive}>Toggle button</button>
        {
            isActive?  <div> Active</div> :<div> Non Active</div>
        }
      </div>
    );
}
export default Users