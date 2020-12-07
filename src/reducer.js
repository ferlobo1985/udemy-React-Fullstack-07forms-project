import React, { useReducer } from  'react';
import { reducerFile } from './utils/reducerFile';

const Reducer = () => {
    const [state,dispatch] = useReducer(reducerFile,{ user:'Steve',count:0,clicks:0})
    
    const changeNameHandler = () => {
        const newName = ['MIke','Ron','Steve'];
        return {
            type:"change_name", 
            payload: newName[Math.floor(Math.random()* newName.length)]
        }
    }


    return(
        <div className="container">
            <div>
                Current user: {state.user}
            </div>
            <div>
                Current clicks: {state.clicks}
            </div>
            <div>
                Current count: {state.count}
            </div>
            <button onClick={()=> dispatch({type:"increment",payload:1})}>Increment</button>
            <button onClick={()=> dispatch({type:"decrement",payload:1})}>Decrement</button>
            <button onClick={()=> dispatch(changeNameHandler())}>Change name</button>

        </div>
    )
}

export default Reducer;