import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) =>  {
    switch (action.type) {
        case 'increment':
            return { ... state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return { ... state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return { ... state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ... state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwoBee() {
    const [count, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <p/>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <p/>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>(2) Increment</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>(2) Decrement</button>
            <button onClick={() => dispatch({type: 'increment2', value: 5})}>(2) Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 5})}>(2) Decrement 5</button>
            <p/>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    )
}

export default CounterTwoBee