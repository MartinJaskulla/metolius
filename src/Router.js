import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
// import WorkoutPage from "./components/pages/WorkoutPage";
import SelectWorkoutPage from "./components/pages/SelectWorkoutPage";

const MyComponent = () => {
    return (
        <BrowserRouter>
            <>
                <Route path="/" exact component={SelectWorkoutPage}/>
                {/* <Route path="/workouts/:workout" exact component={WorkoutPage}/> */}
            </>
        </BrowserRouter>
    )
}

export default MyComponent