import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import SelectPage from "./components/pages/SelectPage";

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Route exact path="/" component={SelectPage} />
            </>
        </BrowserRouter>
    )
}

export default Router