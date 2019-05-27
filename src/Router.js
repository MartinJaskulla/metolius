import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import SelectPage from "./components/SelectPage";
import BoardPage from "./components/BoardPage";
import AddPage from "./components/AddPage";
import ExercisePage from "./components/ExercisePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SelectPage} />
                <Route path="/workouts/new" component={AddPage}/>
                <Route path="/workouts/exercise" component={ExercisePage}/>
                <Route path="/workouts/:workoutId" component={BoardPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router