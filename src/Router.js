import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import SelectPage from "./components/SelectPage";
import BoardPage from "./components/BoardPage";

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Route exact path="/" component={SelectPage} />
                <Route path="/workouts/:workout" exact component={BoardPage}/>
            </>
        </BrowserRouter>
    )
}

export default Router