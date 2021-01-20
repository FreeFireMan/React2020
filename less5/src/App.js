import React,{useState, useEffect,useReducer} from "react";

// {type:"SET_TODO_ITEM",payload:json}
const reducer =(state,action)=>{
    switch (action.type) {
        case"SET_TODO_ITEM" : {
            return action.payload
        }
        default : {
            console.error("not valid action",action.type);
            return state;
        }
    }
};

const initialState = null;

export default function App({user:propUser}) {
    const [counter,setCounter] = useState(0);
    // const [todo,setTodo] = useState(null);

    const [state,dispatch] = useReducer(reducer,initialState);

    const fetchData = async () =>{
        const response =await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
        const json = await response.json();
        dispatch({type: "SET_TODO_ITEM", payload: json});
    }

    useEffect(()=>{fetchData()},[counter])
    
  const  hadleInc =()=>setCounter(prevState =>prevState+1);

  const hadleReset=()=>setCounter(prevState => prevState=0);

  const hadleR=()=>setCounter(prevState => prevState-1);



  return (
      <div>
        <h1>number : {counter} </h1>
          <button onClick={hadleInc}>+</button>
          <button onClick={hadleReset}>0</button>
          <button onClick={hadleR}>-</button>
          {
              !!state&&(<h2>{state.id}-{state.title}</h2>)
          }
      </div>
  )
}

