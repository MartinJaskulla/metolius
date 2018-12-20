import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import BoardPage from "./components/pages/BoardPage";
import SelectWorkoutPage from "./components/pages/SelectWorkoutPage";

const MyComponent = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/" exact component={SelectWorkoutPage}/>
                <Route path="/workouts/:workout" exact component={BoardPage}/>
            </>
        </BrowserRouter>
    )
}

export default MyComponent