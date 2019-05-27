import React, { useReducer, useEffect } from "react"
import Router from "./Router";
import Context from "./Context"
import reducer from "./reducer";
import entry from "./workouts/entry" // put this in initialstate?
import intermediate from "./workouts/intermediate"
import advanced from "./workouts/advanced"

const App = () => {
    const [state, dispatch] = useReducer(reducer, {
        workouts: {
            [entry.id]: entry,
            [intermediate.id]: intermediate,
            [advanced.id]: advanced
        }
    })

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Router />
        </Context.Provider>
    )
}

export default App