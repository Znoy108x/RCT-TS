import React, { useReducer } from 'react'

type stateType = {
    count: number
}

const initialState = {
    count: 0
}

type UpdateAction = {
    type: "increment" | "decrement",
    payload: number
}

type ResetAction = {
    type: "reset",
}

type actionType = UpdateAction | ResetAction

function reducer(state: stateType, action: actionType) {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload }
        case "decrement":
            return { count: state.count - action.payload }
        case "reset":
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{state.count}</div>
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>Decrement</button>
            <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
        </div>
    )
}

export default Counter