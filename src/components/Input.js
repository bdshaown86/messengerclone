import React,{useState,useContext} from 'react'
import { ContextProvider } from '../context/ContextProvider';

const Input = () => {
    const [msg,setMsg] = useState("");
    const {sendMessage} = useContext(ContextProvider)
    
    const sendMsg = (e ) => {
      e.preventDefault();
      sendMessage(msg)
      setMsg("")
    }
    return (
       
     <div className="input__form">
        <form onSubmit={sendMsg} >
           <input 
             type="text" 
             name="" 
             id="" 
             placeholder="Write a message..."
             className="input__control"
             value={msg}
             onChange={(e) => setMsg(e.target.value)}
             required
             />
        </form>
      </div>
    )
}

export default Input
