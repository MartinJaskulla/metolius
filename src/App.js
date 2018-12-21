import React, { useReducer } from "react"
import Router from "./Router";
import Context from "./Context"
import reducer from "./reducer";
import entry from "./workouts/entry"
import intermediate from "./workouts/intermediate"
import advanced from "./workouts/advanced"

const initialState = { workouts: [entry, intermediate, advanced] }

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Router />
        </Context.Provider>
    )
}

export default App