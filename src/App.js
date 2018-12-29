import React, { useReducer, useEffect } from "react"
import Router from "./Router";
import Context from "./Context"
import reducer from "./reducer";

const App = () => {
    const [state, dispatch] = useReducer(reducer, {workouts: []})

    return (
        <Context.Provider value={{ state, dispatch }}>
            <Router />
        </Context.Provider>
    )
}

export default App